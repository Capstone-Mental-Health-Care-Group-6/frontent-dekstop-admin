import React from "react";
import Layouts from "../../Layouts/Layouts";
import "./Dashboard.styles.css";
import {
  dashboardImg,
  iconCardUser,
  iconCardArtikel,
  iconCardDokter,
  iconInstan,
  iconPremium,
} from "../../../image";
import Card from "../../components/Fragments/card/Card";

const Dashboard = () => {
  return (
    <Layouts titlePage={"Dashboard"}>
      <div className="row">
        <div className="col-12">
          <div className="wrapper__card">
            <div className="row d-flex align-items-center">
              <div className="col-6">
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
        <div className="col-6 d-flex flex-column gap-3">
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

          <div className="wrapper__artikel">
            <div className="card-body">
              <img src={iconCardArtikel} alt="icon-artikel" />
              <h6 className="card-subtitle mb-2 text-body-secondary fw-normal">
                Total Artikel
              </h6>
              <h5 className="card-title">17.000</h5>
            </div>
          </div>
        </div>

        {/* Kolom 2 - Paket Teratas */}
        <div className="col-6">
          <div className="wrapper__paketKonseling ">
            <h5 className="fw-bold mb-4">Paket Teratas</h5>

            <div className="konseling__instant">
              <div className="body__konseling d-flex align-items-center">
                <img src={iconInstan} alt="" />
                <p className="fw-semibold ms-3">Paket Konseling</p>
              </div>
            </div>

            <div className="konseling__premium mt-3">
              <div className="body__konseling d-flex align-items-center">
                <img src={iconPremium} alt="" />
                <p className="fw-semibold ms-3">Paket Konseling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Dashboard;
