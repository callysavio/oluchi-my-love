import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail } from "lucide-react";
import { mainLetter } from "../../data/letters";
import { site } from "../../data/site";

export default function LoveLetter() {
    const [open, setOpen] = useState(false);

    return (
        <div className="letter-wrap">
            <button
                className={`envelope ${open ? "is-open" : ""}`}
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-controls="main-letter"
            >
                <Mail size={22} strokeWidth={1.4} aria-hidden="true" />
                <span>{open ? "Fold the letter" : "Read My Letter"}</span>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.article
                        id="main-letter"
                        className="paper"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="paper-inner">
                            <p className="greeting">{mainLetter.greeting}</p>
                            {mainLetter.paragraphs.map((p, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + i * 0.25, duration: 0.7 }}
                                >
                                    {p}
                                </motion.p>
                            ))}
                            <motion.div
                                className="signoff"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 + mainLetter.paragraphs.length * 0.25, duration: 1 }}
                            >
                                <p>{mainLetter.closing}</p>
                                <span className="signature">{site.yourName}</span>
                            </motion.div>
                        </div>
                    </motion.article>
                )}
            </AnimatePresence>
        </div>
    );
}