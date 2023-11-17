import React from 'react'
import "./DetailTransaksiUser.style.css";
import Layouts from '../../Layouts/Layouts'
import { useParams } from 'react-router-dom';

function DetailTransaksiUser() {
    const id = useParams()
    console.log(id);
    return (
        <Layouts titlePage={'Detail Transaksi User'}>

        </Layouts>
    )
}

export default DetailTransaksiUser