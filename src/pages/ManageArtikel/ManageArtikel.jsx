import React, { useEffect, useState } from "react";
import Layouts from "../../Layouts/Layouts";
import { LuFilter } from "react-icons/lu";
import {
  iconArtikelAdmin,
  pendingArtikelAdmin,
  searchFailed,
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
import { useLogin } from "../../hooks/useLogin";
import { getAllArticle } from "../../service/article";
import Skeleton from "react-loading-skeleton";
import { PulseLoader } from "react-spinners";

const ManageArtikel = () => {
  useLogin();
  const [artikel, setArtikel] = useState(dataArtikel);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    title: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    user_name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    status: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });

  useEffect(() => {
    setLoading(true);
    getAllArticle((res) => {
      setArtikel(res.data);
      setLoading(false);
    });
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
    return (
      <div className="d-inline-block">
        <div className="kategori-div-template">
          <p className="kategori-text-template">{rowData.category_name}</p>
        </div>
      </div>
    );
  };

  console.log(artikel);

  const tanggalBodyTemplate = (rowData) => {
    if (rowData.status === "Reject") {
      return (
        <span className="tanggal-text-template text-danger fw-bold">
          {rowData.status}
        </span>
      );
    } else if (rowData.status === "Publish") {
      return (
        <span
          className="tanggal-text-template fw-bold"
          style={{ color: "#32CD32" }}
        >
          {rowData.status}
        </span>
      );
    } else {
      return (
        <span className="tanggal-text-template fw-bold text-warning">
          {rowData.status}
        </span>
      );
    }
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
            cardTitle={
              loading ? (
                <PulseLoader color="#D5E0DE" size={8} loading={loading} />
              ) : (
                artikel.length
              )
            }
            cardSubtitle="Total Artikel"
          />
        </div>
        <div className="col">
          <Card
            src={tambahArtikelAdmin}
            cardSubtitle="Artikel Baru"
            cardTitle={
              loading ? (
                <PulseLoader color="#D5E0DE" size={8} loading={loading} />
              ) : (
                artikel.filter((artikel) => artikel.status === "Publish").length
              )
            }
          />
        </div>
        <div className="col">
          <Card
            src={pendingArtikelAdmin}
            cardSubtitle="Pengajuan Artikel"
            cardTitle={
              loading ? (
                <PulseLoader color="#D5E0DE" size={8} loading={loading} />
              ) : (
                artikel.filter((artikel) => artikel.status === "Pending").length
              )
            }
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
                globalFilterFields={[
                  "title",
                  "user_name",
                  "category_name",
                  "status",
                ]}
                onRowSelect={(selected) => {
                  // console.log(selected.data.id)
                  navigate(`/admin/manage/artikel/${selected.data.id}`);
                }}
                onSelectionChange={(e) => setSelected(e.value)}
                emptyMessage={
                  <div className="text-center mt-4">
                    <img
                      src={searchFailed}
                      className="img-search-failed"
                      alt="No data found"
                    />
                    <h2 className="h2-search-failed">
                      Tidak Ada Data Artikel Ditemukan
                    </h2>
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
            <Skeleton height={60} count={6} />
          )}
        </div>
      </div>
    </Layouts>
  );
};

export default ManageArtikel;
