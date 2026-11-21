// General site content. Edit freely.
export const site = {
  herName: "Obiamaka 💕",
  fullName: "Rita Chiaha",
  yourName: "Nnachi", // <- appears in the letter signature and closing

  welcome: {
    eyebrow: "A little something for you",
    title: "Obiamaka 💕, My Greatest Treasure",
    script: "With all my love",            // <- NEW: handwritten line under the title
    hint: "Best enjoyed with sound on", 
    button: "Open Your Love Story",
    image: "rita/portrait-01.jpg",
  },

  hero: {
    eyebrow: "The woman behind this story",
    title: "Some people make the world more beautiful simply by being in it.",
    titleEmphasis: "You are one of them, Rita.",
    intro:
      "I made this for you because a message was not enough. Here are the things I admire about you: your heart, your faith, your mind, your kindness, and the quiet elegance in everything you do. You are so much more than what the eye sees, and I wanted you to see yourself the way I do.",
    image: "rita/portrait-02.jpg",
    imageAlt: "Portrait of Rita",
  },

  // Optional background music. Put an audio file in src/assets/audio/ and write its name here.
  // If the file does not exist, the music button simply does not appear.
  // Music NEVER autoplays; Rita has to tap the button.
  music: {
    file: "until_i_found_you.mp3",
    title: "our song",
  },

   nav: [
    { id: "hero", label: "Home" },
    { id: "about", label: "About You" },
    { id: "letters", label: "Letters" },
    {
      label: "Our Memories",
      children: [
        { id: "gallery", label: "Your Gallery", note: "Your beautiful moments" },
        { id: "abuja", label: "Abuja", note: "Four days in August" },
        { id: "years", label: "Through the Years", note: "From school days till now" },
        { id: "calls", label: "Video Calls", note: "Close, even from miles away" },
      ],
    },
    {
      label: "My Heart",
      children: [
        { id: "prayer", label: "My Prayer", note: "My wishes for you" },
        { id: "forever", label: "Forever", note: "Where I hope this is going" },
      ],
    },
  ],
};