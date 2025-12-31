import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/task2/home">Home</Link> |{" "}
      <Link to="/task2/about">About</Link> |{" "}
      <Link to="/task2/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
