import React from 'react'
import "./DetailTransaksiUser.style.css";
import Layouts from '../../Layouts/Layouts'
import { useParams } from 'react-router-dom';
import ItemDataTransaksi from '../../components/Fragments/item-data-transaksi/ItemDataTransaksi';
import { detailDataTransaksi } from '../../components/DataComponents/dataComponents';
import { buktiTransfer } from '../../../image';
import Button from '../../components/Elements/button/Button';

function DetailTransaksiUser() {
    const id = useParams()
    console.log(id);
    return (
        <Layouts titlePage={'Detail Transaksi User'}>
            <section className='detail-transaksi' id='detail-transaksi' >
                <p className='routes' > <span> Transaksi / Transaksi Tertunda /</span> Detail Transaksi User</p>
                <div className="row  row-cols-lg-2 row-cols-1">
                    {detailDataTransaksi.map((item, index) => (
                        <div key={index} className="col  d-flex flex-column justify-content-between ">
                            <ItemDataTransaksi title={'Nama User'} text={item.name} />
                            <ItemDataTransaksi title={'Paket Konseling'} text={item.paket} />
                            <ItemDataTransaksi title={'Metode Pembayaran'} text={item.metode_pembayaran} />
                            <ItemDataTransaksi title={'Status Pembayaran'} text={item.status_pembayaran} />
                            <ItemDataTransaksi title={'ID Transaksi'} text={item.id_Transaksi} />
                            <ItemDataTransaksi title={'Harga'} text={item.harga} />
                            <ItemDataTransaksi title={'Nama Dokter'} text={item.nama_dokter} />
                            <ItemDataTransaksi title={'Durasi Konseling'} text={item.durasi_Konseling} />
                            <div className="button-pembayaran">
                                <div className="d-flex gap-2">
                                    <Button className='btn btn-primary w-100' text={'Terima Pembayaran '} />
                                    <Button className='btn text-primary border-primary w-100' text={'Tolak  Pembayaran'} />
                                </div>
                            </div>
                        </div>

                    ))}

                    <div className="col">
                        <p>Bukti Transfer : </p>
                        <div className="bukti-transfer">
                            <img src={buktiTransfer} alt="" />
                        </div>
                    </div>
                </div>

            </section>
        </Layouts>
    )
}

export default DetailTransaksiUser