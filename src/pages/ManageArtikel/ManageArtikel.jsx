import React, { useState } from "react";
import Layouts from "../../Layouts/Layouts";
import { LuFilter } from "react-icons/lu";
import {
  iconArtikelAdmin,
  pendingArtikelAdmin,
  tambahArtikelAdmin,
} from "../../../image";
import Card from "../../components/Fragments/card/Card";
import "./ManageArtikel.style.css";
import Table from "../../components/Fragments/tabel/Table";
import ColumnTable from "../../components/Elements/columnTable/ColumnTable";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { dataArtikel } from "./dataArtikel";
import Search from "../../components/Elements/search/Search";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import FilterList from "../../components/Fragments/filter-list/FilterList";

const ManageArtikel = () => {
  const [artikel, setArtikel] = useState(dataArtikel);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  // template untuk tiap body didalam table
  const authorBodyTemplate = (rowData) => {
    return (
      <div className="d-flex align-items-center">
        <img src={rowData.image} alt={rowData.author} className="me-2" />
        <span className="author-text-template">{rowData.author}</span>
      </div>
    );
  };

  const kategoriBodyTemplate = (rowData) => {
    return rowData.kategori.map((item, index) => (
      <div key={index} className="d-inline-block">
        <div className="kategori-div-template">
          <p className="kategori-text-template">{item}</p>
        </div>
      </div>
    ));
  };

  const tanggalBodyTemplate = (rowData) => {
    return <span className="tanggal-text-template">{rowData.tanggal}</span>;
  };

  const judulBodyTemplate = (rowData) => {
    return <span className="judul-text-template">{rowData.judul}</span>;
  };

  return (
    <Layouts titlePage={"Manage Artikel"}>
      <div className="row my-4">
        <div className="col">
          <Card
            src={iconArtikelAdmin}
            cardTitle="17000"
            cardSubtitle="Total Artikel"
          />
        </div>
        <div className="col">
          <Card
            src={tambahArtikelAdmin}
            cardSubtitle="Artikel Baru"
            cardTitle="250"
          />
        </div>
        <div className="col">
          <Card
            src={pendingArtikelAdmin}
            cardSubtitle="Pengajuan Artikel"
            cardTitle="12"
          />
        </div>
        <div></div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="search-group d-flex justify-content-end my-2 align-items-start">
              <Search
                size={20}
                placeholder={"Search"}
              />
            <div className="btn-group mx-5  align-items-start">
              <button
                type="button"
                className="btn border-secondary-subtle dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <LuFilter />
                <span> Filter </span>
              </button>
              <ul className="dropdown-menu">
                <div className="d-flex justify-content-between fw-semibold p-3">
                  <span>Filter</span>
                  <span className="text-primary">Reset</span>
                </div>
                <span className="p-3 fw-medium">Waktu transaksi : </span>
                <FilterList title={"Publikasi Terbaru"} type={"radio"} />
                <FilterList title={"7 Hari Terakhir"} type={"radio"} />
                <FilterList title={"30 Hari Terakhir"} type={"radio"} />
                <FilterList title={"Semua Tanggal"} type={"radio"} />
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <span className="p-3 fw-medium">Kategori : </span>
                <FilterList title={"Anxiety"} type={"checkbox"} />
                <FilterList title={"Depresi"} type={"checkbox"} />
                <FilterList title={"Emosi"} type={"checkbox"} />
                <FilterList title={"Kecemasan"} type={"checkbox"} />
                <FilterList title={"Stress"} type={"checkbox"} />
                <FilterList title={"Tips"} type={"checkbox"} />
                <FilterList title={"Umum"} type={"checkbox"} />
              </ul>
            </div>
          </div>
          <div className="p-mt-4">
            <Table
              value={artikel}
              selectionMode="single"
              dataKey="id"
              selection={selected}
              onRowSelect={(selected) => {
                // console.log(selected.data.id)
                navigate(`/admin-manage-artikel/${selected.data.id}`);
              }}
              onSelectionChange={(e) => setSelected(e.value)}
            >
              <ColumnTable
                field="judul"
                body={judulBodyTemplate}
                header="Judul"
                headerClassName="table-header-border-judul"
              />
              <ColumnTable
                field="author"
                body={authorBodyTemplate}
                header="Author"
                headerClassName="table-header-border-author"
              />
              <ColumnTable
                field="kategori"
                body={kategoriBodyTemplate}
                header="Kategori"
                headerClassName="table-header-border-kategori"
              />
              <ColumnTable
                field="tanggal"
                body={tanggalBodyTemplate}
                header="Tanggal"
                headerClassName="table-header-border-tanggal"
              />
            </Table>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default ManageArtikel;
