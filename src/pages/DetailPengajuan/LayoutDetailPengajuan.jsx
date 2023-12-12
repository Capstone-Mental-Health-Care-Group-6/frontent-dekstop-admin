import React, { Children } from "react";
import "./LayoutDetailPengajuan.css";
import DetailDokterItem from "../../components/Elements/DetailDokterItem/DetailDokterItem";
import {
  avatar1,
  icon1,
  icon2,
  icon3,
  icon4,
  iconModalRejection,
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
  const [showConfirmation, setShowConfirmation] = useState(false); // State untuk menampilkan modal konfirmasi
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showRejection, setShowRejection] = useState(false);
  const [showConfirmSubmission, setShowConfirmSubmission] = useState(false);
  const [showSuccessConfirmation, setShowSuccessConfirmation] = useState(false);

  const cancelRejection = () => {
    // Fungsi untuk membatalkan nonaktifkan akun (tutup modal konfirmasi)
    setShowRejection(false);
  };

  const confirmRejection = () => {
    // Fungsi untuk menonaktifkan akun setelah konfirmasi
    setShowRejection(false);

    // Setelah berhasil menonaktifkan, tampilkan modal sukses
    setShowSuccessModal(true);
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 3000);
  };

  const handleRejection = () => {
    // Fungsi untuk membatalkan nonaktifkan akun (tutup modal konfirmasi)
    setShowRejection(true);
  };

  const handleConfirmation = () => {
    setShowConfirmSubmission(true);
  };

  const cancelConfirmation = () => {
    setShowConfirmSubmission(false);
  };

  const confirmSubmission = () => {
    // Fungsi untuk menonaktifkan akun setelah konfirmasi
    setShowConfirmSubmission(false);

    // Setelah berhasil menonaktifkan, tampilkan modal sukses
    setShowSuccessConfirmation(true);
    setTimeout(() => {
      setShowSuccessConfirmation(false);
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
              <button
                className="btn btn-primary px-3 py-2"
                onClick={handleConfirmation}
              >
                Terima Pengajuan Dokter
              </button>
              <button
                className="fw-semibold bg-transparent border-0"
                onClick={handleRejection}
              >
                Tolak Pengajuan
              </button>
            </div>
          </div>
        </div>

        {/* Modal Rejection */}
        <div
          className={`modal ${showRejection ? "show" : ""}`}
          style={{ display: showRejection ? "block" : "none" }}
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="d-flex justify-content-center">
                <img
                  className="iconModalRejection my-3"
                  src={iconModalRejection}
                />
              </div>
              <div className="modal-header border-bottom-0 d-flex justify-content-center">
                <h1
                  className="modal-title text-center fw-semibold"
                  id="exampleModalLabel"
                >
                  Apakah kamu yakin ingin Tolak Pengajuan Praktik Dokter? <br />
                  beri alasan yang akan diberikan ke Dokter
                </h1>
              </div>
              <div className="modal-body px-5">
                <div className="d-flex flex-column gap-2">
                  <div className="row d-flex gap-2">
                    <button className="menu-reject col-7 bg-white border border-2 border-light-subtlet px-2 py-2 rounded text-center">
                      Surat Ijin Praktik Dokter Ilegal
                    </button>
                    <button className="menu-reject col bg-white border border-2 border-light-subtlet  py-2 rounded text-center">
                      Manipulasi Ijazah
                    </button>
                  </div>
                  <div className="row d-flex gap-2">
                    <button className="menu-reject col-8 bg-white border border-2 border-light-subtlet px-2 py-2 rounded">
                      Terdapat Ketidaksesuaian Antar Dokumen
                    </button>
                    <button className="menu-reject col-3 bg-white border border-2 border-light-subtlet px-3 py-2 rounded text-center">
                      Alasan Lain
                    </button>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-top-0">
                <button
                  type="button"
                  className="btn text-primary"
                  data-bs-dismiss="modal"
                  onClick={cancelRejection}
                >
                  Batal
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={confirmRejection}
                >
                  Tolak Pengajuan
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Confirmation */}
        <div
          className={`modal ${showConfirmSubmission ? "show" : ""}`}
          style={{ display: showConfirmSubmission ? "block" : "none" }}
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-bottom-0 d-flex justify-content-center"></div>
              <div className="modal-body">
                <div className="d-flex align-items-center">
                  <h1
                    className="modal-title text-start text-black fw-bold px-3 pt-3"
                    id="exampleModalLabel"
                  >
                    Yakin ingin terima pengajuan izin parktik dokter?
                  </h1>
                </div>
                <div className="d-flex text-start text-body-secondary  px-3 pt-3 ">
                  Dengan ini dokter akan mendapat akses untuk praktik di
                  EmphatiCare
                </div>
              </div>
              <div className="modal-footer border-top-0">
                <button
                  type="button"
                  className="btn text-primary"
                  data-bs-dismiss="modal"
                  onClick={cancelConfirmation}
                >
                  Batal
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={confirmSubmission}
                >
                  Terima
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Rejection Success */}
        <div
          className={`modal ${showSuccessModal ? "show" : ""}`}
          style={{ display: showSuccessModal ? "block" : "none" }}
          id="successModal"
          tabIndex="-1"
          aria-labelledby="successModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog fixed-bottom fixed-left modal-success">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="successModalLabel">
                  <div className="d-flex">
                    <div className="d-flex align-items-center">
                      <img src={Success} alt="" className="me-2" />
                    </div>
                    <div>
                      Pengajuan Praktik Dokter berhasil ditolak. Informasi ini
                      akan disampaikan ke Dokter terkait.
                    </div>
                  </div>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setShowSuccessModal(false)}
                ></button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Confirmation Success */}
        <div
          className={`modal ${showSuccessConfirmation ? "show" : ""}`}
          style={{ display: showSuccessConfirmation ? "block" : "none" }}
          id="successModal"
          tabIndex="-1"
          aria-labelledby="successModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog fixed-bottom fixed-left modal-success">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="successModalLabel">
                  <div className="d-flex">
                    <div className="d-flex align-items-center">
                      <img src={Success} alt="" className="me-2" />
                    </div>
                    <div>Pengajuan Praktik Dokter Berhasil Diterima</div>
                  </div>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setShowSuccessModal(false)}
                ></button>
              </div>
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
                      location={`/admin/manage/dokter/pengajuan/detail/${id}`}
                    />
                    <DetailDokterItem
                      img={icon2}
                      title="Dokumen"
                      location={`/admin/manage/dokter/pengajuan/detail/dokumen/${id}`}
                    />
                    <DetailDokterItem
                      img={icon3}
                      title="Pengalaman"
                      location={`/admin/manage/dokter/pengajuan/detail/pengalaman/${id}`}
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
