import "./quick-info.css";
import "./quick-info-mobile.css";
import { Phone, At, FileCode, LinkedinLogo } from "phosphor-react";

const QuickInfo = () => {
  return (
    <div id="quick-info-wrap">
      <div id="quick-info">
        <div className="quick-info-section">
          <div className="quick-info-item">
            <At size={20} weight="fill" />
            grantleadie@gmail.com
          </div>
          <div className="quick-info-item">
            <Phone size={20} weight="fill" />
            (509) 590-7955
          </div>
        </div>
        <div className="quick-info-section">
          <div className="quick-info-item">
          <FileCode size={20} weight="fill" />
            <a href="https://github.com/granteadie">/granteadie/</a>
          </div>
          <div className="quick-info-item">
            <LinkedinLogo size={20} weight="fill" />
            <a href="https://www.linkedin.com/in/grant-eadie/">
              /in/grant-eadie/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickInfo;
