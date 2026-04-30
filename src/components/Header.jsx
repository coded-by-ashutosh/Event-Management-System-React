import './Style.css';
import { NavLink } from 'react-router-dom';
import HubNestLogo from "./HubNestLogo";

function Header({user}) {
  return (
    <>
      {/* Header */}
      <header className="p-3 shadow-lg bg-dark text-white">
        <div className="container">
          <div className="row align-items-center">
            {/* Left side (Phone + Email) - hidden on mobile */}
            <div className="col-lg-6 gap-5 d-flex d-none d-lg-flex">
              <span><i className="fa-solid fa-phone"></i> +91 9876543210</span>
              <span><i className="fa-solid fa-envelope"></i> support@HubNest.com</span>
            </div>

            {/* Right side (Icons) */}
            <div className="icons col-lg-6 d-flex gap-4 justify-content-center justify-content-lg-end">
              <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
              <a href="#"><i className="fa-solid fa-bell"></i></a>
              <a href="#"><i className="fa-solid fa-comment-dots"></i></a>
              {user && (
                <NavLink to="/profile" ><i className="fa-solid fa-circle-user"></i></NavLink>
              )}

            </div>
          </div>
        </div>
      </header>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
        <div className="container">
          {/* Logo */}
          <NavLink to="/" className="navbar-brand fw-bold">
            <HubNestLogo width="250" height="60" />
          </NavLink>

          {/* Toggler (mobile menu) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  end
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/events"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/calendar"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  Calendar
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/announcements"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  Announcements
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;