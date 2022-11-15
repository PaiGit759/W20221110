import "./styles.css";
import { Link } from "react-router-dom";

export function About() {
  return (
    <div>
      <h1>About Us</h1>
      <nav className="mainNav">
        <Link to="/" className="navButton">
          {" "}
          Home{" "}
        </Link>
        <Link to="/contact" className="navButton">
          {" "}
          Contact{" "}
        </Link>
        <Link to="/about" className="navButton">
          {" "}
          About{" "}
        </Link>
      </nav>
    </div>
  );
}
