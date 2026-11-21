import { useCallback, useEffect, useRef, useState } from "react";
import { site } from "../../data/site";
import NavDropdown from "./NavDropdown";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [items, setItems] = useState([]);
  const headerRef = useRef(null);

  // Keep only links whose section exists; drop groups that end up empty.
  useEffect(() => {
    const exists = (id) => Boolean(document.getElementById(id));
    const next = site.nav
      .map((item) =>
        item.children ? { ...item, children: item.children.filter((c) => exists(c.id)) } : item
      )
      .filter((item) => (item.children ? item.children.length > 0 : exists(item.id)));
    setItems(next);
  }, []);

  // Scrolled state + reading-progress line (throttled with requestAnimationFrame).
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      headerRef.current?.style.setProperty("--p", max > 0 ? Math.min(1, y / max) : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const ids = items.flatMap((i) => (i.children ? i.children.map((c) => c.id) : [i.id]));
    if (!ids.length) return undefined;
    const visible = new Set();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)));
        const current = ids.find((id) => visible.has(id));
        if (current) setActive(current);
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [items]);

  // Mobile menu: lock page scroll, close on Esc, close if the screen becomes desktop-sized.
  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 961px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  // Close the menu first, then scroll (so the page is unlocked and the scroll is smooth).
  const onNavigate = useCallback((e, id) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return; // let "open in new tab" work
    e.preventDefault();
    setOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    }, 80);
  }, []);

  return (
    <>
      <header ref={headerRef} className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
        <a href="#hero" className="nav-brand" onClick={(e) => onNavigate(e, "hero")}>
          {site.herName}
        </a>

        <nav className="nav-desktop" aria-label="Main">
          {items.map((item, i) =>
            item.children ? (
              <NavDropdown
                key={item.label}
                item={item}
                active={active}
                onNavigate={onNavigate}
                align={i === items.length - 1 ? "right" : "center"}
              />
            ) : (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${active === item.id ? "is-active" : ""}`}
                aria-current={active === item.id ? "location" : undefined}
                onClick={(e) => onNavigate(e, item.id)}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <button
          type="button"
          className={`nav-toggle ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="burger" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>

        <span className="nav-progress" aria-hidden="true" />
      </header>

      <MobileMenu open={open} items={items} active={active} onNavigate={onNavigate} />
    </>
  );
}