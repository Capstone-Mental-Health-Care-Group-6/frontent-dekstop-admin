import React from "react";
import Layouts from "../../Layouts/Layouts";
import Card from "../../components/Fragments/card/Card";
import "./ManageDokter.styles.css";
import {
  iconCardUser,
  iconCardDokter,
  captivePortal,
  sandClock,
} from "../../../image";
import Search from "../../components/Elements/SearchManageUser/SearchManageUser";
import Filter from "../../components/Elements/FilterManageUser/FilterManageUser";
import DokterTable from "../../components/Fragments/dokterTable/DokterTable";
import { dataDokter } from "../../components/DataDokter/dataDokter";

const ManageDokter = () => {
  return (
    <>
      <Layouts titlePage={"Manage Dokter"}>
        <div className="cardDokter d-flex gap-2">
          <Card
            cardSubtitle="Total Dokter"
            cardTitle="17.000"
            src={iconCardUser}
          />

          <Card
            cardSubtitle="Dokter Baru"
            cardTitle="250"
            src={iconCardDokter}
          />

          <Card
            cardSubtitle="Dokter Aktif"
            cardTitle="5.000"
            src={captivePortal}
          />

          <Card
            cardSubtitle="Pengajuan Dokter"
            cardTitle="12"
            src={sandClock}
          />
        </div>

        <section className="data-user mt-3" id="data-user">
          <div className="card">
            <div className="card-body">
              <div className="row my-auto">
                <div className="col-8">
                  <h4>Data Dokter</h4>
                </div>
                <div className="col-md-2">
                  <Search size={20} placeholder={"Search"} />
                </div>
                <div className="col-md-2">
                  <Filter size={20} placeholder={"Filter"} />
                </div>
              </div>
              <DokterTable data={dataDokter} />
            </div>
          </div>
        </section>
      </Layouts>
    </>
  );
};

export default ManageDokter;
