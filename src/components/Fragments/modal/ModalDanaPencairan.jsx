import React, { useEffect, useState } from "react";
import Button from "../../Elements/button/Button";
import InputSelect from "../../Elements/input/InputSelect";

const ModalDanaPencairan = ({
  visible,
  onClose,
  rowData,
  selectedStatusMap,
  updateStatusInDataTable,
}) => {
  const { id, size, status } = rowData;

  // State untuk menyimpan nilai status yang terpilih
  const [selectedStatus, setSelectedStatus] = useState("");

  const [backgroundClass, setBackgroundClass] = useState("");

  // Efek samping untuk memastikan bahwa nilai status lokal selalu sinkron dengan properti rowData
  useEffect(() => {
    setSelectedStatus(selectedStatusMap[rowData.id] || status);
  }, [rowData.id, selectedStatusMap, status]);

  // Fungsi handler ketika nilai InputSelect berubah
  const handleStatusChange = (e) => {
    const newStatus = e.target.value;

    // Set class tambahan berdasarkan selectedStatus
    // setBackgroundClass(getBackgroundClass(e.target.value));
    setSelectedStatus(newStatus);
    setBackgroundClass(getBackgroundClass(newStatus));

    // Memperbarui status di tabel
    updateStatusInDataTable(rowData.id, newStatus);

    console.log(newStatus);
  };

  let statusClassName;

  if (status === "DONE") {
    statusClassName = "success-status";
  } else if (status === "PENDING") {
    statusClassName = "insuccess-status";
  }

  const getBackgroundClass = (status) => {
    if (status === "DONE") {
      return "success-background";
    } else if (status === "PENDING") {
      return "insuccess-background";
    }
  };

  const uniqueOptions = Array.from(new Set(["DONE", "PENDING"]));

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
            {/* <p className="d-flex flex-column gap-2">
              Status{" "}
              <span>
                <InputSelect
                  name={"statusPencairan"}
                  id={"statusPencairan"}
                  title={rowData.status}
                  options={uniqueOptions}
                  value={selectedStatusMap[rowData.id] || selectedStatus}
                  onChange={handleStatusChange}
                  className={`fw-semibold select__status__pencairan ${statusClassName} ${backgroundClass}`}
                />
              </span>{" "}
            </p> */}

            <p className="d-flex flex-column gap-2">
              Nama Dokter{" "}
              <span className="fw-semibold text-black">
                {rowData.doctor_name}
              </span>{" "}
            </p>

            <p className="d-flex flex-column gap-2">
              Metode Pencairan{" "}
              <span className="fw-semibold text-black">
                {rowData.payment_method}
              </span>{" "}
            </p>

            <p className="d-flex flex-column gap-2">
              No Rekening{" "}
              <span className="fw-semibold text-black">
                {rowData.payment_number}
              </span>{" "}
            </p>

            {/* <p className="d-flex flex-column gap-2">
              ID Transaksi
              <span className="fw-semibold text-black">
                {rowData.idtransaksi}
              </span>{" "}
            </p> */}
            <p className="d-flex flex-column gap-2">
              Nominal Pencairan{" "}
              <span className="fw-semibold nominal">{rowData.balance_req}</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDanaPencairan;
