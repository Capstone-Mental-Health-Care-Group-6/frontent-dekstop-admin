import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-blue/theme.css";

const TableData = () => {
const [article, setArticle] = useState([1, 2, 3, 4]);

const header = (
<div className="d-flex px-5 ">
    <div className="w-100">
    <p>Data Artikel</p>
    </div>
    <div className="flex-shrink-1">
    <div className="dropdown ">
        <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        >
        Filter
        </button>
        <ul className="dropdown-menu py-4 px-3 ">
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
const footer = `In total there are ${article ? article.length : 0} products.`;

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
    footer={footer}
    tableStyle={{ minWidth: "60rem" }}
    >
    <Column field="judul" header="Judul" sortable></Column>
    <Column field="author" header="Author" sortable></Column>
    <Column field="kategori" header="Kategori" sortable></Column>
    <Column field="tanggal" header="Tanggal" sortable></Column>
    </DataTable>
</div>
);
};

export default TableData;
