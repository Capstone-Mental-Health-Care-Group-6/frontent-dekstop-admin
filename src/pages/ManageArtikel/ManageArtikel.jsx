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
import { dataArtikel } from "./dataArtikel";
import Search from "../../components/Elements/search/Search";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import FilterList from "../../components/Fragments/filter-list/FilterList";
import { FilterMatchMode } from "primereact/api";
import Input from "../../components/Elements/input/Input";

const ManageArtikel = () => {
  const [artikel, setArtikel] = useState(dataArtikel);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    judul: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    author: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });

  // buat search
  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className="d-flex justify-content-end ">
        <span className="p-input-icon-left">
          <Input
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Search"
          />
        </span>
        <div className="filter-dropdown mx-3  align-items-start">
          <button
            type="button"
            className="btn border-secondary-subtle dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <LuFilter />
            <span> Filter </span>
          </button>
          <ul className="dropdown-menu px-3">
            <div className="d-flex justify-content-between fw-semibold p-3">
              <span>Filter</span>
              <span className="text-primary">Reset</span>
            </div>
            <p className="fw-medium">Waktu transaksi : </p>
            <div className="fw-normal">
            <FilterList title={"Publikasi Terbaru"} type={"radio"} />
            <FilterList title={"7 Hari Terakhir"} type={"radio"} />
            <FilterList title={"30 Hari Terakhir"} type={"radio"} />
            <FilterList title={"Semua Tanggal"} type={"radio"} />
            </div>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <p className="pt-2 fw-medium">Kategori : </p>
            <div className="fw-normal">
            <FilterList title={"Anxiety"} type={"checkbox"} />
            <FilterList title={"Depresi"} type={"checkbox"} />
            <FilterList title={"Emosi"} type={"checkbox"} />
            <FilterList title={"Kecemasan"} type={"checkbox"} />
            <FilterList title={"Stress"} type={"checkbox"} />
            <FilterList title={"Tips"} type={"checkbox"} />
            <FilterList title={"Umum"} type={"checkbox"} />
            </div>
          </ul>
        </div>
      </div>
    );
  };

  const header = renderHeader();

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
        <div className="col ">
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
      </div>
      <div className="card">
        <div className="card-body">
          <div className="">
            <Table
              filters={filters}
              header={header}
              value={artikel}
              selectionMode="single"
              dataKey="id"
              selection={selected}
              globalFilterFields={["judul", "author"]}
              onRowSelect={(selected) => {
                // console.log(selected.data.id)
                navigate(`/admin-manage-artikel/${selected.data.id}`);
              }}
              onSelectionChange={(e) => setSelected(e.value)}
              emptyMessage="Tidak ada data yang sesuai"
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
