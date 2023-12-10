import React, { useEffect, useState } from "react";
import Layouts from "../../Layouts/Layouts";
import "./Dashboard.styles.css";
import {
  dashboardImg,
  iconCardUser,
  iconCardArtikel,
  iconCardDokter,
  paket1,
  paket2,
  iconCardTotalTransaksi,
} from "../../../image";
import Card from "../../components/Fragments/card/Card";
import PaketTeratas from "../../components/Fragments/paket-teratas/PaketTeratas";
import { useLogin } from "../../hooks/useLogin";
import { getAllPatient } from "../../service/patient";
import { getAllDoctor } from "../../service/doctor";
import { getAllArticle } from "../../service/article";
import { getAllWithDraw } from "../../service/withDraw";

const Dashboard = () => {
  const [totalUser, setTotalUser] = useState(null);

  const [totalDokter, setTotalDokter] = useState(null);

  const [totalArticle, setTotalArticle] = useState(null);

  const [totalTransaksi, setTotalTransaksi] = useState(null);

  useEffect(() => {
    getAllPatient((data) => {
      setTotalUser(data.data.total_user);
    });

    getAllDoctor((data) => {
      setTotalDokter(data.data.length);
    });

    getAllArticle((data) => {
      setTotalArticle(data.data.length);
    });

    getAllWithDraw((data) => {
      setTotalTransaksi(data.data.length);
    });
  }, []);

  return (
    <Layouts titlePage={"Dashboard"}>
      <div className="row">
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

      <div className="row d-flex flex-wrap my-3 ">
        {/* Kolom 1 - Total User dan Total Dokter */}
        <div className="col-lg-6 col-sm d-flex flex-column card__dashboard gap-3">
          <div className="d-flex gap-3">
            <Card
              cardSubtitle="Total User"
              cardTitle={totalUser !== null ? totalUser : "0"}
              src={iconCardUser}
            />
            <Card
              cardSubtitle="Total Dokter"
              cardTitle={totalDokter !== null ? totalDokter : "0"}
              src={iconCardDokter}
            />
          </div>
          <div className="d-flex gap-3">
            <Card
              cardSubtitle={"Total Artikel"}
              cardTitle={totalArticle !== null ? totalArticle : "0"}
              src={iconCardArtikel}
            />
            <Card
              cardSubtitle={"Total Transaksi"}
              cardTitle={totalTransaksi !== null ? totalTransaksi : "0"}
              src={iconCardTotalTransaksi}
            />
          </div>
        </div>

        {/* Kolom 2 - Paket Teratas */}
        <div className="col-lg-6 col-sm">
          <div className="paket-teratas h-100 d-flex flex-column justify-content-between p-4">
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
