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

  const [image, setImage] = useState(null);
  console.log(image);
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleFileManager = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

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
                    {image ? (
                      <img src={URL.createObjectURL(image)} />
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

                <InputForm title={'Nama Paket'} placeholder={'Masukan Nama'} />
                <InputForm title={'Harga'} placeholder={'Masukan Harga'} />
                <InputForm title={'Banyak Sesi'} placeholder={'Masukan Jumlah Sesi'} />
                <div className="form-floating mt-2 mb-2">
                  <span className="fw-semibold " >Keterangan Paket</span>
                  <textarea
                    className="form-control"
                    placeholder="Masukan Penjelasan Paket"
                    style={{ height: 100 }}
                    defaultValue={""}
                  />
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
                        <img src={item.image} />
                        <div>
                          <h6 className="m-0" >{item.paket}</h6>
                          <h5 className="m-0 fw-bold" >{item.sesi}</h5>
                        </div>
                      </div>
                      <button className="btn border-0" data-bs-toggle="dropdown">{<BsThreeDots />}</button>
                      <ul className="dropdown-menu px-1">
                        <li > <button className="btn w-100 fw-semibold mb-2"  > Edit </button> </li>
                        <li > <button className="btn w-100 fw-semibold "  > Hapus </button> </li>
                      </ul>
                    </div>
                  </div>

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
