import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../services/authService";
import Routings from "../Routings";
import "./navbar.scss";

const Navbar = () => {
  const [popUp, setPopUp] = useState(false);

  const navigate = useNavigate();

  return (
    <>
        {/* navBar */}

      <div className="navbar">
        <div className="left">
          <ul>
            <Link to={"/"}>
              <li className="home">Home</li>
            </Link>
            {JSON.parse(localStorage.getItem("user")) ? <Link to={"/profile"}>
              <li className="prof">Profile</li>
            </Link> : null}
          </ul>
        </div>
        <div className="right">
          {!localStorage.getItem("user") ? (
            <ul>
              <Link to={"/register"}>
                <li>Register</li>
              </Link>
              <Link to={"/login"}>
                <li className="login">Log In</li>
              </Link>
            </ul>
          ) : (
            <ul>
              <Link onClick={() => setPopUp(true)}>
                <li className="logout">Logout</li>
              </Link>
            </ul>
          )}
        </div>
      </div>
      {/* routings */}
      <Routings />

     {/* popUp */}

      <div className={popUp ? "active popUp" : "popUp"}>
        <p>Are you sure to Logout?</p>
        <div className="btn-container">
          <button onClick={() => {
              setPopUp(!popUp);
              logout();
              navigate("/");
            }}>Yes</button>
          <button
            onClick={() => setPopUp(!popUp)}
          >
            No
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
