import Main from "./comps/Main";
import Header from "./comps/Header";
import { Routes, Route } from "react-router-dom";
import Work from "./comps/work/Work";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/work" element={<Work />}></Route>
      </Routes>
    </div>
  );
}

export default App;
