import { useMemo, useState } from "react";
import SectionHeading from "../common/SectionHeading";
import DayChapter from "./DayChapter";
import Lightbox from "../gallery/Lightbox";
import { abujaIntro, abujaChapters } from "../../data/memories";

export default function Abuja() {
    const [index, setIndex] = useState(null);
    // All photos (not videos) across every day, so the lightbox can flow through the whole trip.
    const photos = useMemo(
        () => abujaChapters.flatMap((c) => c.items.filter((i) => i.type !== "video")),
        []
    );

    return (
        <section id="abuja" className="section section-cream">
            <div className="wrap">
                <SectionHeading eyebrow={abujaIntro.eyebrow} title={abujaIntro.title} subtitle={abujaIntro.text} />
                <div className="chapters">
                    {abujaChapters.map((chapter, i) => (
                        <DayChapter key={chapter.id} chapter={chapter} index={i} photos={photos} onOpen={setIndex} />
                    ))}
                </div>
            </div>
            <Lightbox items={photos} index={index} onClose={() => setIndex(null)} onChange={setIndex} />
        </section>
    );
}