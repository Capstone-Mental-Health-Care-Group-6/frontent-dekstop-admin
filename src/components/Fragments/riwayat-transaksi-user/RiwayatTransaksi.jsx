import React, { useState, useEffect } from 'react'
import { BsDot } from 'react-icons/bs';

function RiwayatTransaksi({ image, name, date, status, paket }) {
    const [styleStatus, setStatus] = useState('');

    useEffect(() => {
        if (status === 'Failed') {
            setStatus('status-failed');
        } else if (status === 'Completed') {
            setStatus('status-completed');
        } else if (status === 'Pending') {
            setStatus('status-pending');
        } else {
            setStatus('');
        }
    }, []);
    return (
        <div className="row mb-4" >
            <div className="col-1 d-flex justify-content-center">
                <img src={image} alt="" />
            </div>
            <div className="col-11 d-grid">
                <div className="line-1 d-flex justify-content-between align-items-center">
                    <span>{name}</span>
                    <span>{date}</span>
                </div>
                <div className="line-2 d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                        <span>{paket}</span>
                        <span className="doctor" > <span> <BsDot /> </span> Dr. Richard lee</span>
                    </div>
                    <span className={styleStatus}>{status}</span>
                </div>
            </div>
        </div>
    )
}

export default RiwayatTransaksi