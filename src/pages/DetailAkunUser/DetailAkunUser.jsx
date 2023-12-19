import Layouts from "../../Layouts/Layouts";
import "./DetailAkunUser.style.css";
import statusAkun from "../../../src/assets/statusAkun.svg";
import info from "../../../src/assets/info.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Success } from "../../../image";
import {
  getDetailPatient,
  updateStatusAkunPatient,
} from "../../service/patient";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

const DetailUser = () => {
  useLogin();
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const [showInfo, setShowInfo] = useState(false); // State untuk menampilkan info saat hover
  const [toggleStatus, setToggleStatus] = useState("Active"); // State untuk status toggle di halaman detail user
  const [showConfirmation, setShowConfirmation] = useState(false); // State untuk menampilkan modal konfirmasi
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [updatedUserData, setUpdatedUserData] = useState(null);

  const handleInfoHover = () => {
    setShowInfo(true);
  };

  const handleInfoLeave = () => {
    setShowInfo(false);
  };

  const handleSwitchToggle = () => {
    if (toggleStatus === "Active") {
      // Jika status saat ini adalah "Active", tampilkan modal konfirmasi untuk menonaktifkan akun
      setShowConfirmation(true);
    } else {
      // Jika status saat ini adalah "Inactive", tampilkan modal konfirmasi untuk mengaktifkan akun
      setShowConfirmation(true);
    }
  };

  const cancelNonAktifkan = () => {
    // Fungsi untuk membatalkan nonaktifkan akun (tutup modal konfirmasi)
    setShowConfirmation(false);
  };

  const updateStatus = (newStatus) => {
    updateStatusAkunPatient(id, newStatus, (res) => {
      if (res && res.data) {
        setShowSuccessModal(true);
        setTimeout(() => {
          setShowSuccessModal(false);
        }, 3000);
        updateToggleStatus(newStatus);
        setUpdatedUserData(res.data); // Jika diperlukan, simpan data terupdate ke state
      } else {
        console.log("Gagal update status akun");
      }
    });
  };

  const confirmAction = (newStatus) => {
    setShowConfirmation(false);
    updateStatus(newStatus);
  };

  const confirmNonAktifkan = () => {
    confirmAction("Inactive");
  };

  const confirmAktifkan = () => {
    confirmAction("Active");
  };

  // Fungsi untuk mengubah status toggle
  const updateToggleStatus = (newStatus) => {
    setToggleStatus(newStatus);
  };

  useEffect(() => {
    getDetailPatient(id, (data) => {
      setUserData(data.data);
      if (data.data.status === "Inactive") {
        updateToggleStatus("Inactive");
      }
    });
  }, [id]);

  return (
    <Layouts titlePage={"Detail Akun User"}>
      <section className="detail-user" id="detail-user">
        <p className="routes">
          <span>
            <Link to={"/admin/manage/user"} className="link-back">
              Manage User /
            </Link>
          </span>{" "}
          Detail Akun User
        </p>
      </section>

      <section className="detail-user-id ms-2">
        <div className="row">
          <div className="col-4">
            {/* detail username dan avatar */}
            <div className="row">
              <div className="col-12">
                <div className="card card-1">
                  <div className="row">
                    <div className="col-4">
                      <img src={userData?.avatar} alt="" />
                    </div>
                    <div className="col-8 my-auto">
                      <h4>{userData?.name}</h4>
                      <p className="detail-label mb-0">User</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* detail informasi akun(status akun) */}
            <div className="row">
              <div className="col-12">
                <div className="card card-2">
                  <div className="row">
                    <div className="col-12">
                      <img src={statusAkun} alt="" />
                      <span>Informasi Akun</span>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-8 position-relative">
                      <span>Status Akun</span>
                      <img
                        src={info}
                        alt=""
                        className="info-icon"
                        onMouseEnter={handleInfoHover}
                        onMouseLeave={handleInfoLeave}
                      />
                      <div className={`info-tooltip ${showInfo ? "show" : ""}`}>
                        <div className="h2-info-tooltip">
                          Informasi Status Akun
                        </div>
                        <div className="p-info-tooltip">
                          Admin dapat mengaktifkan dan menonaktifkan status akun
                          user
                        </div>
                      </div>
                    </div>
                    <div className="col-4 my-auto d-flex justify-content-end">
                      {/* swith on off akun */}
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={toggleStatus === "Active" ? true : false}
                          onChange={handleSwitchToggle}
                        />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* informasi akun (detail) */}
          <div className="col-sm-12 col-md-8 col-lg-8">
            <div className="card card-3 ms-4">
              <h4>Informasi Akun</h4>
              <p className="label-detail">ID Akun</p>
              <p className="value-detail">{userData?.ID}</p>
              <p className="label-detail">Nama User</p>
              <p className="value-detail">{userData?.name}</p>
              <p className="label-detail">No Telp</p>
              <p className="value-detail">{userData?.phone_number}</p>
              <p className="label-detail">Email</p>
              <p className="value-detail">{userData?.email}</p>
            </div>
          </div>
        </div>
      </section>

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
              <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">
                {toggleStatus === "Active"
                  ? "Yakin ingin menonaktifkan akun ini?"
                  : "Yakin ingin mengaktifkan akun ini?"}
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
                {toggleStatus === "Active"
                  ? "Akun ini tidak dapat melakukan segala aktifitas jika dinonaktfkan"
                  : "Akun ini dapat melakukan segala aktifitas jika diaktifkan."}
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
                onClick={
                  toggleStatus === "Active"
                    ? confirmNonAktifkan
                    : confirmAktifkan
                }
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
                {toggleStatus === "Active"
                  ? "Akun Berhasil diaktifkan"
                  : "Akun Berhasil dinonaktifkan"}
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
    </Layouts>
  );
};

export default DetailUser;
