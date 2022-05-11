import "./splash.css";
import "./splash-mobile.css";
import { ReactComponent as Computer } from "../../svgs/computer.svg";
import { ReactComponent as NoteOne } from "../../svgs/note1.svg";
import { ReactComponent as NoteTwo } from "../../svgs/note2.svg";
import { ReactComponent as NoteThree } from "../../svgs/note3.svg";
import { ReactComponent as NoteFour } from "../../svgs/note4.svg";
import { ReactComponent as NoteFive } from "../../svgs/note5.svg";
import { GraduationCap } from "phosphor-react";
import QuickInfo from "./QuickInfo";

const Splash = () => {
  return (
    <div id="splash-wrap">
      <div id="splash">
        <div id="splash-drawings">
          <Computer id="computer" />
          <NoteOne id="note-one" />
          <NoteTwo id="note-two" />
          <NoteThree id="note-three" />
          <NoteFour id="note-four" />
          <NoteFive id="note-five" />
        </div>
        <div id="splash-hello">Hello,</div>
        <div id="splash-name">I'm Grant Eadie.</div>
        <div id="splash-desc">
          I’m a full stack engineer with a focus in{" "}
          <span>frontend development</span>, experienced in user interfaces,
          software architecture, marketing, product development, graphic design,
          and project management. I have a strong background in artistic
          expression, but I’ve found that nothing is more fulfilling than{" "}
          <span>building a strong team</span> and{" "}
          <span>embracing collective creativity</span>.
        </div>
        <div id="splash-school-wrap">
          <div className="splash-school">
            <GraduationCap size={32} weight="fill" />
            Web Development & Software Engineering @ Epicodus Coding
          </div>
          <div className="splash-school">
            <GraduationCap size={32} weight="fill" />
            Audio Engineering & Violin Performance @ Western Washington
            University
          </div>
        </div>
      </div>
      <QuickInfo />
    </div>
  );
};

export default Splash;
