import React, { useState, useEffect } from "react";
import "./DetailTransaksiUser.style.css";
import Layouts from "../../Layouts/Layouts";
import { useParams } from "react-router-dom";
import ItemDataTransaksi from "../../components/Fragments/item-data-transaksi/ItemDataTransaksi";
import { detailDataTransaksi } from "../../components/DataComponents/dataComponents";
import { alertMessageBlue, buktiTransfer } from "../../../image";
import Button from "../../components/Elements/button/Button";
import { PhotoSwipe } from "react-photoswipe";
import "react-photoswipe/lib/photoswipe.css";
import ModalAlert from "../../components/Fragments/modal-alert/ModalAlert";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import {
  getDetailTransaction,
  updateTransaction,
} from "../../service/transaction";

function DetailTransaksiUser() {
  useLogin();
  const id = useParams();
  const idString = String(id.id);
  const [detailTransaction, setDetailTransaction] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [modalTextArea, setModalTextArea] = useState("d-none");

  useEffect(() => {
    getDetailTransaction(idString, (data) => {
      setDetailTransaction(data.data);
    });
  }, [id]);

  const openPhotoSwipe = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleButtonClick = (id) => {
    setSelectedButton(id);
    if (id === 4) {
      setModalTextArea("d-block");
    } else {
      setModalTextArea("d-none");
    }
  };

  const styleText = (status) => {
    if (status === "A") {
      return "Paket Konsultasi Premium";
    } else if (status === "B") {
      return "Paket Konsultasi Instan";
    } else if (status === 2) {
      return "Accept";
    } else if (status === 5) {
      return "Pending";
    } else {
      return "Failed";
    }
  };

  const acceptPayment = async () => {
    const accept = { payment_status: 2 };
    await updateTransaction(idString, accept, (status, res) => {
      if (status) {
        terimaToast();
        getDetailTransaction(idString, (data) => {
          setDetailTransaction(data.data);
        });
      } else {
        console.log(res);
      }
    });
  };

  const rejectPayment = async () => {
    const reject = { payment_status: 4 };
    await updateTransaction(idString, reject, (status, res) => {
      if (status) {
        tolakToast();
        getDetailTransaction(idString, (data) => {
          setDetailTransaction(data.data);
        });
      } else {
        console.log("error asw", res);
      }
    });
  };

  const terimaToast = () =>
    toast.success(
      "Pembayaran berhasil diterima. Informasi ini akan disampaikan ke user",
      {
        duration: 4000,
        position: 'position="bottom-center',
        className: "custom-toast-payment",

        // Aria
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      }
    );
  const tolakToast = () =>
    toast.success(
      "Pembayaran berhasil ditolak. Informasi ini akan disampaikan ke user",
      {
        duration: 4000,
        position: 'position="bottom-center',
        className: "custom-toast-payment",

        // Aria
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      }
    );

  return (
    <Layouts titlePage={"Detail Transaksi User"}>
      <section className="detail-transaksi" id="detail-transaksi">
        <p className="routes">
          {" "}
          <span> Transaksi / Transaksi Tertunda /</span> Detail Transaksi User
        </p>

        {detailTransaction.map((item, index) => (
          <div
            key={index}
            className="row detail-wrapper row-cols-lg-2 row-cols-1"
          >
            <div className="col d-flex flex-column justify-content-between ">
              <ItemDataTransaksi title={"Nama User"} text={item.patient_name} />
              <ItemDataTransaksi
                title={"Paket Konseling"}
                text={styleText(item.counseling_type)}
              />
              <ItemDataTransaksi
                title={"Metode Pembayaran"}
                text={item.payment_type}
              />
              <ItemDataTransaksi
                title={"Status Pembayaran"}
                text={styleText(item.payment_status)}
              />
              <ItemDataTransaksi
                title={"ID Transaksi"}
                text={item.transaction_id}
              />
              <ItemDataTransaksi title={"Harga"} text={item.price_counseling} />
              <ItemDataTransaksi
                title={"Nama Dokter"}
                text={item.doctor_name}
              />
              <ItemDataTransaksi
                title={"Durasi Konseling"}
                text={item.duration_name}
              />
              <div className="button-pembayaran">
                <div className="d-flex flex-md-row flex-column  gap-2">
                  <Button
                    className={`btn btn-primary w-100 fw-medium ${
                      item.payment_status === 2 || item.payment_status === 4
                        ? "d-none"
                        : "d-block"
                    }`}
                    bsTogle={"modal"}
                    bsTarget={"#modal-accept-payment"}
                    text={"Terima Pembayaran "}
                  />
                  <Button
                    className={`btn text-primary border-primary w-100 fw-medium ${
                      item.payment_status === 2 || item.payment_status === 4
                        ? "d-none"
                        : "d-block"
                    }`}
                    bsTogle={"modal"}
                    bsTarget={"#modal-reject-payment"}
                    text={"Tolak  Pembayaran"}
                  />
                </div>
              </div>
              <ModalAlert id={"modal-accept-payment"}>
                <div className="modal-content">
                  <div className="modal-body">
                    <button
                      type="button"
                      className="btn-close float-end"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                    <p className="mt-3 mb-5">
                      Yakin ingin terima pembayaran User?
                    </p>
                    <div className="d-flex gap-2 justify-content-end">
                      <Button
                        className={"btn text-primary fw-semibold"}
                        bsDismiss={"modal"}
                        text={"Batal"}
                      />
                      <Button
                        className={"btn btn-primary fw-medium"}
                        text={"Terima"}
                        onClick={acceptPayment}
                        bsDismiss={"modal"}
                      />
                    </div>
                  </div>
                </div>
              </ModalAlert>

              <ModalAlert id={"modal-reject-payment"} size={"modal-lg"}>
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="alert-modal-transaksi text-center mb-4">
                      <img
                        className="mb-4 mt-4"
                        src={alertMessageBlue}
                        alt=""
                      />
                      <h5>
                        Apakah kamu yakin ingin Tolak pembayaran User ? beri
                        alasan yang akan diberikan ke User
                      </h5>
                    </div>
                    <div className="row d-flex row-cols-lg-2 row-cols-1  ">
                      <div className="col d-flex justify-content-center mb-2">
                        <Button
                          className={` ${
                            selectedButton === 1
                              ? "changeColorButton  fw-medium "
                              : "btn border-secondary-subtle text-black fw-medium"
                          }`}
                          text={"Foto bukti pembayaran tidak jelas"}
                          onClick={() => handleButtonClick(1)}
                        />
                      </div>
                      <div className="col d-flex justify-content-lg-start justify-content-center mb-2">
                        <Button
                          className={` ${
                            selectedButton === 2
                              ? "changeColorButton  fw-medium"
                              : "btn border-secondary-subtle text-black fw-medium"
                          }`}
                          text={"Foto bukti pembayaran tidak jelas"}
                          onClick={() => handleButtonClick(2)}
                        />
                      </div>
                      <div className="col d-flex order-last justify-content-center mb-2">
                        <Button
                          className={` ${
                            selectedButton === 3
                              ? "changeColorButton  fw-medium "
                              : "btn border-secondary-subtle text-black fw-medium"
                          }`}
                          text={"Foto bukti pembayaran tidak jelas"}
                          onClick={() => handleButtonClick(3)}
                        />
                      </div>
                      <div className="col d-flex order-last justify-content-lg-start justify-content-center mb-2">
                        <Button
                          className={` ${
                            selectedButton === 4
                              ? "changeColorButton  fw-medium "
                              : "btn border-secondary-subtle text-black fw-medium"
                          }`}
                          text={"Alasan Lain"}
                          onClick={() => handleButtonClick(4)}
                        />
                      </div>
                    </div>
                    <div className={`form-floating mt-3 ${modalTextArea}`}>
                      <h5 className="text-black">Tuliskan alasan Penolakan</h5>
                      <textarea
                        style={{ minHeight: "10vh" }}
                        className="form-control w-100"
                        id="floatingTextarea2"
                      />
                    </div>
                  </div>

                  <div className="d-flex justify-content-end me-3 gap-3 mb-3">
                    <button
                      type="button"
                      className="btn border-secondary-subtle"
                      data-bs-dismiss="modal"
                    >
                      Batal
                    </button>
                    <button
                      type="button"
                      className={`btn ${
                        selectedButton > 0 ? "btn-primary" : "btn-secondary"
                      }`}
                      data-bs-dismiss="modal"
                      onClick={rejectPayment}
                    >
                      Tolak Pembayaran
                    </button>
                  </div>
                </div>
              </ModalAlert>
            </div>

            <div className="col">
              <p>Bukti Transfer : </p>
              <div className="bukti-transfer">
                <img
                  src={item.payment_proof}
                  onClick={() => openPhotoSwipe()}
                />

                <PhotoSwipe
                  isOpen={isOpen}
                  items={[{ w: 500, h: 500, src: item.payment_proof }]}
                  options={{ bgOpacity: 0.7 }}
                  onClose={handleClose}
                />
              </div>
            </div>
          </div>
        ))}

        <Toaster />
      </section>
    </Layouts>
  );
}

export default DetailTransaksiUser;
