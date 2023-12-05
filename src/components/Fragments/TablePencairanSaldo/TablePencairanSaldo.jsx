import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useState } from "react";
import { searchFailed } from "../../../../image";
import ModalDanaPencairan from "../modal/ModalDanaPencairan";

const TablePencairanSaldo = ({ data, searchValue }) => {
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const filterData = data.filter((dokter) => {
    return dokter.nama_dokter.toLowerCase().includes(searchValue.toLowerCase());
  });

  const statusOptions = [
    { label: "Pending", value: "Pending" },
    { label: "Proses", value: "Proses" },
    { label: "Sukses", value: "Sukses" },
  ];

  // const handleStatusChange = (e) => {
  //   setSelectedStatus(e.value);
  // };

  const userStatusTemplate = (rowData) => {
    return (
      <div className="dropdown">
        <button
          className="btn"
          type="button"
          id={`dropdownMenuButton-${rowData.nama_dokter}`}
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
              <button className="dropdown-item">{item.label}</button>
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
        <span>{rowData.nama_dokter}</span>
      </div>
    );
  };

  const statusBodyTemplate = (rowData) => {
    let statusClassName;

    if (rowData.status === "Sukses") {
      statusClassName = "success-status";
    } else if (rowData.status === "Proses") {
      statusClassName = "process-status";
    } else {
      statusClassName = "insuccess-status";
    }

    return <span className={statusClassName}>{rowData.status}</span>;
  };

  const handleRowClick = (rowData) => {
    setSelectedRowData(rowData);
    setIsModalVisible(true);
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

            <Column
              header="ID Transaksi"
              field="idtransaksi"
              headerClassName="table-header-border"
            />
            <Column
              header="Date"
              field="date"
              headerClassName="table-header-border"
            />
            <Column
              header="Saldo Cair"
              field="saldoCair"
              headerClassName="table-header-border"
            />
            <Column
              header="Status"
              field="status"
              body={statusBodyTemplate}
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
