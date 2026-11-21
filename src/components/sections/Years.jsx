import { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import SmartImage from "../common/SmartImage";
import Lightbox from "../gallery/Lightbox";
import { yearsIntro, schoolMemories } from "../../data/school";
import FlowerCorner from "../decor/FlowerCorner";

export default function Years() {
    const [index, setIndex] = useState(null);

    return (
        <section id="years" className="section">
            <FlowerCorner position="tl" />
            <div className="wrap">
                <SectionHeading eyebrow={yearsIntro.eyebrow} title={yearsIntro.title} subtitle={yearsIntro.text} />

                <ol className="timeline">
                    {schoolMemories.map((m, i) => (
                        <Reveal as="li" key={m.id} className="timeline-item">
                            <button className="timeline-photo" onClick={() => setIndex(i)}>
                                <SmartImage file={m.file} alt={m.alt} ratio={m.ratio} />
                            </button>
                            <div className="timeline-text">
                                <p className="eyebrow">{m.date}</p>
                                <h3>{m.title}</h3>
                                <p>{m.caption}</p>
                            </div>
                        </Reveal>
                    ))}
                </ol>
            </div>
            <Lightbox items={schoolMemories} index={index} onClose={() => setIndex(null)} onChange={setIndex} />
        </section>
    );
}