import { useState } from "react";
import { imageUrl } from "../../utils/assets";

/**
 * Renders a local image from src/assets/images. If the file is missing or fails to load,
 * shows a soft placeholder instead of a broken image.
 *
 * Props: file ("rita/portrait-01.jpg"), alt, ratio (CSS aspect-ratio, e.g. "4 / 5"),
 *        priority (true = load immediately), contain (true = never crop),
 *        natural (true = real image keeps its own proportions; ratio only shapes the placeholder),
 *        className
 */
export default function SmartImage({
  file,
  alt,
  ratio,
  priority = false,
  contain = false,
  natural = false,
  className = "",
  onClick,
}) {
  const url = imageUrl(file);
  const [failed, setFailed] = useState(false);
  const style = ratio ? { aspectRatio: ratio } : undefined;

  if (!url || failed) {
    return (
      <div
        className={`img-placeholder ${className}`}
        style={style}
        role="img"
        aria-label={alt}
        onClick={onClick}
      >
        <span>{file ? `Add photo:\n${file}` : "Photo"}</span>
      </div>
    );
  }

  return (
    <img
      className={`smart-img ${contain ? "is-contain" : ""} ${className}`}
      style={natural ? undefined : style}
      src={url}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      onClick={onClick}
    />
  );
}