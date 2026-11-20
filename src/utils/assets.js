// Finds every local image/video under src/assets automatically.
// In the data files you only write a path RELATIVE to src/assets/images
// (e.g. "rita/portrait-01.jpg") or src/assets/videos (e.g. "abuja/clip-01.mp4").
// If a file does not exist yet, the helpers return null and the UI shows a graceful placeholder.

const images = import.meta.glob(
  "../assets/images/**/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

const videos = import.meta.glob("../assets/videos/**/*.{mp4,webm,mov}", {
  eager: true,
  query: "?url",
  import: "default",
});

export const imageUrl = (path) =>
  path ? (images[`../assets/images/${path}`] ?? null) : null;
export const videoUrl = (path) =>
  path ? (videos[`../assets/videos/${path}`] ?? null) : null;
