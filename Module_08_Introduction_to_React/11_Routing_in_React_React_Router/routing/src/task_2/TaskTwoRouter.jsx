import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function TaskTwoRouter() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/task2/home" element={<Home />} />
        <Route path="/task2/about" element={<About />} />
        <Route path="/task2/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default TaskTwoRouter;
