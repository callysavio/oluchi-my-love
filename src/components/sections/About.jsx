import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import { qualities } from "../../data/qualities";
import FlowerCorner from "../decor/FlowerCorner";

export default function About() {
    return (
        <section id="about" className="section section-cream">
<FlowerCorner position="tl" />
<FlowerCorner position="br" />            
<div className="wrap">
                <SectionHeading
                    eyebrow="A little about you"
                    title="What I See When I Look at You"
                    subtitle="Beauty is the part anyone can notice. These are the things I have come to know."
                />

                <ul className="qualities">
                    {qualities.map(({ icon: Icon, title, text }, i) => (
                        <Reveal as="li" key={title} delay={(i % 4) * 0.08} className="quality">
                            <span className="quality-num">{String(i + 1).padStart(2, "0")}</span>
                            <Icon size={26} strokeWidth={1.4} aria-hidden="true" />
                            <h3>{title}</h3>
                            <p>{text}</p>
                        </Reveal>
                    ))}
                </ul>
            </div>
        </section>
    );
}