import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import Welcome from "./components/sections/Welcome";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import MusicToggle from "./components/common/MusicToggle";
import FloatingGarden from "./components/decor/FloatingGarden";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Letters from "./components/sections/Letters";
import Abuja from "./components/sections/Abuja";
import Years from "./components/sections/Years";
import Gallery from "./components/sections/Gallery";
import VideoCalls from "./components/sections/VideoCalls";
import Prayer from "./components/sections/Prayer";
import Forever from "./components/sections/Forever";

export default function App() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    document.body.style.overflow = entered ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [entered]);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{!entered && <Welcome onOpen={() => setEntered(true)} />}</AnimatePresence>

      {entered && <FloatingGarden />}

      <Navbar />
      <main>
        <Hero />
        <About />
        <Letters />
        <Abuja />
        <Years />
        <Gallery />
        <VideoCalls />
        <Prayer />
        <Forever />
      </main>
      <Footer />

      <MusicToggle />
    </MotionConfig>
  );
}