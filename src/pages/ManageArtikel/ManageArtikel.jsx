import React, { useEffect, useState } from "react";
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
import { dataArtikel } from "./dataArtikel";
import Search from "../../components/Elements/search/Search";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import FilterList from "../../components/Fragments/filter-list/FilterList";
import { FilterMatchMode } from "primereact/api";
import Input from "../../components/Elements/input/Input";
import ColumnTable from "../../components/Elements/ColumnTable/ColumnTable";
import { getAllArticle } from "../../service/article";

const ManageArtikel = () => {
  const [artikel, setArtikel] = useState([]);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    title: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    user_name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });

  useEffect(() => {
    setLoading(true);
    getAllArticle((res) => {
      setArtikel(res.data);
    });
    setLoading(false);
  }, []);

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
        {/* <img src={rowData.image} alt={rowData.user_name} className="me-2" /> */}
        <span className="author-text-template">{rowData.user_name}</span>
      </div>
    );
  };

  const kategoriBodyTemplate = (rowData) => {
    return(
      <div className="d-inline-block">
        <div className="kategori-div-template">
          <p className="kategori-text-template">{rowData.category_name}</p>
        </div>
      </div>
        )
  };

  console.log(artikel)

  const tanggalBodyTemplate = (rowData) => {
    return <span className="tanggal-text-template">{rowData.status}</span>;
  };

  const judulBodyTemplate = (rowData) => {
    return <span className="judul-text-template">{rowData.title}</span>;
  };

  return (
    <Layouts titlePage={"Manage Artikel"}>
      <div className="row my-4">
        <div className="col ">
          <Card
            src={iconArtikelAdmin}
            cardTitle={artikel.length}
            cardSubtitle="Total Artikel"
          />
        </div>
        <div className="col">
          <Card
            src={tambahArtikelAdmin}
            cardSubtitle="Artikel Baru"
            cardTitle={artikel.filter((artikel) => artikel.status === 'Publish').length}
          />
        </div>
        <div className="col">
          <Card
            src={pendingArtikelAdmin}
            cardSubtitle="Pengajuan Artikel"
            cardTitle={artikel.filter((artikel) => artikel.status === 'Pending').length}
          />
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          {!loading ? (
            <div className="">
              <Table
                filters={filters}
                header={header}
                value={artikel}
                selectionMode="single"
                dataKey="id"
                selection={selected}
                globalFilterFields={["title", "user_name", 'category_name']}
                onRowSelect={(selected) => {
                  // console.log(selected.data.id)
                  navigate(`/admin/manage/artikel/${selected.data.id}`);
                }}
                onSelectionChange={(e) => setSelected(e.value)}
                emptyMessage={
                  <div className="text-center">
                    <p>Tidak ada data yang sesuai</p>
                  </div>
                }
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
                  field="status"
                  body={tanggalBodyTemplate}
                  header="Status"
                  headerClassName="table-header-border-tanggal"
                />
              </Table>
            </div>
          ) : (
            <div>
              <p>data kosong</p>
            </div>
          )}
        </div>
      </div>
    </Layouts>
  );
};

export default ManageArtikel;
