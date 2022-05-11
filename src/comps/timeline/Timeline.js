import Calendar from "./calendar/Calendar";
import "./timeline.css";
import { workExperience, skills, tech } from "./items";
import { Brain, Cpu } from "phosphor-react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Holder = styled.div`
  padding: ${({ work }) => (work === "/work" ? "100px 0" : null)};
`;

const Qualifications = styled.div`
  background: ${({ work }) =>
    work === "/work" ? "var(--yellow)" : "var(--blue)"};
  color: ${({ work }) => (work !== "/work" ? "var(--yellow)" : "var(--blue)")};
  padding: ${({ work }) => (work === "/work" ? "200px 0" : null)} !important;
`;

const Timeline = () => {
  const location = useLocation();

  return (
    <div id="timeline-holder">
      <Holder id="timeline" work={location.pathname}>
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
      </Holder>
      <Qualifications id="qualifications" work={location.pathname}>
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
      </Qualifications>
    </div>
  );
};

export default Timeline;
