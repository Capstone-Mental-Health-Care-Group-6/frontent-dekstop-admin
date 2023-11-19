import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SidebarItem from "../components/Elements/SidebarItem/SidebarItem";
import "./Layout.styles.css";
import { IoNotifications } from "react-icons/io5";
import { iconFace, logoEmpathiCare, logoEmpathiCareMobile } from "../../image";
import { BsArrowRight, BsFileEarmarkText, BsGrid } from "react-icons/bs";
import {
  LuFolderHeart,
  LuStethoscope,
  LuUsers,
  LuWallet,
} from "react-icons/lu";
import { FaMoneyBills } from "react-icons/fa6";
import Dropdown from "../components/Elements/Dropdown/Dropdown";
import { BsFillPersonFill, BsPerson, BsBoxArrowRight } from "react-icons/bs";
import ModalLogout from "../components/Fragments/modal/ModalLogout";

function Layouts({ children, titlePage }) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);
  };

  const handleLogoutCancel = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
      <div className="sidebar">
        <div className="offcanvass offcanvas-start ">
          <div className="offcanvas-header d-flex justify-content-center">
            <img src={logoEmpathiCare} alt="" />
            <img src={logoEmpathiCareMobile} alt="" />
          </div>
          <div className="offcanvass-body d-grid  align-items-stretch ">
            <ul className="menu d-grid justify-content-center align-items-center mx-auto p-0 ">
              <SidebarItem
                icon={<BsGrid />}
                title="Dasboard"
                location="/dashboard"
              />
              <SidebarItem
                icon={<LuUsers />}
                title="Manage User"
                location="/admin-manage-user"
              />
              <SidebarItem
                icon={<FaMoneyBills />}
                title="Transaksi User"
                location="/admin-transaksi-user"
              />
              <SidebarItem
                icon={<LuFolderHeart />}
                title="Paket Konseling"
                location="/admin-paket-konseling"
              />
              <hr className="p-0 m-0" />
              <SidebarItem
                icon={<LuStethoscope />}
                title="Manage Dokter"
                location="/admin-manage-dokter"
              />
              <SidebarItem
                icon={<LuWallet />}
                title="Dana Dokter"
                location="/admin-dana-dokter"
              />
              <hr className="p-0 m-0" />
              <SidebarItem
                icon={<BsFileEarmarkText />}
                title="Manage Artikel"
                location="/admin-manage-artikel"
              />
            </ul>
          </div>
        </div>
      </div>

      <main>
        <nav
          id="navbar"
          className="navbar bg-transparant d-flex align-items-center justify-content-between"
        >
          <h2 className="fw-semibold">{titlePage}</h2>
          <div className="d-flex align-items-center gap-2">
            <IoNotifications className="notif-icon" />
            <Dropdown
              className="iconNavbar"
              imageSrc={iconFace}
              dropdownContent={
                <>
                  <li>
                    <NavLink className="dropdown-item" to="/admin-edit-profile">
                      <BsPerson /> Edit Profile
                    </NavLink>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={handleLogoutClick}>
                      <BsBoxArrowRight /> Logout
                    </a>
                  </li>
                </>
              }
            />
          </div>
        </nav>
        {children}

        <ModalLogout
          show={showLogoutModal}
          title="Logout"
          onClose={handleLogoutCancel}
          onSubmit={handleLogoutConfirm}
        />
      </main>
    </>
  );
}

export default Layouts;
