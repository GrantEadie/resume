import "./main.css";
import Splash from "./splash/Splash";
import Timeline from "./timeline/Timeline";

const Main = () => {
  return (
    <div id="main">
      <Splash />
      <Timeline work="false" />
    </div>
  );
};

export default Main;
