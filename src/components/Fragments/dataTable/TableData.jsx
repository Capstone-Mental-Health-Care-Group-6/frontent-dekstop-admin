import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/viva-light/theme.css";
import "./table.style.css"

const TableData = () => {
const [article, setArticle] = useState([1, 2, 3, 4]);

const header = (
<div className="d-flex px-5 ">
    <div className="w-100 header">
    <p>Data Artikel</p>
    </div>
    <form className="searchbar">
    <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
    />
    </form>
    <div className="flex-shrink-1 mx-2">
    <div className="dropdown ">
        <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        >
        Filter
        </button>
        <ul
        className="dropdown-menu py-4 px-3"
        style={{ backgroundColor: "white" }}
        >
        <span className="">Waktu Publikasi:</span>
        <div className="px-2 py-4 border-bottom">
            <div className="form-check fw-light">
            <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
            />
            <label
                className="form-check-label "
                htmlFor="flexRadioDefault1"
            >
                Publikasi Terbaru
            </label>
            </div>
            <div className="form-check fw-light">
            <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
                7 Hari Terakhir
            </label>
            </div>
            <div className="form-check fw-light">
            <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
                30 Hari Terakhir
            </label>
            </div>
            <div className="form-check fw-light">
            <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
                Semua Tanggal
            </label>
            </div>
        </div>

        <p className="pt-4  ">Kategori:</p>
        <div className="px-2">
            <div className="form-check fw-light">
            <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="defaultCheck1"
            />
            <label className="check-value" htmlFor="defaultCheck1">
                Anxiety
            </label>
            </div>
            <div className="form-check fw-light">
            <input
                className="form-check-input "
                type="checkbox"
                defaultValue=""
                id="defaultCheck2"
                disabled=""
            />
            <label className="check-value" htmlFor="defaultCheck2">
                Depresi
            </label>
            </div>
            <div className="form-check fw-light">
            <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="defaultCheck1"
            />
            <label className="check-value" htmlFor="defaultCheck1">
                Emosi
            </label>
            </div>
            <div className="form-check fw-light">
            <input
                className="form-check-input "
                type="checkbox"
                defaultValue=""
                id="defaultCheck2"
                disabled=""
            />
            <label className="check-value" htmlFor="defaultCheck2">
                Kecemasan
            </label>
            </div>
            <div className="form-check fw-light">
            <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="defaultCheck1"
            />
            <label className="check-value" htmlFor="defaultCheck1">
                Stress
            </label>
            </div>
            <div className="form-check fw-light">
            <input
                className="form-check-input "
                type="checkbox"
                defaultValue=""
                id="defaultCheck2"
                disabled=""
            />
            <label className="check-value" htmlFor="defaultCheck2">
                Tips
            </label>
            </div>
            <div className="form-check fw-light">
            <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="defaultCheck1"
            />
            <label className="check-value" htmlFor="defaultCheck1">
                Umum
            </label>
            </div>
        </div>
        </ul>
    </div>
    </div>
</div>
);

return (
<div>
    <DataTable
    paginator
    rows={5}
    rowsPerPageOptions={[5, 10, 25, 50]}
    value={article}
    header={header}
    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
    currentPageReportTemplate="{first} to {last} of {totalRecords}"
    globalFilterFields={["search"]}
    tableStyle={{ minWidth: "60rem" }}
    >
    <Column field="judul" header="Judul" className="w-50"></Column>
    <Column field="author" header="Author"></Column>
    <Column field="kategori" header="Kategori"></Column>
    <Column field="tanggal" header="Tanggal"></Column>
    </DataTable>
</div>
);
};

export default TableData;
