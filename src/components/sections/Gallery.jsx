import { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import SmartImage from "../common/SmartImage";
import Lightbox from "../gallery/Lightbox";
import { ritaGallery, galleryBand } from "../../data/gallery";

export default function Gallery() {
    const [index, setIndex] = useState(null);

    return (
        <section id="gallery" className="section section-cream">
            <div className="wrap">
                <SectionHeading
                    eyebrow="Her beautiful moments"
                    title="A Gallery Dedicated to Rita"
                    subtitle="Some photographs are simply easier to look at than to describe."
                />

                <Reveal className="band">
                    <SmartImage file={galleryBand.file} alt={galleryBand.alt} className="fill" />
                    <blockquote>{galleryBand.quote}</blockquote>
                </Reveal>

                <ul className="gallery-grid">
                    {ritaGallery.map((p, i) => (
                        <Reveal as="li" key={p.id} delay={(i % 3) * 0.08} className={`g-cell g-${p.size}`}>
                            <button className="g-btn" onClick={() => setIndex(i)}>
                                <SmartImage file={p.file} alt={p.alt} className="g-img" />
                                {p.caption && <span className="g-cap">{p.caption}</span>}
                            </button>
                        </Reveal>
                    ))}
                </ul>
            </div>
            <Lightbox items={ritaGallery} index={index} onClose={() => setIndex(null)} onChange={setIndex} />
        </section>
    );
}