import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import SmartImage from "../common/SmartImage";
import { forever } from "../../data/forever";
import { site } from "../../data/site";
import FlowerCorner from "../decor/FlowerCorner";

export default function Forever() {
  return (
    <section id="forever" className="section section-cream">
        <FlowerCorner position="tl" />
        <FlowerCorner position="br" />
      <div className="wrap">
        <div className="forever-grid">
          <div className="forever-text">
            <SectionHeading eyebrow={forever.eyebrow} title={forever.title} align="left" />
            {forever.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 0.08}>
                {p}
              </Reveal>
            ))}
            <Reveal>
              <p className="forever-sign">{forever.sign}</p>
              <span className="signature">{site.yourName}</span>
            </Reveal>
          </div>

          <Reveal className="forever-photo">
            <SmartImage file={forever.photo} alt={forever.photoAlt} ratio="4 / 5" className="arch" />
          </Reveal>
        </div>

        <Reveal className="forever-quote">
          <blockquote>{forever.quote}</blockquote>
        </Reveal>
      </div>
    </section>
  );
}