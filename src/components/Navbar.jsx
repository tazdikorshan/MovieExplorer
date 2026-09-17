import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">🎬MovieExplorer</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/movies" className="nav-btn">
          Movies
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
