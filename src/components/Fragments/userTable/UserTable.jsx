import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import './UserTable.style.css';
import { NonAktifkanAkun, DetailAkun, Success } from '../../../../image';
import { Link } from 'react-router-dom';

const UserTable = ({ data }) => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [displayModal, setDisplayModal] = useState(false);
    const [selectedAction, setSelectedAction] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);


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

    const handleActionClick = (rowData) => {
        setSelectedUser(rowData);
        setDisplayModal(true);
    };

    const handleActionSelection = (action) => {
        setSelectedAction(action);
        setDisplayModal(false);

        if (action === 'Lihat detail akun') {
            // Action ketika lihat detail akun
            window.location.href = '/admin-manage-user/detail-akun-user';
        } else if (action === 'Non aktifkan akun') {
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
            <button onClick={() => handleActionSelection('Lihat detail akun')} className="p-button p-button-text border-0 mb-2 ms-2 mt-2">
                <img src={DetailAkun} alt="Detail Akun" className='me-2' /> Lihat detail akun
            </button>
            <br />
            <button onClick={() => handleActionSelection('Non aktifkan akun')} className="p-button p-button-text border-0 mb-2 ms-2">
                <img src={NonAktifkanAkun} alt="Non Aktifkan Akun" className='me-2' /> Non aktifkan akun
            </button>
        </div>
    );

    return (
        <div className="p-mt-4">
            <DataTable value={data} className="p-datatable-sm" rowClassName="table-row-height">
                <Column body={userBodyTemplate} header="Nama" headerClassName="table-header-border" />
                <Column field="email" header="Email" headerClassName="table-header-border" />
                <Column field="telephone" header="No. Telp" headerClassName="table-header-border" />
                <Column field="statusAkun" header="Status Akun" body={statusBodyTemplate} headerClassName="table-header-border" />
                <Column body={(rowData) =>
                    <button
                        className="border-0 bg-light fw-bold"
                        onClick={() => handleActionClick(rowData)}>...</button>
                } header="Action" headerClassName="table-header-border" />

            </DataTable>

            {/* Modal untuk menampilkan detail akun atau nonaktifkan akun */}
            <Dialog
                visible={displayModal}
                onHide={() => setDisplayModal(false)} footer={dialogFooter} modal>
                {selectedUser && (
                    <div>
                        <p></p>
                    </div>
                )}
            </Dialog>

            {/* Modal konfirmasi nonaktifkan akun */}
            <div className={`modal ${showConfirmation ? 'show' : ''}`} style={{ display: showConfirmation ? 'block' : 'none' }} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">Yakin ingin menonaktifkan akun ini?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowConfirmation(false)}></button>
                        </div>
                        <div className="modal-body">
                            <p className='fs-6'>Akun ini tidak dapat melakukan segala aktifitas jika dinonaktfkan</p>
                        </div>
                        <div className="modal-footer border-top-0">
                            <button type="button" className="btn text-primary" data-bs-dismiss="modal" onClick={cancelNonAktifkan}>Batal</button>
                            <button type="button" className="btn btn-primary" onClick={confirmNonAktifkan}>Yakin</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal untuk menampilkan pesan sukses nonaktifkan akun */}
            <div className={`modal ${showSuccessModal ? 'show' : ''}`} style={{ display: showSuccessModal ? 'block' : 'none' }} id="successModal" tabIndex="-1" aria-labelledby="successModalLabel" aria-hidden="true">
                <div className="modal-dialog fixed-bottom fixed-left modal-success">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="successModalLabel">
                                <img src={Success} alt="" className='me-2' />
                                Akun Berhasil dinonaktifkan</h5>
                            <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowSuccessModal(false)}></button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default UserTable;
