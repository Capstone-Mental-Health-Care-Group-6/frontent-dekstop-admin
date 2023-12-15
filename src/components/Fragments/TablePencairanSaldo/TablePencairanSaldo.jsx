import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useState } from "react";
import { searchFailed } from "../../../../image";
import ModalDanaPencairan from "../modal/ModalDanaPencairan";
import { updateStatusWithDraw } from "../../../service/withDraw";

const TablePencairanSaldo = ({ data, searchValue }) => {
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [selectedStatusMap, setSelectedStatusMap] = useState({});

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const formattedDate = new Date(date).toLocaleDateString("id-ID", options);
    return formattedDate.replace(".", ""); // Menghapus titik setelah singkatan bulan
  };

  const filterData = data.filter((dokter) => {
    return dokter.doctor_name.toLowerCase().includes(searchValue.toLowerCase());
  });

  const statusOptions = [
    { label: "PENDING", value: "PENDING" },
    { label: "DONE", value: "DONE" },
  ];

  const handleStatusChange = (id, newStatus) => {
    setSelectedStatusMap((prevMap) => ({
      ...prevMap,
      [id]: newStatus,
    }));
    updateStatusWithDraw(id, { status: newStatus });
    updateStatusInDataTable(id, newStatus); // memperbarui status di tabel data
  };

  const updateStatusInDataTable = (id, newStatus) => {
    // Implementasi logika untuk memperbarui status di tabel data
    setSelectedStatusMap((prevMap) => ({
      ...prevMap,
      [id]: newStatus,
    }));
  };

  const userStatusTemplate = (rowData) => {
    const currentStatus = selectedStatusMap[rowData.id] || rowData.status;
    return (
      <div className="dropdown">
        <button
          className="btn"
          type="button"
          id={`dropdownMenuButton-${rowData.doctor_name}`}
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="fw-semibold">...</span>
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby={`dropdownMenuButton-${rowData.id}`}
        >
          {statusOptions.map((item, index) => (
            <li key={index}>
              <button
                className="dropdown-item"
                onClick={() => handleStatusChange(rowData.id, item.value)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const userBodyTemplate = (rowData) => {
    return (
      <div
        className="nama__dokter d-flex align-items-center"
        onClick={() => handleRowClick(rowData)}
      >
        <span>{rowData.doctor_name}</span>
      </div>
    );
  };

  const statusBodyTemplate = (rowData) => {
    let statusClassName;

    // Menggunakan selectedStatusMap jika ada, jika tidak, menggunakan rowData.status
    const currentStatus = selectedStatusMap[rowData.id] || rowData.status;

    if (currentStatus === "DONE") {
      statusClassName = "success-status";
    } else if (currentStatus === "PENDING") {
      statusClassName = "insuccess-status";
    }

    return <span className={statusClassName}>{currentStatus}</span>;
  };

  const setSelectedStatus = (id, status) => {
    setSelectedStatusMap((prevMap) => ({
      ...prevMap,
      [id]: status,
    }));
  };

  const handleRowClick = (rowData) => {
    setSelectedRowData(rowData);
    setIsModalVisible(true);
    setSelectedStatus(rowData.id, rowData.status); // Mengatur status awal saat menampilkan modal
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="table__pencairan__saldo">
      {filterData.length > 0 ? (
        <>
          <DataTable
            value={filterData}
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            className="p-datatable-sm"
            rowClassName="table-row-height"
          >
            <Column
              header="Nama Dokter"
              body={userBodyTemplate}
              headerClassName="table-header-border"
            />

            {/* <Column
              header="ID Transaksi"
              field="idtransaksi"
              headerClassName="table-header-border"
            /> */}
            <Column
              header="Date"
              field="date_confirmed"
              body={(rowData) =>
                <span>{formatDate(rowData.date_confirmed)}</span>}
              headerClassName="table-header-border"
            />
            <Column
              header="Saldo Cair"
              field="balance_req"
              headerClassName="table-header-border"
            />
            <Column
              header="Status"
              field="status"
              body={(rowData) =>
                statusBodyTemplate(rowData, handleStatusChange)
              }
              headerClassName="table-header-border"
            />
            <Column
              header="Action"
              field="action"
              body={userStatusTemplate}
              headerClassName="table-header-border"
            />
          </DataTable>

          {selectedRowData && (
            <ModalDanaPencairan
              visible={isModalVisible}
              onClose={handleModalClose}
              rowData={selectedRowData}
              selectedStatusMap={selectedStatusMap}
              updateStatusInDataTable={updateStatusInDataTable}
            />
          )}
        </>
      ) : (
        <div className="dana__dokter__kosong d-flex align-items-center justify-content-center flex-column">
          <img src={searchFailed} alt="img-pasien-kosong" />
          <h5 className="fw-semibold">Maaf, Pencarian tidak dapat ditemukan</h5>
        </div>
      )}
    </div>
  );
};

export default TablePencairanSaldo;
