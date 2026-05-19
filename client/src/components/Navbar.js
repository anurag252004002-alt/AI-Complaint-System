import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const logout = () => {

    localStorage.removeItem("token");

    alert("Logged Out");

    window.location.href = "/login";

  };

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">

      <Link className="navbar-brand" to="/">
        AI Complaint System
      </Link>

      <div className="navbar-nav">

        <Link className="nav-link" to="/">
          Add Complaint
        </Link>

        <Link className="nav-link" to="/complaints">
          Complaints
        </Link>

        <Link className="nav-link" to="/login">
          Login
        </Link>

        <Link className="nav-link" to="/register">
          Register
        </Link>

        <button
          onClick={logout}
          className="btn btn-danger ms-3"
        >
          Logout
        </button>

      </div>

    </nav>

  );

}

export default Navbar;