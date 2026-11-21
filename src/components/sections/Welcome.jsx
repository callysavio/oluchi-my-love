import { motion } from "framer-motion";
import { Music2 } from "lucide-react";
import SmartImage from "../common/SmartImage";
import FloatingGarden from "../decor/FloatingGarden";
import { site } from "../../data/site";

export default function Welcome({ onOpen }) {
  const { eyebrow, title, button, image } = site.welcome;
  const script = site.welcome.script ?? "With all my love";
  const hint = site.welcome.hint ?? "Best enjoyed with sound on";

  return (
    <motion.div
      className="welcome"
      role="dialog"
      aria-label="Welcome"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
    >
      <div className="welcome-glow" aria-hidden="true" />

      <motion.div
        className="welcome-photo"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="welcome-arch">
          <SmartImage file={image} alt="Rita" priority className="fill" />
        </div>
      </motion.div>

      <div className="welcome-text">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          className="welcome-title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="welcome-script"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          {script}
        </motion.p>

        <motion.button
          className="btn btn-primary btn-glow"
          onClick={onOpen}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          autoFocus
        >
          {button}
        </motion.button>

        <motion.p
          className="welcome-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <Music2 size={16} aria-hidden="true" /> {hint}
        </motion.p>
      </div>

      <FloatingGarden variant="welcome" />
    </motion.div>
  );
}