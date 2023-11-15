import React from 'react'
import SidebarItem from '../components/Elements/SidebarItem/SidebarItem'
import "./Layout.styles.css";
import { IoNotifications } from 'react-icons/io5'
import { logoEmpathiCare } from '../../image'



function Layouts({ children, titlePage }) {
  return (
    <>
      <div className="sidebar">
        <div className="offcanvass offcanvas-start " >
          <div className="offcanvas-header p-5 d-grid justify-content-center">
            <img src={logoEmpathiCare} alt="" />
          </div>
          <div className="offcanvass-body d-grid align-items-center ">
            <ul className="menu d-grid justify-content-center align-items-center mx-auto p-0 gap-4">
              <SidebarItem title='Dasboard' location='/' />
              <SidebarItem title='Manage User' location='/admin-manage-user' />
              <SidebarItem title='Transaksi User' location='/admin-transaksi-user' />
              <SidebarItem title='Paket Konseling' location="/admin-paket-konseling" />

              <SidebarItem title='Manage Dokter' location="/admin-manage-dokter" />
              <SidebarItem title='Dana Dokter' location="/admin-dana-dokter" />
              <SidebarItem title='Manage Artikel' location="/admin-manage-artikel" />
            </ul>
          </div>
        </div>
      </div >

      <main>
        <nav
          id="navbar"
          className="navbar bg-transparant sticky-top d-flex align-items-center justify-content-between px-3"
        >
          <h1 className="fw-semibold">{titlePage}</h1>
          <div className="">
            <IoNotifications className="notif-icon" />
            <img id="iconNavbar" src="icon-face.png" alt="" />
          </div>
        </nav>
        {children}
      </main>
    </>

  )
}

export default Layouts