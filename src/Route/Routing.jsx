import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import ManageUser from "../pages/ManageUser/ManageUser";
import TransaksiUser from "../pages/TransaksiUser/TransaksiUser";
import PaketKonseling from "../pages/PaketKonseling/PaketKonseling";
import ManageDokter from "../pages/ManageDokter/ManageDokter";
import DanaDokter from "../pages/DanaDokter/DanaDokter";
import ManageArtikel from "../pages/ManageArtikel/ManageArtikel";
import TransaksiTertunda from "../pages/TransaksiTertunda/TransaksiTertunda";

const Routing = () => {
  return (
    <Routes>
      <Route element={<Dashboard />} path="/" />
      <Route element={<ManageUser />} path="admin-manage-user" />
      <Route element={<TransaksiUser />} path="admin-transaksi-user" />
      <Route element={<PaketKonseling />} path="admin-paket-konseling" />
      <Route element={<ManageDokter />} path="admin-manage-dokter" />
      <Route element={<DanaDokter />} path="admin-dana-dokter" />
      <Route element={<ManageArtikel />} path="admin-manage-artikel" />
      <Route element={<TransaksiTertunda />} path="admin-transaksi-user/transaksi-tertunda" />
    </Routes>
  );
};

export default Routing;
