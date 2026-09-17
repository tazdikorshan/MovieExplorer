import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand">
          <span className="brand-icon">🎥</span>
          <span>Movie Explorer</span>
        </Link>

        <nav className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>

          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Movies and Shows
          </NavLink>
        </nav>

        <Link to="/movies" className="nav-button">
          Explore Movies and Shows
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
