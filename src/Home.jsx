import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>My Website</h1>
      <nav className="mainNav">
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
