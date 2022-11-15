import { Link } from "react-router-dom";

export function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <nav className="mainNav">
        <Link to="/" className="navButton">
          {" "}
          Home{" "}
        </Link>
        <Link to="/about" className="navButton">
          {" "}
          About{" "}
        </Link>
      </nav>
    </div>
  );
}
