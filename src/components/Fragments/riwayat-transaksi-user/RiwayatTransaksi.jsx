import React, { useState, useEffect } from 'react'
import { BsDot } from 'react-icons/bs';
import { patientProfile } from '../../../../image';

function RiwayatTransaksi({ image, name, date, status, paket, doctor }) {
    const [styleStatus, setStatus] = useState('');

    useEffect(() => {
        if (status === 'Failed') {
            setStatus('status-failed');
        } else if (status === 'Accept') {
            setStatus('status-completed');
        } else if (status === 'Pending') {
            setStatus('status-pending');
        } else {
            setStatus('');
        }
    }, [status]);
    return (
        <div className="row row-cols-md-1 row-cols-1  mb-4" >
            <div className="col col-lg-1 d-flex justify-content-center">
                {image ? <img src={image} alt="" /> : <img src={patientProfile} alt="asu" />}
            </div>
            <div className="col col-lg-11 d-grid">
                <div className="line-1 d-flex justify-content-between align-items-center">
                    <span>{name}</span>
                    <span>{date}</span>
                </div>
                <div className="line-2 d-flex justify-content-between align-items-center">
                    <div className="d-flex ">
                        <span>{paket}</span>
                        <span className="doctor" > <span className='circle' > <BsDot /> </span> {doctor}</span>
                    </div>
                    <span className={styleStatus}>{status}</span>
                </div>
            </div>
        </div>
    )
}

export default RiwayatTransaksi