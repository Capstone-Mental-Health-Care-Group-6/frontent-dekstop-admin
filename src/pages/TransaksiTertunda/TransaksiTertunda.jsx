import "./TransaksiTertunda.style.css";
import Layouts from "../../Layouts/Layouts";
import React, { useState, useEffect } from "react";
import {
  CustomerService,
  emptyMessageTransaksiTertunda,
} from "../../components/DataComponents/dataComponents";
import Search from "../../components/Elements/search/Search";
import ColumnTable from "../../components/Elements/ColumnTable/ColumnTable";
import { dataColumnsTertunda } from "../../components/DataComponents/dataComponents";
import Table from "../../components/Fragments/tabel/Table";
import { LuFilter } from "react-icons/lu";
import FilterList from "../../components/Fragments/filter-list/FilterList";
import { getAllTransaction } from "../../service/transaction";

function TransaksiTertunda() {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [transaksiManualClicked, setTransaksiManualClicked] = useState(true);
  const [transaksiOtomatisClicked, setTransaksiOtomatisClicked] = useState(false);
  const [bgTransaction, setBgTransaction] = useState("manual");
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    getAllTransaction((data) => {
      console.log(data);
      if (transaksiManualClicked) {
        const filteredData = data.filter(
          (customer) => customer.payment_type === "manual"
        );
        setFilteredCustomers(filteredData);
      } else if (transaksiOtomatisClicked) {
        const filteredData = data.filter(
          (customer) => customer.payment_type !== "manual"
        );
        setFilteredCustomers(filteredData);
      } else {
        setCustomers(data);
      }
    });
  }, [transaksiManualClicked, transaksiOtomatisClicked]);


  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };

  const filteredData = customers.filter((item) => {
    return item.payment_type.toLowerCase().includes(searchData.toLowerCase());
  });

  const filteredOtomatisManual = filteredCustomers.filter((item) => {
    return item.payment_type.toLowerCase().includes(searchData.toLowerCase());
  });

  //ganti payment type nanti dengan nama user

  const handleClick = (transactionType) => {
    setBgTransaction(transactionType);
  };

  return (
    <Layouts titlePage={"Transaksi Tertunda"}>
      <section className="transaksi-tertunda mb-2" id="transaksi-tertunda">
        <p className="routes">
          {" "}
          <span>Transaksi</span> / Transaksi Tertunda{" "}
        </p>

        <div className="transaksi-tertunda-content d-grid align-items-center">
          <div className="card">
            <div className="d-flex row row-cols-lg-2 row-cols-1 justify-content-between">
              <div className="d-flex gap-4 mb-3">
                <div className=" col  d-flex  filtering-data-manual ">
                  <h4
                    className={`px-2 ${bgTransaction === "manual" ? "active" : ""
                      }`}
                    onClick={() => {
                      setTransaksiManualClicked(true);
                      setTransaksiOtomatisClicked(false);
                      handleClick("manual");
                    }}
                  >
                    Transaksi Manual
                  </h4>

                  <h4
                    className={bgTransaction === "otomatis" ? "active" : ""}
                    onClick={() => {
                      setTransaksiOtomatisClicked(true);
                      setTransaksiManualClicked(false);
                      handleClick("otomatis");
                    }}
                  >
                    Transaksi Otomatis
                  </h4>
                </div>
              </div>
              <div className="col gap-2 search-container d-flex justify-content-end">
                <Search
                  size={20}
                  placeholder={"Search"}
                  value={searchData}
                  onChange={handleSearch}
                />
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn border-secondary-subtle text-secondary dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <LuFilter />
                    <span className="ms-1">Filter</span>
                  </button>
                  <ul className="dropdown-menu">
                    <div className="d-flex justify-content-between fw-semibold p-3">
                      <span>Filter</span>
                      <button className="text-primary btn border-0 m-0 p-0 fw-semibold">
                        Reset
                      </button>
                    </div>
                    <span className="p-3 fw-semibold">Waktu transaksi : </span>
                    <FilterList title={"Transaksi Terbaru"} type={"radio"} />
                    <FilterList title={"7 Hari Terakhir"} type={"radio"} />
                    <FilterList title={"30 Hari Terakhir"} type={"radio"} />
                    <FilterList title={"30 Hari Terakhir"} type={"radio"} />
                    <FilterList title={"Semua Tanggal"} type={"radio"} />
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <span className="p-3 fw-semibold">status transaksi : </span>
                    <FilterList title={"Sudah Bayar"} type={"checkbox"} />
                    <FilterList title={"Belum Bayar"} type={"checkbox"} />
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <span className="p-3 fw-semibold">Paket: </span>
                    <FilterList title={"Konseling Instan"} type={"checkbox"} />
                    <FilterList title={"Konseling Premium"} type={"checkbox"} />
                  </ul>
                </div>
              </div>
            </div>

            <Table value={transaksiManualClicked || transaksiOtomatisClicked ? filteredOtomatisManual : filteredData} emptyMessage={emptyMessageTransaksiTertunda(customers)}  >
              {dataColumnsTertunda.map((item, index) => (
                <ColumnTable key={index} header={item.header} field={item.field} body={item.body}
                />
              ))}
            </Table>
          </div>
        </div>
      </section>
    </Layouts>
  );
}

export default TransaksiTertunda;
