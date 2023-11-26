import React from 'react'
import Layouts from '../../Layouts/Layouts'
import { useParams } from 'react-router-dom'
import "./TransaksiOtomatis.styles.css"
import ItemDataTransaksi from '../../components/Fragments/item-data-transaksi/ItemDataTransaksi'
import { detailDataTransaksi } from '../../components/DataComponents/dataComponents'

function TransaksiOtomatis() {
    const id = useParams()
    console.log(id)
    return (
        <Layouts titlePage={"Transaksi Tertunda"} >
            <section className='transaksi-otomatis' id='transaksi-otomatis' >
                <p className="routes"> <span>Transaksi</span> / Transaksi Tertunda  </p>
                {detailDataTransaksi.map((item, index) => (
                    <div key={index} className="row row-cols-1 row-cols-md-2 detail-wrapper">
                        <div className="col">
                            <ItemDataTransaksi title={'Nama User'} text={item.name} />
                            <ItemDataTransaksi title={'Paket Konseling'} text={item.paket} />
                            <ItemDataTransaksi title={'Metode Pembayaran'} text={item.metode_pembayaran} />
                            <ItemDataTransaksi title={'Status Pembayaran'} text={item.status_pembayaran} />
                            <ItemDataTransaksi title={'ID Transaksi'} text={item.id_Transaksi} />
                            <ItemDataTransaksi title={'Harga'} text={item.harga} />
                        </div>
                        <div className="col">
                            <ItemDataTransaksi title={'Nama Dokter'} text={item.nama_dokter} />
                            <ItemDataTransaksi title={'Durasi Konseling'} text={item.durasi_Konseling} />
                        </div>
                    </div>
                ))}

            </section>
        </Layouts>
    )
}

export default TransaksiOtomatis