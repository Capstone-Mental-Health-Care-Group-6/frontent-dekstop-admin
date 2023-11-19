import React from "react";
import Layouts from "../../Layouts/Layouts";
import "./Dashboard.styles.css";
import {
  dashboardImg,
  iconCardUser,
  iconCardArtikel,
  iconCardDokter,
  paket1,
  paket2,
} from "../../../image";
import Card from "../../components/Fragments/card/Card";
import PaketTeratas from "../../components/Fragments/paket-teratas/PaketTeratas";

const Dashboard = () => {
  return (
    <Layouts titlePage={"Dashboard"}>
      <div className="row mt-3">
        <div className="col-lg-12 col-md">
          <div className="wrapper__card">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 col-md">
                <h4 className="fw-semibold text__title mb-4">
                  Selamat Datang Kembali,Admin!
                </h4>
                <p className="text__subtitle">
                  Senang melihat Anda kembali. Mari kita mulai hari ini dengan
                  mengelola situs ini.
                </p>
              </div>
              <div className="col-6">
                <img src={dashboardImg} alt="img-dashboard" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        {/* Kolom 1 - Total User dan Total Dokter */}
        <div className="col-lg-6 col-sm d-flex flex-column card__dashboard gap-3">
          <div className="d-flex gap-3">
            <Card
              cardSubtitle="Total User"
              cardTitle="17.000"
              src={iconCardUser}
            />
            <Card
              cardSubtitle="Total Dokter"
              cardTitle="17.000"
              src={iconCardDokter}
            />
          </div>

          <div className="card__artikel">
            <div className="card__body__artikel">
              <img src={iconCardArtikel} alt="icon-artikel" />
              <h6 className="card__subtitle__artikel mb-2 fw-normal">
                Total Artikel
              </h6>
              <h5 className="">17.000</h5>
            </div>
          </div>
        </div>

        {/* Kolom 2 - Paket Teratas */}
        <div className="col-lg-6 col-sm">
          <div className="paket-teratas p-4">
            <h4>Paket Teratas</h4>
            <PaketTeratas
              className={"paket-1 d-flex gap-2 align-items-center"}
              title={"Paket Konseling"}
              text={"Instant"}
              image={paket1}
            />
            <PaketTeratas
              className={"paket-2 d-flex gap-2 align-items-center"}
              title={"Paket Konseling"}
              text={"Premium"}
              image={paket2}
            />
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Dashboard;
