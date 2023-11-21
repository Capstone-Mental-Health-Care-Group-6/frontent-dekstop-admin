import React, { useState } from 'react'
import "./DetailTransaksiUser.style.css";
import Layouts from '../../Layouts/Layouts'
import { useParams } from 'react-router-dom';
import ItemDataTransaksi from '../../components/Fragments/item-data-transaksi/ItemDataTransaksi';
import { detailDataTransaksi } from '../../components/DataComponents/dataComponents';
import { alertMessageBlue, buktiTransfer } from '../../../image';
import Button from '../../components/Elements/button/Button';
import { PhotoSwipe } from 'react-photoswipe';
import 'react-photoswipe/lib/photoswipe.css';
import ModalAlert from '../../components/Fragments/modal-alert/ModalAlert';


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

    const [selectedButton, setSelectedButton] = useState(null);
    const [modalTextArea, setModalTextArea] = useState('d-none');


    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId);
        if (buttonId === 4) {
            setModalTextArea('d-block')
        } else {
            setModalTextArea('d-none')
        }
    };



    return (
        <Layouts titlePage={'Detail Transaksi User'}>
            <section className='detail-transaksi' id='detail-transaksi' >
                <p className='routes' > <span> Transaksi / Transaksi Tertunda /</span> Detail Transaksi User</p>

                {detailDataTransaksi.map((item, index) => (
                    <div key={index} className="row detail-wrapper row-cols-lg-2 row-cols-1">
                        <div className="col d-flex flex-column justify-content-between ">
                            <ItemDataTransaksi title={'Nama User'} text={item.name} />
                            <ItemDataTransaksi title={'Paket Konseling'} text={item.paket} />
                            <ItemDataTransaksi title={'Metode Pembayaran'} text={item.metode_pembayaran} />
                            <ItemDataTransaksi title={'Status Pembayaran'} text={item.status_pembayaran} />
                            <ItemDataTransaksi title={'ID Transaksi'} text={item.id_Transaksi} />
                            <ItemDataTransaksi title={'Harga'} text={item.harga} />
                            <ItemDataTransaksi title={'Nama Dokter'} text={item.nama_dokter} />
                            <ItemDataTransaksi title={'Durasi Konseling'} text={item.durasi_Konseling} />
                            <div className="button-pembayaran">
                                <div className="d-flex flex-md-row flex-column  gap-2">
                                    <Button className='btn btn-primary w-100 fw-medium' text={'Terima Pembayaran '} />
                                    <Button className='btn text-primary border-primary w-100 fw-medium' bsTogle={'modal'} bsTarget={'#modal-reject-payment'} text={'Tolak  Pembayaran'} />
                                </div>
                            </div>

                            <ModalAlert id={'modal-reject-payment'}>
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <div className="alert-modal-transaksi text-center mb-4">
                                            <img className='mb-4 mt-4' src={alertMessageBlue} alt="" />
                                            <h5>Apakah kamu yakin ingin Tolak pembayaran User ?
                                                beri alasan yang akan diberikan ke User</h5>
                                        </div>
                                        <div className="row d-flex row-cols-lg-2 row-cols-1  ">
                                            <div className="col d-flex justify-content-center mb-2">
                                                <Button
                                                    className={` ${selectedButton === 1 ? 'changeColorButton  fw-medium ' : 'btn border-secondary-subtle text-black fw-medium'}`}
                                                    text={'Foto bukti pembayaran tidak jelas'}
                                                    onClick={() => handleButtonClick(1)}
                                                />
                                            </div>
                                            <div className="col d-flex justify-content-lg-start justify-content-center mb-2">
                                                <Button
                                                    className={` ${selectedButton === 2 ? 'changeColorButton  fw-medium' : 'btn border-secondary-subtle text-black fw-medium'}`}
                                                    text={'Foto bukti pembayaran tidak jelas'}
                                                    onClick={() => handleButtonClick(2)}
                                                />
                                            </div>
                                            <div className="col d-flex order-last justify-content-center mb-2">
                                                <Button
                                                    className={` ${selectedButton === 3 ? 'changeColorButton  fw-medium ' : 'btn border-secondary-subtle text-black fw-medium'}`}
                                                    text={'Foto bukti pembayaran tidak jelas'}
                                                    onClick={() => handleButtonClick(3)}
                                                />
                                            </div>
                                            <div className="col d-flex order-last justify-content-lg-start justify-content-center mb-2">
                                                <Button
                                                    className={` ${selectedButton === 4 ? 'changeColorButton  fw-medium ' : 'btn border-secondary-subtle text-black fw-medium'}`}
                                                    text={'Alasan Lain'}
                                                    onClick={() => handleButtonClick(4)}
                                                />
                                            </div>

                                        </div>
                                        <div className={`form-floating mt-3 ${modalTextArea}`}>
                                            <h5 className='text-black'>Tuliskan alasan Penolakan</h5>
                                            <textarea style={{ minHeight: '10vh' }}
                                                className="form-control w-100"
                                                id="floatingTextarea2"
                                            />
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-end me-3 gap-3 mb-3">
                                        <button type="button" className="btn border-secondary-subtle" data-bs-dismiss="modal">Batal</button>
                                        <button type="button" className={`btn ${selectedButton > 0 ? 'btn-primary' : 'btn-secondary'}`}>Tolak Pembayaran</button>
                                    </div>
                                </div>
                            </ModalAlert>



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
                                    options={{ bgOpacity: 0.7, }}
                                    onClose={handleClose}
                                />
                            </div>
                        </div>
                    </div>
                ))}




            </section>
        </Layouts >
    )
}

export default DetailTransaksiUser