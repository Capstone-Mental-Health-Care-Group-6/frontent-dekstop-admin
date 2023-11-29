import React from "react";
import Layouts from "../../Layouts/Layouts";
import { BsPlus, BsThreeDots } from "react-icons/bs";
import Card from '../../components/Fragments/card/Card'
import "./PaketKonseling.style.css";
import { konsultasiImage, logoEmpathiCareMobile } from "../../../image";

const PaketKonseling = () => {
  return (
    <Layouts titlePage={"Manage Dokter"}>
      <section className="paket-konseling" id="paket-konseling" >

        <section className="add-konseling mt-4">
          <div className="d-flex align-items-center justify-content-between p-4 rounded-3 bg-white">
            <h5 className="m-0" >Paket Konseling Premium</h5>
            <button className="d-flex btn align-items-center justify-content-center fw-semibold gap-1" >
              {<BsPlus />}Tambah Data
            </button>
          </div>

        </section  >

        <section className="all-konseling mt-4" >
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

            <div className="col">

              <div className="card bg-white border-white" >
                <div className="card-header border-0 bg-white">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className=" d-flex gap-3 align-items-center ">
                      <img src={konsultasiImage} />
                      <div>
                        <h6 className="m-0" >Paket Pekenalan</h6>
                        <h5 className="m-0 fw-bold" >Rp 100.000 / 1 Sesi</h5>
                      </div>
                    </div>
                    <button className="btn border-0" data-bs-toggle="dropdown">{<BsThreeDots />}</button>
                    <ul class="dropdown-menu px-1">
                      <li > <button className="btn w-100 fw-semibold mb-2"  > Edit </button> </li>
                      <li > <button className="btn w-100 fw-semibold "  > Hapus </button> </li>
                    </ul>
                  </div>
                </div>

                <div className="card-body">
                  <span>
                    Metode Chat, Call, Video Call, atau Zoom,
                    Jadwal bisa disesuaikan dengan kebutuhan,
                    Garansi Ganti Psikolog
                  </span>
                </div>
              </div>
            </div>
            <div className="col">

              <div className="card bg-white border-white" >
                <div className="card-header border-0 bg-white">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className=" d-flex gap-3 align-items-center ">
                      <img src={konsultasiImage} />
                      <div>
                        <h6 className="m-0" >Paket Pekenalan</h6>
                        <h5 className="m-0 fw-bold" >Rp 100.000 / 1 Sesi</h5>
                      </div>
                    </div>
                    <button className="btn border-0" data-bs-toggle="dropdown">{<BsThreeDots />}</button>
                    <ul class="dropdown-menu px-1">
                      <li > <button className="btn w-100 fw-semibold mb-2"  > Edit </button> </li>
                      <li > <button className="btn w-100 fw-semibold "  > Hapus </button> </li>
                    </ul>
                  </div>
                </div>

                <div className="card-body">
                  <span>
                    Metode Chat, Call, Video Call, atau Zoom,
                    Jadwal bisa disesuaikan dengan kebutuhan,
                    Garansi Ganti Psikolog
                  </span>
                </div>
              </div>
            </div>
            <div className="col">

              <div className="card bg-white border-white" >
                <div className="card-header border-0 bg-white">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className=" d-flex gap-3 align-items-center ">
                      <img src={konsultasiImage} />
                      <div>
                        <h6 className="m-0" >Paket Pekenalan</h6>
                        <h5 className="m-0 fw-bold" >Rp 100.000 / 1 Sesi</h5>
                      </div>
                    </div>
                    <button className="btn border-0" data-bs-toggle="dropdown">{<BsThreeDots />}</button>
                    <ul class="dropdown-menu px-1">
                      <li > <button className="btn w-100 fw-semibold mb-2"  > Edit </button> </li>
                      <li > <button className="btn w-100 fw-semibold "  > Hapus </button> </li>
                    </ul>
                  </div>
                </div>

                <div className="card-body">
                  <span>
                    Metode Chat, Call, Video Call, atau Zoom,
                    Jadwal bisa disesuaikan dengan kebutuhan,
                    Garansi Ganti Psikolog
                  </span>
                </div>
              </div>
            </div>


          </div>
        </section>

      </section>
    </Layouts>
  )
};

export default PaketKonseling;
