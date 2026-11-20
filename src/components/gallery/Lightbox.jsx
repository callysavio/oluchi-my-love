import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import SmartImage from "../common/SmartImage";

/**
 * Full-screen photo viewer.
 * items: [{ file, alt, caption }]   index: number | null (null = closed)
 * Keyboard: Esc closes, ← → navigate, Tab stays inside. Touch: swipe left/right.
 */
export default function Lightbox({ items, index, onClose, onChange }) {
    const item = index !== null ? items[index] : null;
    const open = Boolean(item);
    const dialogRef = useRef(null);
    const touchX = useRef(null);
    const n = items.length;
    const go = (d) => onChange((index + d + n) % n);

    // Lock scroll, move focus in, and restore focus on close.
    useEffect(() => {
        if (!open) return;
        const previous = document.activeElement;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        dialogRef.current?.querySelector("button")?.focus();
        return () => {
            document.body.style.overflow = previousOverflow;
            previous?.focus?.();
        };
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e) => {
            if (e.key === "Escape") onClose();
            else if (e.key === "ArrowRight" && n > 1) go(1);
            else if (e.key === "ArrowLeft" && n > 1) go(-1);
            else if (e.key === "Tab") {
                const f = dialogRef.current?.querySelectorAll("button");
                if (!f?.length) return;
                const first = f[0];
                const last = f[f.length - 1];
                if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
                else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    });

    const onTouchEnd = (e) => {
        if (touchX.current === null || n < 2) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    ref={dialogRef}
                    className="lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Photo viewer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => e.target === e.currentTarget && onClose()}
                    onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
                    onTouchEnd={onTouchEnd}
                >
                    <button className="lb-btn lb-close" onClick={onClose} aria-label="Close photo viewer">
                        <X size={26} />
                    </button>

                    {n > 1 && (
                        <button className="lb-btn lb-prev" onClick={() => go(-1)} aria-label="Previous photo">
                            <ChevronLeft size={30} />
                        </button>
                    )}

                    <motion.figure
                        key={index}
                        className="lb-figure"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.45 }}
                    >
                        <SmartImage file={item.file} alt={item.alt} contain priority />
                        <figcaption>
                            {item.caption && <span>{item.caption}</span>}
                            <small>{index + 1} / {n}</small>
                        </figcaption>
                    </motion.figure>

                    {n > 1 && (
                        <button className="lb-btn lb-next" onClick={() => go(1)} aria-label="Next photo">
                            <ChevronRight size={30} />
                        </button>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}