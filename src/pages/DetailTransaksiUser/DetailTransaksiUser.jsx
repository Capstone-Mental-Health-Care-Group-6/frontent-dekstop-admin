import React, { useState } from 'react'
import "./DetailTransaksiUser.style.css";
import Layouts from '../../Layouts/Layouts'
import { useParams } from 'react-router-dom';
import ItemDataTransaksi from '../../components/Fragments/item-data-transaksi/ItemDataTransaksi';
import { detailDataTransaksi } from '../../components/DataComponents/dataComponents';
import { buktiTransfer } from '../../../image';
import Button from '../../components/Elements/button/Button';
import { PhotoSwipe } from 'react-photoswipe';
import 'react-photoswipe/lib/photoswipe.css';


function DetailTransaksiUser() {
    const id = useParams()
    console.log(id);

    const [isOpen, setIsOpen] = useState(false);

    const openPhotoSwipe = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <Layouts titlePage={'Detail Transaksi User'}>
            <section className='detail-transaksi' id='detail-transaksi' >
                <p className='routes' > <span> Transaksi / Transaksi Tertunda /</span> Detail Transaksi User</p>

                {detailDataTransaksi.map((item, index) => (
                    <div key={index} className="row  row-cols-lg-2 row-cols-1">
                        <div className="col  d-flex flex-column justify-content-between ">
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

                        <div className="col">
                            <p>Bukti Transfer : </p>
                            <div className="bukti-transfer">
                                <img
                                    src={item.buktiTransfer}
                                    onClick={() => openPhotoSwipe()}
                                />

                                <PhotoSwipe
                                    isOpen={isOpen}
                                    items={[{ w: 500, h: 500, src: item.buktiTransfer }]}
                                    options={{ bgOpacity: 0.7 }}
                                    onClose={handleClose}
                                />
                            </div>
                        </div>
                    </div>
                ))}




            </section>
        </Layouts>
    )
}

export default DetailTransaksiUser