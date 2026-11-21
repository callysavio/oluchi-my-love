import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { site } from "../../data/site";

export default function MobileMenu({ open, items, active, onNavigate }) {
  const [group, setGroup] = useState(null);

  // When the menu opens, expand the group that holds the section she is currently reading.
  useEffect(() => {
    if (!open) return;
    const g = items.find((i) => i.children?.some((c) => c.id === active));
    setGroup(g ? g.label : null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <div
      id="mobile-menu"
      className={`mobile-menu ${open ? "is-open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      <nav aria-label="Sections">
        <ul>
          {items.map((item, i) =>
            item.children ? (
              <li key={item.label} className="m-item" style={{ "--i": i }}>
                <button
                  type="button"
                  className={`m-link m-group-btn ${item.children.some((c) => c.id === active) ? "is-active" : ""}`}
                  aria-expanded={group === item.label}
                  onClick={() => setGroup((g) => (g === item.label ? null : item.label))}
                >
                  <span>{item.label}</span>
                  <span className="nav-chevron m-chevron" aria-hidden="true">
                    <ChevronDown size={18} strokeWidth={2.2} />
                  </span>
                </button>

                <div className={`m-sub ${group === item.label ? "is-open" : ""}`}>
                  <ul>
                    {item.children.map((c) => (
                      <li key={c.id}>
                        <a
                          href={`#${c.id}`}
                          className={`m-sublink ${active === c.id ? "is-active" : ""}`}
                          aria-current={active === c.id ? "location" : undefined}
                          onClick={(e) => onNavigate(e, c.id)}
                        >
                          <span>{c.label}</span>
                          {c.note && <small>{c.note}</small>}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={item.id} className="m-item" style={{ "--i": i }}>
                <a
                  href={`#${item.id}`}
                  className={`m-link ${active === item.id ? "is-active" : ""}`}
                  aria-current={active === item.id ? "location" : undefined}
                  onClick={(e) => onNavigate(e, item.id)}
                >
                  <span>{item.label}</span>
                </a>
              </li>
            )
          )}
        </ul>
      </nav>

      <p className="m-foot" aria-hidden="true">
        {site.welcome.script ?? "With all my love"}
      </p>
    </div>
  );
}