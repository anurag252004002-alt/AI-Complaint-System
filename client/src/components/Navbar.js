import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar navbar-dark bg-dark navbar-expand-lg mb-4">

      <div className="container">

        <Link className="navbar-brand" to="/">
          AI Complaint System
        </Link>

        <div>

          <Link className="btn btn-light me-2" to="/">
            Add Complaint
          </Link>

          <Link className="btn btn-warning" to="/complaints">
            View Complaints
          </Link>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;