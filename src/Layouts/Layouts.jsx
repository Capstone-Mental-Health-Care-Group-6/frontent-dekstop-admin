import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SidebarItem from "../components/Elements/SidebarItem/SidebarItem";
import "./Layout.styles.css";
import { IoNotifications } from "react-icons/io5";
import {
  UnreadIndicator,
  arrow,
  avatar8,
  iconFace,
  logoEmpathiCare,
  logoEmpathiCareMobile,
  notifButton,
} from "../../image";
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
  const navigate = useNavigate();

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = () => {
    localStorage.removeItem("token");
    navigate("/");
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
                title="Dashboard"
                location="/admin/dashboard"
              />
              <SidebarItem
                icon={<LuUsers />}
                title="Manage User"
                location="/admin/manage/user"
              />
              <SidebarItem
                icon={<FaMoneyBills />}
                title="Transaksi User"
                location="/admin/transaksi/user"
              />
              <SidebarItem
                icon={<LuFolderHeart />}
                title="Paket Konseling"
                location="/admin/paket/konseling"
              />
              <hr className="p-0 m-0" />
              <SidebarItem
                icon={<LuStethoscope />}
                title="Manage Dokter"
                location="/admin/manage/dokter"
              />
              <SidebarItem
                icon={<LuWallet />}
                title="Dana Dokter"
                location="/admin/dana/dokter"
              />
              <hr className="p-0 m-0" />
              <SidebarItem
                icon={<BsFileEarmarkText />}
                title="Manage Artikel"
                location="/admin/manage/artikel"
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
            <Dropdown
              className="notif-icon"
              imageSrc={notifButton}
              dropdownContent={
                <>
                  <div className="notifikasi">
                    <div>Notifikasi</div>
                    <hr />
                    <Link
                      className="link-notification"
                      to="/admin/manage/dokter/pengajuan/detail/8"
                    >
                      <div className="d-flex align-items-center gap-3">
                        <div><img className="img-notification" src={avatar8} alt="" /></div>
                        <div className="d-flex flex-column gap-1">
                          <div className="fw-bold"> dr. Lika Angelika</div>
                          <div className="title-notification">
                            {" "}
                            Pengajuan izin praktik dokter di <br /> EmphatiCare
                          </div>
                          <div className="time-notification fw-light">
                            {" "}
                            15 min ago
                          </div>
                        </div>
                        <div className="">
                          <div className="d-flex gap-3 ">
                            <div>
                              <img src={UnreadIndicator} />
                            </div>
                            <div>
                              <img src={arrow} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              }
            />
            <Dropdown
              className="iconNavbar"
              imageSrc={iconFace}
              dropdownContent={
                <>
                  <NavLink className="dropdown-item" to="/admin/profile">
                    <BsPerson /> Edit Profile
                  </NavLink>
                  <a className="dropdown-item" onClick={handleLogoutClick}>
                    <BsBoxArrowRight /> Logout
                  </a>
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
