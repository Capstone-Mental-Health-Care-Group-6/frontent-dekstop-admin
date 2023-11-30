import React from "react";
import Layouts from "../../Layouts/Layouts";
import { BsPencil, BsPlus, BsThreeDots } from "react-icons/bs";
import "./PaketKonseling.style.css";
import { defaultImageKonseling, iconPencil } from "../../../image";
import { dataCardKonsultasi } from "../../components/DataComponents/dataComponents";
import ModalAlert from "../../components/Fragments/modal-alert/ModalAlert";
import Button from '../../components/Elements/button/Button'
import InputForm from "../../components/Fragments/inputForm/InputForm";
import { useState } from "react";


const PaketKonseling = () => {

  const [formData, setFormData] = useState({
    image: null,
    nama_paket: '',
    harga: '',
    jumlah_sesi: '',
    keterangan_paket: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleFileManager = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setFormData({ ...formData, image: selectedImage })
  };

  const deleteState = () => {
    setFormData({
      image: null,
      nama_paket: '',
      harga: '',
      sesi: '',
      keterangan_paket: ''
    })
  }

  console.log(formData);

  return (
    <Layouts titlePage={"Manage Dokter"}>
      <section className="paket-konseling" id="paket-konseling" >

        <section className="add-konseling mt-4">
          <div className="d-flex align-items-center justify-content-between p-4 rounded-3 bg-white flex-md-row flex-column">
            <h5 >Paket Konseling Premium</h5>
            <button className="btn-add d-flex btn align-items-center justify-content-center fw-semibold gap-1" data-bs-toggle="modal" data-bs-target="#modal-add" >
              {<BsPlus />}Tambah Data
            </button>
            <ModalAlert id={'modal-add'} >
              <div className="d-flex justify-content-between p-3 text-black fw-semibold">
                Paket Konseling Premium
                <Button className={'btn-close border-0 '} bsDismiss={'modal'} />
              </div>

              <form onSubmit={handleSubmit} className="p-3">

                <div className="position-relative mx-auto">
                  <div className="image d-flex justify-content-center ">
                    {formData.image ? (
                      <img src={URL.createObjectURL(formData.image)} />
                    ) : (
                      <img src={defaultImageKonseling} />
                    )}
                    <input
                      type="file"
                      className="d-none"
                      id="imageInput"
                      onChange={handleImageChange}
                    />
                    <button className="btn border-0 position-absolute bottom-0 end-0" type="button" ><img src={iconPencil} onClick={handleFileManager} /></button>
                  </div>
                </div>

                <InputForm htmlFor={'nama_paket'} value={formData.nama_paket} title={'Nama Paket'} placeholder={'Masukan Nama'} onChange={handleChange} />
                <InputForm htmlFor={'harga'} value={formData.harga} title={'Harga'} placeholder={'Masukan Harga'} onChange={handleChange} />
                <InputForm htmlFor={'jumlah_sesi'} value={formData.jumlah_sesi} title={'Banyak Sesi'} placeholder={'Masukan Jumlah Sesi'} onChange={handleChange} />

                <label htmlFor="keterangan_paket" className="fw-semibold mt-2 mb-2" >Keterangan Paket</label>
                <div className="form-floating ">
                  <textarea
                    className="form-control"
                    placeholder="Masukan Penjelasan Paket"
                    style={{ height: 100 }}
                    name="keterangan_paket"
                    value={formData.keterangan_paket}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex gap-2 float-end">
                  <Button className={'btn'} text="Batal" />
                  <Button className={'btn bg-primary text-white'} text="Simpan" />
                </div>
              </form>
            </ModalAlert>
          </div>

        </section  >

        <section className="all-konseling mt-4" >
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

            {dataCardKonsultasi.map((item, index) => (
              <div className="col " key={index}>

                <div className="card bg-white " >
                  <div className="card-header border-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className=" d-flex gap-3 align-items-center ">
                        <img className="image-konsultasi" src={item.image} />
                        <div>
                          <h6 className="m-0" >{item.paket}</h6>
                          <h5 className="m-0 fw-bold" >{item.sesi}</h5>
                        </div>
                      </div>
                      <button className="btn border-0" data-bs-toggle="dropdown">{<BsThreeDots />}</button>
                      <ul className="dropdown-menu px-1">
                        <li > <button className="btn w-100 fw-semibold mb-2" data-bs-toggle="modal" data-bs-target="#modal-edit" > Edit </button> </li>
                        <li > <button className="btn w-100 fw-semibold " > Hapus </button> </li>
                      </ul>

                    </div>
                  </div>

                  <ModalAlert id={'modal-edit'} >
                    <div className="d-flex justify-content-between p-3 text-black fw-semibold">
                      Paket Konseling Premium
                      <Button className={'btn-close border-0 '} bsDismiss={'modal'} />
                    </div>

                    <form onSubmit={handleSubmit} className="p-3">

                      <div className="position-relative mx-auto">
                        <div className="image d-flex justify-content-center ">
                          {formData.image ? (
                            <img src={URL.createObjectURL(formData.image)} />
                          ) : (
                            <img src={defaultImageKonseling} />
                          )}
                          <input
                            type="file"
                            className="d-none"
                            id="imageInput"
                            onChange={handleImageChange}
                          />
                          <button className="btn border-0 position-absolute bottom-0 end-0" type="button" ><img src={iconPencil} onClick={handleFileManager} /></button>
                        </div>
                      </div>

                      <InputForm htmlFor={'nama_paket'} value={formData.nama_paket} title={'Nama Paket'} placeholder={'Masukan Nama'} onChange={handleChange} />
                      <InputForm htmlFor={'harga'} value={formData.harga} title={'Harga'} placeholder={'Masukan Harga'} onChange={handleChange} />
                      <InputForm htmlFor={'jumlah_sesi'} value={formData.jumlah_sesi} title={'Banyak Sesi'} placeholder={'Masukan Jumlah Sesi'} onChange={handleChange} />

                      <label htmlFor="keterangan_paket" className="fw-semibold mt-2 mb-2" >Keterangan Paket</label>
                      <div className="form-floating ">
                        <textarea
                          className="form-control"
                          placeholder="Masukan Penjelasan Paket"
                          style={{ height: 100 }}
                          name="keterangan_paket"
                          value={formData.keterangan_paket}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="d-flex gap-2 float-end">
                        <Button className={'btn'} text="Batal" />
                        <Button className={'btn bg-primary text-white'} text="Simpan" />
                      </div>
                    </form>
                  </ModalAlert>

                  <div className="card-body">
                    <span>
                      {item.information}
                    </span>
                  </div>
                </div>
              </div>
            ))}


          </div>
        </section>

      </section>
    </Layouts>
  )
};

export default PaketKonseling;
