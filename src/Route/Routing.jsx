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
import DetailTransaksiUser from "../pages/DetailTransaksiUser/DetailTransaksiUser";
import EditProfile from "../pages/EditProfile/EditProfile";
import LoginForm from "../pages/Login/Login";
import RegisterForm from "../pages/Register/Register";
import DetailArtikel from "../pages/DetailArtikel/DetailArtikel";
import TransaksiOtomatis from "../pages/DetailTransaksiOtomatis/TransaksiOtomatis";
import ForgotPw from "../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/AturSandi/AturSandi";
const Routing = () => {
  return (
    <Routes>
      <Route element={<LoginForm />} path="/" />
      <Route element={<Dashboard />} path="/dashboard-admin" />
      <Route element={<RegisterForm />} path="register-admin" />
      <Route element={<ForgotPw />} path="forgot-password" />
      <Route element={<ResetPassword />} path="reset-password" />
      <Route element={<ManageUser />} path="admin-manage-user" />
      <Route element={<TransaksiUser />} path="admin-transaksi-user" />
      <Route element={<PaketKonseling />} path="admin-paket-konseling" />
      <Route element={<ManageDokter />} path="admin-manage-dokter" />
      <Route element={<DanaDokter />} path="admin-dana-dokter" />
      <Route element={<ManageArtikel />} path="admin-manage-artikel" />
      <Route element={<DetailArtikel/>} path="admin-manage-artikel/:id" />
      <Route element={<TransaksiTertunda />} path="admin-transaksi-user/transaksi-tertunda" />
      <Route element={<DetailTransaksiUser />} path="admin-transaksi-user/transaksi-tertunda/detail-transaksi-user/:id" />
      <Route element={<TransaksiOtomatis />} path="admin-transaksi-user/transaksi-tertunda/transaksi-otomatis/:id" />
      <Route element={<EditProfile />} path="admin-edit-profile" />
    </Routes>
  );
};

export default Routing;
