import React, { useState } from "react";
import Button from "../../Elements/button/Button";
import InputSelect from "../../Elements/input/InputSelect";

const ModalDanaPencairan = ({ visible, onClose, rowData }) => {
  const { id, size, status } = rowData;

  // State untuk menyimpan nilai status yang terpilih
  const [selectedStatus, setSelectedStatus] = useState(status);

  const [backgroundClass, setBackgroundClass] = useState("");

  // Fungsi handler ketika nilai InputSelect berubah
  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);

    // Set class tambahan berdasarkan selectedStatus
    setBackgroundClass(getBackgroundClass(e.target.value));

    console.log(e.target.value);
  };

  let statusClassName;

  if (status === "Sukses") {
    statusClassName = "success-status";
  } else if (status === "Proses") {
    statusClassName = "process-status";
  } else {
    statusClassName = "insuccess-status";
  }

  const getBackgroundClass = (status) => {
    if (status === "Sukses") {
      return "success-background";
    } else if (status === "Proses") {
      return "process-background";
    } else {
      return "insuccess-background";
    }
  };

  const uniqueOptions = Array.from(new Set(["Sukses", "Proses", "Pending"]));

  return (
    <div
      className={`modal modal__dana__pencairan fade ${visible ? "show" : ""}`}
      style={{ display: visible ? "block" : "none" }}
      id={id}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden={!visible}
    >
      <div className={`modal-dialog modal-dialog-centered ${size}`}>
        <div className="modal-content p-3 rounded-4">
          <div className="d-flex border-0 position-relative py-2">
            <Button
              className={"btn-close position-absolute end-0"}
              bsDismiss={"modal"}
              ariaLabel={"Close"}
              onClick={onClose}
            />
            <h5 className="fw-semibold">Detail Pencairan Dana Dokter</h5>
          </div>
          <div className="modal-body d-flex flex-column">
            <p className="d-flex flex-column gap-2">
              Status{" "}
              <span>
                <InputSelect
                  name={"statusPencairan"}
                  id={"statusPencairan"}
                  title={rowData.status}
                  options={uniqueOptions}
                  value={selectedStatus}
                  onChange={handleStatusChange}
                  className={`fw-semibold select__status__pencairan ${statusClassName} ${backgroundClass}`}
                />
              </span>{" "}
            </p>

            <p className="d-flex flex-column gap-2">
              Nama Dokter{" "}
              <span className="fw-semibold text-black">
                {rowData.nama_dokter}
              </span>{" "}
            </p>

            <p className="d-flex flex-column gap-2">
              Metode Pencairan{" "}
              <span className="fw-semibold text-black">Bank BNI</span>{" "}
            </p>

            <p className="d-flex flex-column gap-2">
              No Rekening{" "}
              <span className="fw-semibold text-black">872349322</span>{" "}
            </p>

            <p className="d-flex flex-column gap-2">
              ID Transaksi
              <span className="fw-semibold text-black">
                {rowData.idtransaksi}
              </span>{" "}
            </p>
            <p className="d-flex flex-column gap-2">
              Nominal Pencairan{" "}
              <span className="fw-semibold nominal">{rowData.saldoCair}</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDanaPencairan;
