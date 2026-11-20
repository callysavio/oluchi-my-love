import { useState } from "react";
import { Play } from "lucide-react";
import SmartImage from "../common/SmartImage";
import { videoUrl } from "../../utils/assets";

// Shows a thumbnail with a play button. Tapping it swaps in a real <video> player
// that keeps the same aspect ratio, so the layout never jumps.
export default function VideoCard({ video, poster, title = "Video", ratio = "16 / 9" }) {
    const src = videoUrl(video);
    const [playing, setPlaying] = useState(false);

    if (!src) {
        return (
            <div className="img-placeholder" style={{ aspectRatio: ratio }} role="img" aria-label={`${title} (video not added yet)`}>
                <span>{`Add video:\n${video}`}</span>
            </div>
        );
    }

    if (playing) {
        return (
            <video className="video-el" style={{ aspectRatio: ratio }} src={src} controls autoPlay playsInline preload="metadata">
                Your browser does not support video playback.
            </video>
        );
    }

    return (
        <button className="video-poster" style={{ aspectRatio: ratio }} onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
            {poster ? <SmartImage file={poster} alt="" className="fill" /> : <span className="poster-fallback fill" />}
            <span className="play" aria-hidden="true">
                <Play size={26} fill="currentColor" />
            </span>
        </button>
    );
}