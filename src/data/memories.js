// ABUJA MEMORIES
// Photos:  put files in src/assets/images/us/   and write "us/filename.jpg"
// Videos:  put files in src/assets/videos/abuja/ and write "abuja/filename.mp4"
// Poster (video thumbnail, optional): an image in src/assets/images/us/
//
// An item is either
//   { file, alt, caption, size, ratio }                        -> photo
//   { type: "video", video, poster, title, caption, size, ratio } -> video
// size:  "large" (wide) | "half" | "normal"      ratio: CSS aspect-ratio, e.g. "4 / 5", "9 / 16"
// To add a memory: add one object to the right day's `items` array. Nothing else to change.

export const abujaIntro = {
  eyebrow: "Our Abuja memories · August",
  title: "Four Days, A Lifetime of Memories",
  text: "In August I travelled to Abuja to see you. From Friday to Monday we had a few days together that I never want to forget. This is my way of keeping them.",
};

export const abujaChapters = [
  {
    id: "before",
    label: "Before",
    title: "The Anticipation",
    intro:
      "Before the trip, there was the waiting, and the hope of finally seeing you in person.",
    items: [],
  },
  {
    id: "friday",
    label: "Friday",
    title: "Where It Began",
    intro: "The first day of our four days together.",
    items: [
      {
        file: "us/friday-01.jpg",
        alt: "Rita and me on Friday",
        caption: "Friday, together",
        size: "large",
        ratio: "3 / 2",
      },
      {
        file: "us/friday-02.jpg",
        alt: "Rita on Friday",
        caption: "",
        size: "normal",
        ratio: "4 / 5",
      },
      {
        file: "us/friday-03.jpg",
        alt: "A Friday memory",
        caption: "",
        size: "normal",
        ratio: "4 / 5",
      },
    ],
  },
  {
    id: "saturday",
    label: "Saturday",
    title: "Time Together",
    intro: "A day to be with you, and a few moments I wanted to keep.",
    items: [
      {
        file: "us/saturday-01.jpg",
        alt: "Rita on Saturday",
        caption: "Saturday",
        size: "half",
        ratio: "4 / 5",
      },
      {
        type: "video",
        video: "abuja/saturday-01.mp4",
        poster: null,
        title: "A Saturday moment",
        caption: "A moment worth replaying",
        size: "half",
        ratio: "16 / 9",
      },
      {
        file: "us/saturday-02.jpg",
        alt: "A Saturday memory",
        caption: "",
        size: "normal",
        ratio: "4 / 5",
      },
    ],
  },
  {
    id: "sunday",
    label: "Sunday",
    title: "More Memories Worth Keeping",
    intro: "Another day beside you.",
    items: [
      {
        file: "us/sunday-01.jpg",
        alt: "A Sunday memory",
        caption: "",
        size: "normal",
        ratio: "4 / 5",
      },
      {
        file: "us/sunday-02.jpg",
        alt: "Rita and me on Sunday",
        caption: "Sunday",
        size: "large",
        ratio: "3 / 2",
      },
      {
        file: "us/sunday-03.jpg",
        alt: "Rita on Sunday",
        caption: "",
        size: "normal",
        ratio: "4 / 5",
      },
    ],
  },
  {
    id: "monday",
    label: "Monday",
    title: "The Memories I Carried Home",
    intro:
      "The end of the visit, and the beginning of looking forward to the next time.",
    items: [
      {
        file: "us/monday-01.jpg",
        alt: "Rita on Monday",
        caption: "Monday",
        size: "large",
        ratio: "3 / 2",
      },
      {
        file: "us/monday-02.jpg",
        alt: "A Monday memory",
        caption: "",
        size: "normal",
        ratio: "4 / 5",
      },
    ],
  },
];
