import React from "react";
import { NavLink } from "react-router-dom";

const DetailDokterItem = ({ title, img, location }) => {
  return (
    <div>
      <NavLink to={location} className="sidebar-link">
        {/* <Link to={location} className="sidebar-link"> */}
        <div className="iconNavbar">
          <img src={img} />
        </div>
        <span className="mx-4">{title}</span>
        {/* </Link> */}
      </NavLink>
    </div>
  );
};

export default DetailDokterItem;
