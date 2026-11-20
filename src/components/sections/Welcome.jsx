import { motion } from "framer-motion";
import SmartImage from "../common/SmartImage";
import { site } from "../../data/site";

export default function Welcome({ onOpen }) {
    const { eyebrow, title, button, image } = site.welcome;

    return (
        <motion.div
            className="welcome"
            role="dialog"
            aria-label="Welcome"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
        >
            <motion.div
                className="welcome-photo"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            >
                <SmartImage file={image} alt="Rita" priority className="fill" />
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
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    {title}
                </motion.h1>
                <motion.button
                    className="btn btn-primary"
                    onClick={onOpen}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                    autoFocus
                >
                    {button}
                </motion.button>
            </div>
        </motion.div>
    );
}