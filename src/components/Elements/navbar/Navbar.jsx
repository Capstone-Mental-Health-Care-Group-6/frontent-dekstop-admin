import React from "react";
import "./Navbar.style.css"
import { IoNotifications } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar bg-transparent sticky-top d-flex justify-content-end">
        <div className="">
           <IoNotifications size={50} className="notif-icon" />
            <img id="iconNavbar" src="icon-face.png" alt="" />
          </div>
    </nav>
  );
};

export default Navbar;
