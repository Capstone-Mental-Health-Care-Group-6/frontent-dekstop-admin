import React from "react";
import Layouts from "../../Layouts/Layouts";
import Table from "../../components/Fragments/dataTable/TableData";
import Card from "../../components/Fragments/card/Card";
import { iconArtikelAdmin, pendingArtikelAdmin, tambahArtikelAdmin } from "../../../image";
import "./ManageArtikel.style.css"

const ManageArtikel = () => {
  return (
    <Layouts titlePage={"Manage artikel"}>
      <div>
        <div className="row my-4">
          <div className="col">
          <Card src={iconArtikelAdmin} cardTitle="17000" cardSubtitle="Total Artikel" />
          </div>
          <div className="col">
          <Card src={tambahArtikelAdmin} cardSubtitle="Artikel Baru" cardTitle="250"/>
          </div>
          <div className="col">
          <Card src={pendingArtikelAdmin } cardSubtitle="Pengajuan Artikel" cardTitle="12" />
          </div>
        </div>
      </div>
      <div>
        <Table />
      </div>
    </Layouts>
  );
};

export default ManageArtikel;
