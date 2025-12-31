import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function TaskOneRouter() {
  return (
    <div>
      <nav>
        <Link to="/task1/home">Home</Link> | <Link to="/task1/about">About</Link>
      </nav>

      <Routes>
        <Route path="/task1/home" element={<Home />} />
        <Route path="/task1/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default TaskOneRouter;
