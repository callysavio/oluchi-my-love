// RITA'S GALLERY: photos go in src/assets/images/rita/  (write "rita/filename.jpg")
// `size` controls the layout (desktop, 6-column grid):
//   "feature" large 3x4 | "wide" 3x2 | "tall" 2x3 | "pano" 4x3 | "square" 3x3
// The default arrangement below fills the grid perfectly (feature, wide, wide, tall, tall, tall,
// pano, tall, square, square). If you add photos, add them in groups that complete a row.
// `caption` is optional (leave "" for none).

export const galleryBand = {
  file: "rita/featured-wide.jpg",
  alt: "Rita, a wide portrait",
  quote: "Elegance, to me, looks like you.",
};

export const ritaGallery = [
  {
    id: "g1",
    file: "rita/gallery-01.jpg",
    alt: "Rita in a graceful portrait",
    caption: "Elegance, effortlessly",
    size: "feature",
  },
  {
    id: "g2",
    file: "rita/gallery-02.jpg",
    alt: "Rita smiling",
    caption: "That smile",
    size: "wide",
  },
  {
    id: "g3",
    file: "rita/gallery-03.jpg",
    alt: "Rita, candid",
    caption: "",
    size: "wide",
  },
  {
    id: "g4",
    file: "rita/gallery-04.jpg",
    alt: "Rita, beautifully dressed",
    caption: "Grace in the simple things",
    size: "tall",
  },
  {
    id: "g5",
    file: "rita/gallery-05.jpg",
    alt: "Rita, portrait",
    caption: "",
    size: "tall",
  },
  {
    id: "g6",
    file: "rita/gallery-06.jpg",
    alt: "Rita, casual",
    caption: "Simply beautiful",
    size: "tall",
  },
  {
    id: "g7",
    file: "rita/gallery-07.jpg",
    alt: "Rita, wide frame",
    caption: "Calm, and so very you",
    size: "pano",
  },
  {
    id: "g8",
    file: "rita/gallery-08.jpg",
    alt: "Rita, portrait",
    caption: "",
    size: "tall",
  },
  {
    id: "g9",
    file: "rita/gallery-09.jpg",
    alt: "Rita, radiant",
    caption: "Radiant",
    size: "square",
  },
  {
    id: "g10",
    file: "rita/gallery-10.jpg",
    alt: "Rita, a memorable picture",
    caption: "",
    size: "square",
  },
];
