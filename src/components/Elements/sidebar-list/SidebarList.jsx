import React from "react";
import iconDashboard from "../../../assets/dashboard-inactive.svg";

const SidebarList = ({ src, label, alt, className }) => {
  return (
    <div>
      <div className="d-flex align-items-center mb-3">
        <img src={src} alt={alt} />
        <span className={className}>{label}</span>
      </div>
    </div>
  );
};

export default SidebarList;
