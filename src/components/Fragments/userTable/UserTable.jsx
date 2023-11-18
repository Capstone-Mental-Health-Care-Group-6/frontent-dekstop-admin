import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './UserTable.style.css';

const UserTable = ({ data }) => {
    const userBodyTemplate = (rowData) => {
        return (
            <div className="d-flex align-items-center">
                <img src={rowData.image} alt={rowData.userName} height="32px" className="me-2" />
                <span>{rowData.userName}</span>
            </div>
        );
    };

    const statusBodyTemplate = (rowData) => {
        const statusClassName = rowData.statusAkun === 'Aktif' ? 'active-status' : 'inactive-status';
        return <span className={statusClassName}>{rowData.statusAkun}</span>;
    };

    const actionBodyTemplate = (rowData) => {
        return <span>{rowData.action}</span>;
    };

    return (
        <div className="p-mt-4">
            <DataTable value={data} className="p-datatable-sm" rowClassName="table-row-height">
                <Column body={userBodyTemplate} header="Nama" headerClassName="table-header-border" />
                <Column field="email" header="Email" headerClassName="table-header-border" />
                <Column field="telephone" header="No. Telp" headerClassName="table-header-border" />
                <Column field="statusAkun" header="Status Akun" body={statusBodyTemplate} headerClassName="table-header-border" />
                <Column body={actionBodyTemplate} header="Action" headerClassName="table-header-border" />
            </DataTable>
        </div>
    );
};

export default UserTable;
