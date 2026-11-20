import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
    return (
        <Reveal className={`section-heading align-${align}`}>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2>{title}</h2>
            {subtitle && <p className="subtitle">{subtitle}</p>}
        </Reveal>
    );
}