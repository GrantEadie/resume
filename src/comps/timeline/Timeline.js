import Calendar from "./calendar/Calendar";
import "./timeline.css";
import { workExperience, skills, tech } from "./items";
import { Brain, Cpu } from "phosphor-react";

const Timeline = () => {
  return (
    <div id="second-page-holder">
      <div id="timeline">
        <div id="calendar-holder">
          <Calendar />
          <div id="timeline-items-holder">
            {workExperience.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="item-job">{item.job}</div>
                <div className="item-title">
                  {item.title}
                  <div className="item-time">{item.time}</div>
                </div>
                <ul className="item-duties">
                  {item.duties.map((duty, k) => (
                    <li key={k}>{duty}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="qualifications">
        <div className="qualification-list">
          <div className="qualification-title">
            <Brain size={32} weight="fill" />
            Skills
          </div>
          <ul className="qualification-list-items">
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="qualification-list">
          <div className="qualification-title">
            <Cpu size={32} weight="fill" />
            Technology
          </div>
          <ul className="qualification-list-items">
            {tech.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
