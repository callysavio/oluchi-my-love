// Finds every local image/video/audio under src/assets automatically.
// In the data files you only write a path RELATIVE to the media folder:
//   images -> "rita/portrait-01.jpg"   (src/assets/images/...)
//   videos -> "abuja/clip-01.mp4"      (src/assets/videos/...)
//   audio  -> "our-song.mp3"           (src/assets/audio/...)
// If a file does not exist yet, the helpers return null and the UI shows a graceful fallback.

const images = import.meta.glob("../assets/images/**/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  query: "?url",
  import: "default",
});

const videos = import.meta.glob("../assets/videos/**/*.{mp4,webm,mov}", {
  eager: true,
  query: "?url",
  import: "default",
});

const audios = import.meta.glob("../assets/audio/**/*.{mp3,m4a,ogg,wav}", {
  eager: true,
  query: "?url",
  import: "default",
});

export const imageUrl = (path) => (path ? images[`../assets/images/${path}`] ?? null : null);
export const videoUrl = (path) => (path ? videos[`../assets/videos/${path}`] ?? null : null);
export const audioUrl = (path) => (path ? audios[`../assets/audio/${path}`] ?? null : null);