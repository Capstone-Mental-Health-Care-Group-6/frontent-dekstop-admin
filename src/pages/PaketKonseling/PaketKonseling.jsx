import React from "react";
import Layouts from "../../Layouts/Layouts";
import { BsPencil, BsPlus, BsThreeDots } from "react-icons/bs";
import "./PaketKonseling.style.css";
import { alertMessageBlue, defaultImageKonseling, iconPencil } from "../../../image";
import { dataCardKonsultasi } from "../../components/DataComponents/dataComponents";
import ModalAlert from "../../components/Fragments/modal-alert/ModalAlert";
import Button from '../../components/Elements/button/Button'
import InputForm from "../../components/Fragments/inputForm/InputForm";
import { useState, useEffect } from "react";
import { createBundle, deleleBundle, getAllBundle, updateBundle } from "../../service/bundleCounseling";
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';


const PaketKonseling = () => {
  const [bundle, setBundle] = useState([])
  const [formData, setFormData] = useState({
    avatar: null,
    name: '',
    price: '',
    sessions: '',
    description: '',
    active_priode: '1',
    type: 'PREMIUM',
  })

  useEffect(() => {
    getAllBundle((res) => {
      setBundle(res.data)
    })
  }, []);

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
    setFormData({ ...formData, avatar: selectedImage })
  };

  const deleteState = () => {
    setFormData({
      avatar: null,
      name: '',
      price: '',
      sessions: '',
      description: '',
      active_priode: 1,
      type: 'PREMIUM',
    })
  }


  const formDataKeys = ['avatar', 'name', 'price', 'sessions', 'description', 'active_priode', 'type'];
  const apiData = new FormData();
  formDataKeys.forEach((key) => {
    const value = key === 'price' ? parseFloat(formData[key]) : key === 'sessions' || key === 'active_priode' ? parseInt(formData[key]) : formData[key];
    apiData.append(key, value);
  });

  const handleDelete = (id) => {
    deleleBundle(id)
    setBundle(bundle.filter((item) => item.id !== id))
  }


  const handleUpdateBundle = async (id) => {
    await updateBundle(id, apiData)
    deleteState()
    updateKonseling()
    getAllBundle((res) => {
      setBundle(res.data)
    })
  }

  const handleCreateBundle = async (e) => {
    e.preventDefault()
    await createBundle(apiData, (status, res) => {
      if (status) {
        console.log(res);
        deleteState()
        getAllBundle((res) => {
          setBundle(res.data)
        })
        addKonseling()
      } else {
        rejectKonseling()
      }
    })
  }
  const addKonseling = () => toast.success('Paket konseling berhasil di tambahkan ✨🚀', {
    duration: 4000,
    position: 'position="bottom-center',
    className: 'custom-toast-payment',

    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });
  const rejectKonseling = () => toast.error('Paket konseling gagal ditambah tolong periksa dan masukan data yang sesuai ', {
    duration: 5000,
    position: 'position="bottom-center',
    className: 'custom-toast-payment',

    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });

  const updateKonseling = () => toast.success('Paket konseling berhasil update ✨🚀', {
    duration: 4000,
    position: 'position="bottom-center',
    className: 'custom-toast-payment',

    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });



  console.log(formData);
  return (
    <Layouts titlePage={"Paket Konseling"}>
      <section className="paket-konseling position-relative" id="paket-konseling" >

        <section className="add-konseling mt-4">
          <div className="d-flex align-items-center justify-content-between p-4 rounded-3 bg-white flex-md-row flex-column">
            <h5 >Paket Konseling Premium</h5>
            <button className="btn-add d-flex btn align-items-center justify-content-center fw-semibold gap-1" data-bs-toggle="modal" data-bs-target="#modal-add" >
              {<BsPlus />}Tambah Data
            </button>
            <ModalAlert id={'modal-add'} >
              <div className="d-flex justify-content-between p-3 text-black fw-semibold">
                Paket Konseling Premium
                <Button className={'btn-close border-0 '} bsDismiss={'modal'} onClick={deleteState} />
              </div>

              <form className="p-3" >

                <div className="position-relative mx-auto">
                  <div className="image d-flex justify-content-center ">
                    {formData.avatar && formData.avatar instanceof Blob ? (
                      <img src={URL.createObjectURL(formData.avatar)} />
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

                <InputForm htmlFor={'name'} value={formData.name} title={'Nama Paket'} placeholder={'Masukan Nama'} onChange={handleChange} />
                <InputForm htmlFor={'price'} value={formData.price} type={'number'} title={'Harga'} placeholder={'Masukan Harga'} onChange={handleChange} />
                <InputForm htmlFor={'sessions'} value={formData.sessions} type={'number'} title={'Banyak Sesi'} placeholder={'Masukan Jumlah Sesi'} onChange={handleChange} />

                <label htmlFor="description" className="fw-semibold mt-2 mb-2" >Keterangan Paket</label>
                <div className="form-floating ">
                  <textarea
                    className="form-control p-2"
                    placeholder="Masukan Penjelasan Paket"
                    style={{ height: 200 }}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex gap-2 float-end">
                  <Button className={'btn'} text="Batal" bsTogle={'modal'} bsTarget={'#modal-batal-edit'} />
                  <Button className={'btn bg-primary text-white'} text="Simpan" type={'submit'} onClick={handleCreateBundle} bsDismiss={'modal'} />
                </div>
              </form>
            </ModalAlert>
          </div>
        </section  >

        <section className="all-konseling mt-4" >
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

            {bundle.map((item, index) => (
              <div className="col " key={index}>

                <div className="card bg-white " >
                  <div className="card-header border-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className=" d-flex gap-3 align-items-center ">
                        <img className="image-konsultasi" src={item.avatar} />
                        <div>
                          <h6 className="m-0 text-black fw-medium" >{item.name} </h6>
                          <h5 className="m-0 fw-bold">
                            {new Intl.NumberFormat('id-ID', {
                              style: 'currency',
                              currency: 'IDR',
                            }).format(item.price)} / {item.sessions} Sesi
                          </h5>
                        </div>
                      </div>
                      <button className="btn border-0" data-bs-toggle="dropdown">{<BsThreeDots />}</button>
                      <ul className="dropdown-menu px-1">
                        <li > <button className="btn w-100 fw-semibold mb-2" data-bs-toggle="modal" data-bs-target={`#modal-edit${item.id}`} onClick={() => setFormData(item)} > Edit </button> </li>
                        <li > <button className="btn w-100 fw-semibold " data-bs-toggle="modal" data-bs-target={`#alert-delete${item.id}`}  > Hapus </button> </li>
                      </ul>

                    </div>
                  </div>

                  <ModalAlert id={`modal-edit${item.id}`} >
                    <div className="d-flex justify-content-between p-3 text-black fw-semibold">
                      Edit Paket Konseling Premium
                      <Button className={'btn-close border-0 '} bsDismiss={'modal'} onClick={deleteState} />
                    </div>

                    <form onSubmit={handleSubmit} className="p-3">

                      <div className="position-relative mx-auto">
                        <div className="image d-flex justify-content-center ">
                          {formData.avatar && formData.avatar instanceof Blob ? (
                            <img src={URL.createObjectURL(formData.avatar)} />
                          ) : item.avatar ? (
                            <img src={item.avatar} alt="Avatar from API" />
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

                      <InputForm htmlFor={'name'} value={formData.name} title={'Nama Paket'} placeholder={'Masukan Nama'} onChange={handleChange} />
                      <InputForm htmlFor={'price'} value={formData.price} title={'Harga'} placeholder={'Masukan Harga'} onChange={handleChange} />
                      <InputForm htmlFor={'sessions'} value={formData.sessions} title={'Banyak Sesi'} placeholder={'Masukan Jumlah Sesi'} onChange={handleChange} />

                      <label htmlFor="description" className="fw-semibold mt-2 mb-2" >Keterangan Paket</label>
                      <div className="form-floating ">
                        <textarea
                          className="form-control p-2"
                          placeholder="Masukan Penjelasan Paket"
                          style={{ height: 200 }}
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="d-flex gap-2 float-end">
                        <Button className={'btn border-primary text-primary fw-medium'} text="Batal" bsTogle={'modal'} bsTarget={'#modal-batal-edit'} />
                        <Button className={'btn bg-primary text-white fw-medium'} text="Simpan" onClick={() => handleUpdateBundle(item.id)} bsDismiss={'modal'} />
                      </div>
                    </form>
                  </ModalAlert>

                  <ModalAlert id={`alert-delete${item.id}`} >
                    <div className="alert-modal-delete p-3">
                      <div className="d-flex flex-column justify-content-center align-items-center mb-3">
                        <img className='mb-4 mt-4' src={alertMessageBlue} alt="" />
                        <div className="text-center">
                          <h5 className="fw-bold" >Hapus Data Paket? </h5>
                          <span>Tindakan ini akan menghapus data pada paket konseling ini, data yang dihapus tidak dapat dikembalikan</span>
                        </div>
                      </div>
                      <div className="d-flex gap-2 justify-content-end">
                        <Button className={'btn bg-primary text-white fw-medium'} text="Batal" bsDismiss={'modal'} />
                        <Button className={'btn border-primary text-primary fw-medium'} text="Ya" bsDismiss={'modal'} onClick={() => handleDelete(item.id)} />
                      </div>
                    </div>
                  </ModalAlert>

                  <div className="card-body">
                    <span>
                      {item.description}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <ModalAlert id={'modal-batal-edit'} >
              <div className="alert-modal-batal-edit p-3">
                <div className="d-flex flex-column justify-content-center align-items-center mb-3">
                  <img className='mb-4 mt-4' src={alertMessageBlue} alt="" />
                  <div className="text-center">
                    <h5 className="fw-bold" >Batalkan Tambah Data?</h5>
                    <span>Tindakan ini akan membuat data yang Anda masukan menjadi tidak tersimpan</span>
                  </div>
                </div>

                <div className="d-flex gap-2 justify-content-end">
                  <Button className={'btn bg-primary text-white fw-medium'} text="Batal" bsTogle={'modal'} bsTarget={'#modal-edit'} />
                  <Button className={'btn  text-primary border-primary fw-medium'} bsDismiss={'modal'} text="Ya" onClick={deleteState} />
                </div>
              </div>
            </ModalAlert>

          </div>
        </section>
        <Toaster />
      </section>
    </Layouts>
  )
};

export default PaketKonseling;
