import React from "react";
import Navbar from "../../Elements/navbar/Navbar";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  // Fungsi untuk mendapatkan judul berdasarkan path
  const getTitle = (pathname) => {
    switch (pathname) {
      case "/":
        return "Dashboard";
      case "/admin-manage-user":
        return "Manage User";
      case "/admin-transaksi-user":
        return "Transaksi User";
      case "/admin-paket-konseling":
        return "Paket Konseling";
      case "/admin-manage-dokter":
        return "Manage Dokter";
      case "/admin-dana-dokter":
        return "Dana Dokter";
      case "/admin-manage-artikel":
        return "Manage Artikel";
      default:
        return "Page Not Found";
    }
  };

  const title = getTitle(location.pathname);
  return (
    <div>
      <Navbar title={title} />
    </div>
  );
};

export default Header;
