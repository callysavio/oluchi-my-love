import Reveal from "../common/Reveal";
import { prayerIntro, prayerWishes, prayerClosing } from "../../data/prayer";
import FlowerCorner from "../decor/FlowerCorner";

export default function Prayer() {
  return (
    <section id="prayer" className="prayer">
        <FlowerCorner position="tl" tone="dark" />
        <FlowerCorner position="br" tone="dark" />
      <div className="wrap prayer-grid">
        <Reveal className="prayer-head">
          <p className="eyebrow">{prayerIntro.eyebrow}</p>
          <h2>{prayerIntro.title}</h2>
          <p>{prayerIntro.text}</p>
        </Reveal>

        <ol>
          {prayerWishes.map((w, i) => (
            <Reveal as="li" key={w.title} className="prayer-item">
              <span className="prayer-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal className="prayer-closing">
        <p>{prayerClosing}</p>
      </Reveal>
    </section>
  );
}