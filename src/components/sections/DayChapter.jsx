import Reveal from "../common/Reveal";
import MediaMosaic from "../gallery/MediaMosaic";

export default function DayChapter({ chapter, index, photos, onOpen }) {
    return (
        <article className="chapter" aria-labelledby={`chapter-${chapter.id}`}>
            <Reveal className="chapter-head">
                <span className="chapter-num">{String(index + 1).padStart(2, "0")}</span>
                <p className="eyebrow">{chapter.label}</p>
                <h3 id={`chapter-${chapter.id}`}>{chapter.title}</h3>
                <p className="chapter-intro">{chapter.intro}</p>
            </Reveal>
            {chapter.items.length > 0 && <MediaMosaic items={chapter.items} photos={photos} onOpen={onOpen} />}
        </article>
    );
}