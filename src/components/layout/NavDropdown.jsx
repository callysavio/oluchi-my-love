import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const canHover = () => window.matchMedia("(hover: hover)").matches;

export default function NavDropdown({ item, active, onNavigate, align = "center" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const panelId = useId();
  const isActive = item.children.some((c) => c.id === active);

  // Close on outside tap/click and on Esc.
  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        ref.current?.querySelector("button")?.focus();
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className={`nav-drop ${open ? "is-open" : ""}`}
      onMouseEnter={() => canHover() && setOpen(true)}
      onMouseLeave={() => canHover() && setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <button
        type="button"
        className={`nav-link nav-drop-btn ${isActive ? "is-active" : ""}`}
        aria-expanded={open}
        aria-controls={panelId}
        // Mouse on a hover device: keep it open. Touch or keyboard: toggle.
        onClick={(e) => (canHover() && e.detail > 0 ? setOpen(true) : setOpen((o) => !o))}
      >
        {item.label}
        <span className="nav-chevron" aria-hidden="true">
          <ChevronDown size={14} strokeWidth={2.4} />
        </span>
      </button>

      <div id={panelId} className={`nav-panel ${align === "right" ? "is-right" : ""}`}>
        <ul className="nav-panel-card">
          {item.children.map((c) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                className={active === c.id ? "is-active" : ""}
                aria-current={active === c.id ? "location" : undefined}
                onClick={(e) => {
                  onNavigate(e, c.id);
                  setOpen(false);
                }}
              >
                <span>{c.label}</span>
                {c.note && <small>{c.note}</small>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}