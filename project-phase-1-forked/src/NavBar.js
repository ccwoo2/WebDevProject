import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          NBA Finder
        </NavLink>
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/search">
            Search
          </NavLink>
          <NavLink className="nav-link" to="/compare">
            Compare
          </NavLink>
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
