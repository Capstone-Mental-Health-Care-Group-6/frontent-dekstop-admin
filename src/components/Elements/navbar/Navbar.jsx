import React from "react";
import "./Navbar.style.css";
import { IoNotifications } from "react-icons/io5";

const Navbar = ({ title }) => {
  return (
    <nav
      id="navbar"
      className="navbar bg-transparent sticky-top d-flex align-items-center justify-content-beetwen"
    >
      <h1 className="fw-semibold">{title}</h1>
      <div className="">
        <IoNotifications size={50} className="notif-icon" />
        <img id="iconNavbar" src="icon-face.png" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
