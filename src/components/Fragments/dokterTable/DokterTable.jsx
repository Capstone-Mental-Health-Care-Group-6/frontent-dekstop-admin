import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import "./DokterTable.style.css";
import { NonAktifkanAkun, DetailAkun } from "../../../../image";
import { Link, useNavigate } from "react-router-dom";
import { dataDokter } from "../../DataDokter/dataDokter";

const DokterTable = ({ data, id }) => {
  const dokter = dataDokter.find((dokter) => dokter.id === parseInt(id));
  const [selectedDokter, setSelectedDokter] = useState(null);
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const navigation = useNavigate();

  const DokterBodyTemplate = (rowData) => {
    return (
      <Link
        className="doctor-name"
        to={`/admin-manage-dokter/detail-akun-dokter/${rowData.id}`}
      >
        <div className="d-flex align-items-center">
          <img
            src={rowData.image}
            alt={rowData.doctorName}
            height="32px"
            className="me-2"
          />
          <span>{rowData.doctorName}</span>
        </div>
      </Link>
    );
  };

  const statusBodyTemplate = (rowData) => {
    const statusClassName =
      rowData.statusAkun === "Aktif" ? "active-status" : "inactive-status";
    return <span className={statusClassName}>{rowData.statusAkun}</span>;
  };

  const handleActionClick = (rowData) => {
    setSelectedDokter(rowData);
    setDisplayModal(true);
  };

  const handleActionSelection = (action) => {
    setSelectedAction(action);
    setDisplayModal(false);

    if (action === "Lihat detail akun") {
      // Action ketika lihat detail akun
    } else if (action === "Non aktifkan akun") {
      setShowConfirmation(true);
    }
  };

  const confirmNonAktifkan = () => {
    // Lakukan tindakan untuk menonaktifkan akun
    setShowConfirmation(false);
  };

  const cancelNonAktifkan = () => {
    // Batal menonaktifkan akun
    setShowConfirmation(false);
  };

  const actionItems = [
    { icon: DetailAkun, label: "Lihat detail akun", action: "view" },
    { icon: NonAktifkanAkun, label: "Non aktifkan akun", action: "deactivate" },
  ];

  // const filteredData = data.filter((user) => {
  //   return (
  //     user.userName.toLowerCase().includes(searchValue.toLowerCase()) ||
  //     user.email.toLowerCase().includes(searchValue.toLowerCase()) ||
  //     user.telephone.toLowerCase().includes(searchValue.toLowerCase()) ||
  //     user.statusAkun.toLowerCase().includes(searchValue.toLowerCase())
  //   );
  // });

  const dialogFooter = (
    <div className="dialog-footer">
      <button
        onClick={() => handleActionSelection("Lihat detail akun")}
        className="p-button p-button-text border-0 mb-2 ms-2 mt-2"
      >
        <img src={DetailAkun} alt="Detail Akun" className="me-2" /> Lihat detail
        akun
      </button>
      <br />
      <button
        onClick={() => handleActionSelection("Non aktifkan akun")}
        className="p-button p-button-text border-0 mb-2 ms-2"
      >
        <img src={NonAktifkanAkun} alt="Non Aktifkan Akun" className="me-2" />{" "}
        Non aktifkan akun
      </button>
    </div>
  );

  return (
    <div className="p-mt-4">
      <DataTable
        value={data}
        // value={filteredData}
        className="p-datatable-sm"
        rowClassName="table-row-height"
        onSelect={navigation("/")}
      >
        <Column
          body={DokterBodyTemplate}
          header="Nama"
          headerClassName="table-header-border"
        />
        <Column
          field="email"
          header="Email"
          headerClassName="table-header-border"
        />
        <Column
          field="telephone"
          header="No. Telp"
          headerClassName="table-header-border"
        />
        <Column
          field="workTime"
          header="Total Jam Kerja"
          headerClassName="table-header-border"
        />

        {/* <Column
          body={(rowData) => (
            <button
              className="border-0 bg-light fw-bold"
              onClick={() => handleActionClick(rowData)}
            >
              ...
            </button>
          )}
          header="Action"
          headerClassName="table-header-border"
        /> */}
        <Column
          body={(rowData) => (
            <div className="dropdown">
              <button
                className="btn"
                type="button"
                id={`dropdownMenuButton-${rowData.id}`}
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="action-symbol fw-bold">...</span>
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby={`dropdownMenuButton-${rowData.id}`}
              >
                {actionItems.map((item, index) => (
                  <li key={index}>
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        handleActionSelection(item.action, rowData)
                      }
                    >
                      <img
                        src={item.icon}
                        alt={item.label}
                        className="icon-before-label me-2"
                      />{" "}
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          header="Action"
          headerClassName="table-header-border"
        />
      </DataTable>

      {/* Modal untuk menampilkan detail akun atau nonaktifkan akun */}
      <Dialog
        visible={displayModal}
        onHide={() => setDisplayModal(false)}
        footer={dialogFooter}
        modal
      >
        {selectedDokter && (
          <div>
            <p></p>
          </div>
        )}
      </Dialog>

      {/* Modal konfirmasi nonaktifkan akun */}
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
            <div className="modal-header">
              <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">
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
                Akun ini tidak dapat melakukan segala aktifitas jika
                dinonaktfkan
              </p>
            </div>
            <div className="modal-footer">
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
    </div>
  );
};

export default DokterTable;
