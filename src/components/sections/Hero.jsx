import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SmartImage from "../common/SmartImage";
import { site } from "../../data/site";

export default function Hero() {
    const { eyebrow, title, titleEmphasis, intro, image, imageAlt } = site.hero;

    return (
        <section id="hero" className="hero">
            <div className="wrap hero-grid">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <p className="eyebrow">{eyebrow}</p>
                    <h1>
                        {title} <em>{titleEmphasis}</em>
                    </h1>
                    <p className="lead">{intro}</p>
                    <a href="#about" className="scroll-cue">
                        Scroll gently <ChevronDown size={18} />
                    </a>
                </motion.div>

                <motion.div
                    className="hero-photo"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                >
                    <SmartImage file={image} alt={imageAlt} ratio="4 / 5" priority className="arch" />
                </motion.div>
            </div>
        </section>
    );
}