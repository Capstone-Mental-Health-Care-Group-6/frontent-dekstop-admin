import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./UserTable.style.css";
import { NonAktifkanAkun, DetailAkun, Success } from "../../../../image";
import { searchFailed } from "../../../../image";
import { updateStatusAkunPatient } from "../../../service/patient";

const UserTable = ({ data, searchValue, statusFilter }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [updatedUserData, setUpdatedUserData] = useState(null);
  const [selectedStatusMap, setSelectedStatusMap] = useState({});

  const [first, setFirst] = useState(0); // State untuk menangani index awal data yang ditampilkan
  const [rows, setRows] = useState(5); // State untuk menangani jumlah baris per halaman

  // Fungsi untuk melakukan pencarian berdasarkan nilai searchValue
  const filteredData = data.filter((user) => {
    // const isStatusMatch =
    //   (!statusFilter.aktif && !statusFilter.nonAktif) ||
    //   (statusFilter.aktif && user.status === "Active") ||
    //   (statusFilter.nonAktif && user.status === "Inactive");

    return (
      (user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.email.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.phone_number.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.status.toLowerCase().includes(searchValue.toLowerCase())) &&
      (statusFilter === "" || user.status === statusFilter)
    );
  });

  const displayedData = updatedUserData
    ? [...filteredData, updatedUserData]
    : filteredData;

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const userBodyTemplate = (rowData) => {
    return (
      <div className="d-flex align-items-center">
        <img
          src={rowData.avatar}
          alt={rowData.name}
          height="32px"
          className="me-2"
        />
        <span>{rowData.name}</span>
      </div>
    );
  };

  const statusBodyTemplate = (rowData) => {
    let statusClassName;

    const currentStatus = selectedStatusMap[rowData.id] || rowData.status;

    if (currentStatus === "Active") {
      statusClassName = "active-status";
    } else {
      statusClassName = "inactive-status";
    }

    return <span className={statusClassName}>{rowData.status}</span>;
  };

  const actionItems = [
    { icon: DetailAkun, label: "Lihat detail akun", action: "view" },
    { icon: NonAktifkanAkun, label: "Non aktifkan akun", action: "Inactive" },
  ];

  const handleActionSelection = (action, rowData) => {
    setSelectedUser(rowData);

    if (action === "view") {
      if (rowData) {
        window.location.href = `/admin/manage/user/detail/${rowData.ID}`;
      }
    } else if (action === "Inactive" && rowData.status === "Active") {
      setShowConfirmation(true);
    }
  };

  const confirmNonAktifkan = () => {
    // Lakukan tindakan untuk menonaktifkan akun
    setShowConfirmation(false);

    updateStatusAkunPatient(selectedUser.ID, "Inactive", () => {
      // Simpan data pengguna yang diperbarui ke state
      setUpdatedUserData({
        ...selectedUser,
        status: "Inactive",
      });
    });

    // Perbarui status di tabel langsung
    updateStatusInDataTable(selectedUser.ID, "Inactive");

    setShowSuccessModal(true); //menampilkan modal sukses setelah menonaktifkan akun
  };

  const updateStatusInDataTable = (id, newStatus) => {
    // Implementasi logika untuk memperbarui status di tabel data
    setSelectedStatusMap((prevMap) => ({
      ...prevMap,
      [id]: newStatus,
    }));
  };

  const cancelNonAktifkan = () => {
    // Batal menonaktifkan akun
    setShowConfirmation(false);
  };

  return (
    <div className="p-mt-4">
      {filteredData.length > 0 ? (
        <DataTable
          // value={data}
          value={displayedData} // Menggunakan data yang sudah disaring berdasarkan nilai pencarian
          className="p-datatable-sm"
          rowClassName="table-row-height"
          first={first}
          rows={rows}
          paginator // Mengaktifkan pagination
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          onPage={onPageChange}
          rowsPerPageOptions={[5, 10, 15]}
          totalRecords={filteredData.length}
        >
          <Column
            body={userBodyTemplate}
            header="Nama"
            headerClassName="table-header-border"
          />
          <Column
            field="email"
            header="Email"
            headerClassName="table-header-border"
          />
          <Column
            field="phone_number"
            header="No. Telp"
            headerClassName="table-header-border"
          />
          <Column
            field="status"
            header="Status Akun"
            body={statusBodyTemplate}
            headerClassName="table-header-border"
          />
          <Column
            body={(rowData) => (
              <div className="dropdown">
                <button
                  className="btn"
                  type="button"
                  id={`dropdownMenuButton-${rowData.ID}`}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="action-symbol fw-bold">...</span>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby={`dropdownMenuButton-${rowData.ID}`}
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

export default UserTable;
