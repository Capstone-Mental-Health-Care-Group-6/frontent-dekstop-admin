import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import ManageUser from "../pages/ManageUser/ManageUser";
import TransaksiUser from "../pages/TransaksiUser/TransaksiUser";
import PaketKonseling from "../pages/PaketKonseling/PaketKonseling";
import ManageDokter from "../pages/ManageDokter/ManageDokter";
import DanaDokter from "../pages/DanaDokter/DanaDokter";
import ManageArtikel from "../pages/ManageArtikel/ManageArtikel";
import LoginForm from "../pages/Login/Login";
import RegisterForm from "../pages/Register/Register";

const Routing = () => {
  return (
    <Routes>
      <Route element={<LoginForm />} path="/" />
      <Route element={<RegisterForm />} path="register-admin" />
      <Route element={<Dashboard />} path="/dashboard" />
      <Route element={<ManageUser />} path="admin-manage-user" />
      <Route element={<TransaksiUser />} path="admin-transaksi-user" />
      <Route element={<PaketKonseling />} path="admin-paket-konseling" />
      <Route element={<ManageDokter />} path="admin-manage-dokter" />
      <Route element={<DanaDokter />} path="admin-dana-dokter" />
      <Route element={<ManageArtikel />} path="admin-manage-artikel" />
    </Routes>
  );
};

export default Routing;
