import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="Navbar">
      <div className="container">
        <div className="navbarContents">
          <div className="Logo">
            <span>Floral Studio</span>
          </div>
          <div className="Bars">
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>About Us</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Portofolio</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Pricing</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Contacts</NavLink>
              </li>
              <li>
                <NavLink to={"/add"}>Add Page</NavLink>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
