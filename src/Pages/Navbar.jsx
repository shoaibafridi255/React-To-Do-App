import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handelLogOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary ">
      <div className="container  ">
        <a className="navbar-brand text-white" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/home"
                className="nav-link active text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white">
                About
              </Link>
            </li>
          </ul>
          {!isLoggedIn ? (
            <Link to="/" className="btn btn-warning">
              Login
            </Link>
          ) : (
            <button onClick={handelLogOut} className="btn btn-success">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
