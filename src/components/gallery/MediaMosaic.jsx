import Reveal from "../common/Reveal";
import SmartImage from "../common/SmartImage";
import VideoCard from "./VideoCard";

// Editorial grid of photos and videos.
// items: the chapter's items   photos: the flat list used by the lightbox   onOpen(index)
export default function MediaMosaic({ items, photos, onOpen }) {
    return (
        <div className="mosaic">
            {items.map((item, i) => {
                const size = item.size || "normal";
                const isVideo = item.type === "video";
                const ratio = item.ratio || (size === "normal" ? "4 / 5" : "3 / 2");

                return (
                    <Reveal as="figure" key={item.file || item.video || i} delay={(i % 3) * 0.08} className={`tile size-${size}`}>
                        {isVideo ? (
                            <VideoCard video={item.video} poster={item.poster} title={item.title} ratio={item.ratio || "16 / 9"} />
                        ) : (
                            <button className="tile-btn" onClick={() => onOpen(photos.indexOf(item))}>
                                <SmartImage file={item.file} alt={item.alt} ratio={ratio} />
                            </button>
                        )}
                        {item.caption && <figcaption>{item.caption}</figcaption>}
                    </Reveal>
                );
            })}
        </div>
    );
}