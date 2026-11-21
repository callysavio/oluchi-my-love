import { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import SmartImage from "../common/SmartImage";
import Lightbox from "../gallery/Lightbox";
import { callsIntro, callScreenshots, callNotes } from "../../data/videocalls";
import FlowerCorner from "../decor/FlowerCorner";

export default function VideoCalls() {
  const [index, setIndex] = useState(null);

  return (
    <section id="calls" className="section">
        <FlowerCorner position="tr" />
        <FlowerCorner position="bl" />
      <div className="wrap">
        <SectionHeading eyebrow={callsIntro.eyebrow} title={callsIntro.title} subtitle={callsIntro.text} />

        <ul className="calls-grid">
          {callScreenshots.map((c, i) => (
            <Reveal as="li" key={c.id} className="call-card">
              <button className="call-btn" onClick={() => setIndex(i)} aria-label={`Open screenshot: ${c.alt}`}>
                <SmartImage file={c.file} alt={c.alt} ratio={c.ratio} natural />
              </button>
              {c.caption && <p className="call-caption">{c.caption}</p>}
            </Reveal>
          ))}
        </ul>

        <ul className="call-notes">
          {callNotes.map((note, i) => (
            <Reveal as="li" key={i} delay={i * 0.1} className="call-note">
              {note}
            </Reveal>
          ))}
        </ul>
      </div>
      <Lightbox items={callScreenshots} index={index} onClose={() => setIndex(null)} onChange={setIndex} />
    </section>
  );
}