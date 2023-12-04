import React from "react";
import Button from "../../Elements/button/Button";

const ModalDanaPencairan = ({ visible, onClose, rowData }) => {
  const { id, size } = rowData;

  return (
    <div
      className={`modal fade ${visible ? "show" : ""}`}
      style={{ display: visible ? "block" : "none" }}
      id={id}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden={!visible}
    >
      <div className={`modal-dialog modal-dialog-centered ${size}`}>
        <div className="modal-content rounded-4">
          <div className="d-flex align-items-center border-0 position-relative py-2">
            <Button
              className={"btn-close position-absolute end-0"}
              bsDismiss={"modal"}
              ariaLabel={"Close"}
              onClick={onClose}
            />
            <h5>Detail Pencairan Dana Dokter</h5>
          </div>
          <div className="modal-body p-5 d-flex flex-column">
            {/* Tambahkan logika untuk menampilkan data yang sesuai */}
            <p>ID Transaksi: {rowData.idtransaksi}</p>
            <p>Date: {rowData.date}</p>
            <p>Saldo Cair: {rowData.saldoCair}</p>
            <p>Status: {rowData.status}</p>
            {/* Tambahan informasi lainnya sesuai kebutuhan */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDanaPencairan;
