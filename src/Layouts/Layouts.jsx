import React from 'react'
import SidebarItem from '../components/Elements/SidebarItem/SidebarItem'
import "./Layout.styles.css";
import { IoNotifications } from 'react-icons/io5'
import { logoEmpathiCare, logoEmpathiCareMobile } from '../../image'
import { BsFileEarmarkText, BsGrid } from 'react-icons/bs';
import { LuFolderHeart, LuStethoscope, LuUsers, LuWallet } from 'react-icons/lu';
import { FaMoneyBills } from 'react-icons/fa6';



function Layouts({ children, titlePage }) {
  return (
    <>
      <div className="sidebar">
        <div className="offcanvass offcanvas-start " >
          <div className="offcanvas-header d-grid justify-content-center">
            <img src={logoEmpathiCare} alt="" />
            <img src={logoEmpathiCareMobile} alt="" />
          </div>
          <div className="offcanvass-body d-grid align-items-center ">
            <ul className="menu d-grid justify-content-center align-items-center mx-auto p-0 gap-2">
              <SidebarItem icon={<BsGrid />} title='Dasboard' location='/' />
              <SidebarItem icon={<LuUsers />} title='Manage User' location='/admin-manage-user' />
              <SidebarItem icon={<FaMoneyBills />} title='Transaksi User' location='/admin-transaksi-user' />
              <SidebarItem icon={<LuFolderHeart />} title='Paket Konseling' location="/admin-paket-konseling" />
              <hr />
              <SidebarItem icon={<LuStethoscope />} title='Manage Dokter' location="/admin-manage-dokter" />
              <SidebarItem icon={<LuWallet />} title='Dana Dokter' location="/admin-dana-dokter" />
              <hr />
              <SidebarItem icon={<BsFileEarmarkText />} title='Manage Artikel' location="/admin-manage-artikel" />
            </ul>
          </div>
        </div>
      </div >

      <main className='p-3' >
        <nav
          id="navbar"
          className="navbar bg-transparant sticky-top d-flex align-items-center justify-content-between px-3"
        >
          <h1 className="fw-semibold">{titlePage}</h1>
          <div className="d-flex align-items-center gap-2" >
            <IoNotifications className="notif-icon" />
            <img className="iconNavbar" src="icon-face.png" alt="" />
          </div>
        </nav>
        {children}
      </main>
    </>

  )
}

export default Layouts