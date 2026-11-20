import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import LoveLetter from "../letters/LoveLetter";
import { lettersIntro, smallNotes } from "../../data/letters";

export default function Letters() {
    return (
        <section id="letters" className="section">
            <div className="wrap">
                <SectionHeading eyebrow="My love letters to you" title="In My Own Words" subtitle={lettersIntro} />

                <Reveal>
                    <LoveLetter />
                </Reveal>

                <div className="notes-block">
                    <Reveal>
                        <h3 className="notes-title">Things I Will Always Want You to Remember</h3>
                    </Reveal>
                    <ul className="notes">
                        {smallNotes.map((note, i) => (
                            <Reveal as="li" key={i} delay={(i % 3) * 0.1} className="note">
                                <p>{note}</p>
                            </Reveal>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}