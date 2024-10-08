import React, { Children, useEffect } from "react";
import "./LayoutDetailDokter.css";
import DetailDokterItem from "../../components/Elements/DetailDokterItem/DetailDokterItem";
import { avatar1, icon1, icon2, icon3, icon4 } from "../../../image";
import info from "../../../src/assets/info.svg";
import { useState } from "react";
import { Success } from "../../../image";
import { useParams } from "react-router-dom";
import { dataDokter } from "../../components/DataDokter/dataDokter";
import { useLogin } from "../../hooks/useLogin";
import { getDoctorById } from "../../service/doctor";

const LayoutDetailDokter = ({ children }) => {
  useLogin();
  const { id } = useParams();
  const [dataDokter, setdataDokter] = useState([]);
  const [loading, setLoading] = useState(false);
  // const dokter = dataDokter.find((dokter) => dokter.id === parseInt(id));
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

  useEffect(() => {
    setLoading(true);
    getDoctorById({
      callback: (data) => {
        setdataDokter(data.data);
        setLoading(false); // Log the data after it has been set
      },
      id,
    });
  }, [id]);

  return (
    <>
      <div>
        <div>
          <p>
            Manage Dokter /
            <span className="fw-semibold"> Detail Akun Dokter</span>
          </p>
        </div>
        <div>
          <div className="wrap-detail-card d-flex ">
            <div className="wrapper">
              <div className="profile-card card py-4 border-0">
                <div className="d-flex justify-items-center">
                  <div className="d-flex justify-items-center px-4">
                    <img
                      className="img-detailDokter"
                      src={dataDokter?.doctor_avatar}
                    />
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="grid gap-4">
                      <div className="nameDokter fw-semibold">
                        {dataDokter?.doctor_name}
                      </div>
                      <div className="titleDokter">Psikologi Klinis</div>
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
                    <DetailDokterItem
                      img={icon4}
                      title="Artikel"
                      location={`/admin/manage/dokter/detail/artikel/${id}`}
                    />
                    <div className="d-flex">
                      <div className="col-8 position-relative">
                        <span>Status Akun</span>
                        <img
                          src={info}
                          alt=""
                          className="info-icon"
                          onMouseEnter={handleInfoHover}
                          onMouseLeave={handleInfoLeave}
                        />
                        <div
                          className={`info-tooltip ${showInfo ? "show" : ""}`}
                        >
                          <div className="h2-info-tooltip">
                            Informasi Status Akun
                          </div>
                          <div className="p-info-tooltip">
                            Admin dapat mengaktifkan dan menonaktifkan status
                            akun user
                          </div>
                        </div>
                      </div>
                      <div className="col-4 my-auto d-flex justify-content-end">
                        {/* swith on off akun */}
                        <label className="switch">
                          <input
                            type="checkbox"
                            defaultChecked={true}
                            onChange={handleSwitchToggle}
                          />
                          <span className="slider round"></span>
                        </label>
                      </div>
                    </div>
                    {/* Modal Konfirmasi */}
                    <div
                      className={`modal ${showConfirmation ? "show" : ""}`}
                      style={{ display: showConfirmation ? "block" : "none" }}
                      id="exampleModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header border-bottom-0">
                            <h1
                              className="modal-title fs-5 fw-bold"
                              id="exampleModalLabel"
                            >
                              Yakin ingin menonaktifkan akun ini?
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                              onClick={() => setShowConfirmation(false)}
                            ></button>
                          </div>
                          <div className="modal-body">
                            <p className="fs-6">
                              Akun ini tidak dapat melakukan segala aktifitas
                              jika dinonaktfkan
                            </p>
                          </div>
                          <div className="modal-footer border-top-0">
                            <button
                              type="button"
                              className="btn text-primary"
                              data-bs-dismiss="modal"
                              onClick={cancelNonAktifkan}
                            >
                              Batal
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={confirmNonAktifkan}
                            >
                              Yakin
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Modal Sukses Nonaktifkan Akun */}
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
                              <img src={Success} alt="" className="me-2" />
                              Akun Berhasil dinonaktifkan
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

export default LayoutDetailDokter;
