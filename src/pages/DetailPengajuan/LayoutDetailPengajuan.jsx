import React, { Children } from "react";
import "./LayoutDetailPengajuan.css";
import DetailDokterItem from "../../components/Elements/DetailDokterItem/DetailDokterItem";
import {
  avatar1,
  icon1,
  icon2,
  icon3,
  icon4,
  infoOutline,
} from "../../../image";
import info from "../../../src/assets/info.svg";
import { useState } from "react";
import { Success } from "../../../image";
import { useParams } from "react-router-dom";
import { dataPengajuan } from "../../components/DataDokter/DataPengajuan/dataPengajuan";

const LayoutDetailPengajuan = ({ children }) => {
  const { id } = useParams();
  const dokter = dataPengajuan.find((dokter) => dokter.id === parseInt(id));
  const [showInfo, setShowInfo] = useState(false); // State untuk menampilkan info saat hover
  const [showConfirmation, setShowConfirmation] = useState(false); // State untuk menampilkan modal konfirmasi
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInfoHover = () => {
    setShowInfo(true);
  };

  const handleInfoLeave = () => {
    setShowInfo(false);
  };

  const handleSwitchToggle = () => {
    // Menampilkan modal konfirmasi ketika tombol switch diubah
    setShowConfirmation(true);
  };

  const cancelNonAktifkan = () => {
    // Fungsi untuk membatalkan nonaktifkan akun (tutup modal konfirmasi)
    setShowConfirmation(false);
  };

  const confirmNonAktifkan = () => {
    // Fungsi untuk menonaktifkan akun setelah konfirmasi
    setShowConfirmation(false);

    // Setelah berhasil menonaktifkan, tampilkan modal sukses
    setShowSuccessModal(true);
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 3000);
  };

  return (
    <>
      <div>
        {/* title */}
        <div>
          <p>
            Manage Dokter /
            <span className="fw-semibold">Detail Pengajuan Dokter</span>
          </p>
        </div>

        {/* card-pengajuan */}
        <div className="card-detail-pengajuan py-5 mb-5 d-flex gap-3 border border-2 border-primary">
          <div>
            <img src={infoOutline} className="info-icon" />
          </div>
          <div className="d-flex flex-column gap-3">
            <div className="fw-bold fs-4">
              Pengajuan izin praktik dokter di EmphatiCare
            </div>
            <div>
              dr. Lika Angelina telah mengajukan untuk bergabung sebagai
              praktisi di platform EmpathiCare. <br />
              Cek profilnya dan pastikan semuanya sesuai dengan standar
              platform, sebelum memberikan persetujuan.{" "}
            </div>
            <div className="mt-3 d-flex gap-3">
              <button className="btn btn-primary px-3 py-2">
                Terima Pengajuan Dokter
              </button>
              <button className="fw-semibold bg-transparent border-0">
                Tolak Pengajuan
              </button>
            </div>
          </div>
        </div>

        {/* detail pengajuan */}
        <div>
          <div className="wrap-detail-card d-flex ">
            <div className="wrapper">
              <div className="profile-card card py-4 border-0">
                <div className="d-flex justify-items-center">
                  <div className="d-flex justify-items-center px-4">
                    <img className="img-detailDokter" src={dokter.image} />
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="grid gap-4">
                      <div className="nameDokter fw-semibold">
                        {dokter.doctorName}
                      </div>
                      <div className="titleDokter">{dokter.job}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detail-dokter-item card mt-4 border-0">
                <div className=" d-grid align-items-stretch">
                  <ul className=" menu d-grid gap-5 py-5 justify-content-center align-items-center mx-auto p-0 ">
                    <DetailDokterItem
                      img={icon1}
                      title="Informasi Dokter"
                      location={`/admin/manage/dokter/detail/${id}`}
                    />
                    <DetailDokterItem
                      img={icon2}
                      title="Dokumen"
                      location={`/admin/manage/dokter/detail/dokumen/${id}`}
                    />
                    <DetailDokterItem
                      img={icon3}
                      title="Pengalaman"
                      location={`/admin/manage/dokter/detail/pengalaman/${id}`}
                    />
                  </ul>
                </div>
              </div>
            </div>
            <div className="children-wrap wrapper">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutDetailPengajuan;
