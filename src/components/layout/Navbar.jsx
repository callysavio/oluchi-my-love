import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "../../data/site";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [items, setItems] = useState([]);

    // Show only links whose section actually exists on the page.
    useEffect(() => {
        setItems(site.nav.filter((n) => document.getElementById(n.id)));
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
            <a href="#hero" className="nav-brand" onClick={() => setOpen(false)}>
                {site.herName}
            </a>

            <button
                className="nav-toggle"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="nav-links"
                onClick={() => setOpen((o) => !o)}
            >
                {open ? <X size={26} /> : <Menu size={26} />}
            </button>

            <nav id="nav-links" className={`nav-links ${open ? "is-open" : ""}`} aria-label="Sections">
                {items.map((n) => (
                    <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>
                        {n.label}
                    </a>
                ))}
            </nav>
        </header>
    );
}