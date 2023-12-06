import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { Success } from "../../../../image";
import "./DokterTable.style.css";
import { NonAktifkanAkun, DetailAkun } from "../../../../image";
import { Link, useNavigate } from "react-router-dom";
import { dataDokter } from "../../../components/DataDokter/dataDokter";
import { searchFailed } from "../../../../image";

const DokterTable = ({ data, id, searchValue }) => {
  const dokter = dataDokter.find((dokter) => dokter.id === parseInt(id));
  const [selectedDokter, setSelectedDokter] = useState(null);
  // const [displayModal, setDisplayModal] = useState(false);
  // const [selectedAction, setSelectedAction] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [first, setFirst] = useState(0); // State untuk menangani index awal data yang ditampilkan
  const [rows, setRows] = useState(5); // State untuk menangani jumlah baris per halaman

  const navigation = useNavigate();

  const filteredData = data.filter((dokter) => {
    return (
      dokter.doctorName.toLowerCase().includes(searchValue.toLowerCase()) ||
      dokter.email.toLowerCase().includes(searchValue.toLowerCase()) ||
      dokter.telephone.toLowerCase().includes(searchValue.toLowerCase()) ||
      dokter.statusAkun.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

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

  const actionItems = [
    { icon: DetailAkun, label: "Lihat detail akun", action: "view" },
    { icon: NonAktifkanAkun, label: "Non aktifkan akun", action: "deactivate" },
  ];

  const handleActionSelection = (action, rowData) => {
    setSelectedDokter(rowData);

    if (action === "view") {
      if (rowData) {
        window.location.href = `/admin-manage-dokter/detail-akun-dokter/${rowData.id}`;
      }
    } else if (action === "deactivate") {
      setShowConfirmation(true);
    }
  };

  const confirmNonAktifkan = () => {
    // Lakukan tindakan untuk menonaktifkan akun
    setShowConfirmation(false);
    setShowSuccessModal(true); //menampilkan modal sukses setelah menonaktifkan akun
  };

  const cancelNonAktifkan = () => {
    // Batal menonaktifkan akun
    setShowConfirmation(false);
  };

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
      {/* <DataTable
        // value={data}
        value={filteredData} // Menggunakan data yang sudah disaring berdasarkan nilai pencarian
        className="p-datatable-sm"
        rowClassName="table-row-height"
        first={first}
        rows={rows}
        paginator // Mengaktifkan pagination
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        onPage={onPageChange}
        rowsPerPageOptions={[5, 10, 15]}
        totalRecords={data.length}
        // onSelect={navigation("/")}
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

        <Column
          body={(rowData) => (
            // <button
            //   className="border-0 bg-light fw-bold"
            //   onClick={() => handleActionClick(rowData)}
            // >
            //   ...
            // </button>

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
      </DataTable> */}
      {filteredData.length > 0 ? (
        <DataTable
          // value={data}
          value={filteredData} // Menggunakan data yang sudah disaring berdasarkan nilai pencarian
          className="p-datatable-sm"
          rowClassName="table-row-height"
          first={first}
          rows={rows}
          paginator // Mengaktifkan pagination
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          onPage={onPageChange}
          rowsPerPageOptions={[5, 10, 15]}
          totalRecords={data.length}
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
      ) : (
        <div className="text-center mt-4">
          <img
            src={searchFailed}
            className="img-search-failed"
            alt="No data found"
          />
          <h2 className="h2-search-failed">Tidak ada data user</h2>
          <p className="mt-2 search-failed-text">
            Maaf, saat ini belum ada data user yang tersedia. Ini bisa jadi
            karena belum ada user yang terdaftar atau data user sedang dimuat.
          </p>
        </div>
      )}

      {/* Modal untuk menampilkan detail akun atau nonaktifkan akun */}
      {/* <Dialog
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
      </Dialog> */}

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
            <div className="modal-header border-bottom-0">
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

      {/* Modal untuk menampilkan pesan sukses nonaktifkan akun */}
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
    </div>
  );
};

export default DokterTable;
