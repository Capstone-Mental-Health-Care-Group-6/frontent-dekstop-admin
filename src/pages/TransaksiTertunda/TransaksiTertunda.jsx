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
      console.log('ter render sekali', data);
      setCustomers(data);
      const filteredData = data.filter(
        (customer) => customer.payment_type === "manual"
      );
      setFilteredCustomers(filteredData);
    });
  }, []);

  useEffect(() => {
    if (transaksiManualClicked) {
      const filteredData = customers.filter(
        (customer) => customer.payment_type === "manual"
      );
      setFilteredCustomers(filteredData);
    } else if (transaksiOtomatisClicked) {
      const filteredData = customers.filter(
        (customer) => customer.payment_type !== "manual"
      );
      setFilteredCustomers(filteredData);
    } else {
      setCustomers(customers);
    }
  }, [transaksiManualClicked, transaksiOtomatisClicked]);


  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };

  const filteredData = customers.filter((item) => {
    return item.patient_name.toLowerCase().includes(searchData.toLowerCase());
  });

  const filteredOtomatisManual = filteredCustomers.filter((item) => {
    return item.patient_name.toLowerCase().includes(searchData.toLowerCase());
  });

  //ganti payment type nanti dengan nama user

  const handleClick = (transactionType) => {
    setBgTransaction(transactionType);
  };


  const [selectedFilter, setSelectedFilter] = useState('');

  useEffect(() => {

    if (selectedFilter === 'Transaksi Terbaru') {
      setFilteredCustomers(filteredCustomers.filter(item => {
        const createdAtDate = new Date(item.created_at);
        const threeDaysAgo = new Date();
        threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
        return createdAtDate >= threeDaysAgo;
      }));
    } else if (selectedFilter === '7 Hari Terakhir') {
      setFilteredCustomers(filteredCustomers.filter(item => {
        const createdAtDate = new Date(item.created_at);
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        return createdAtDate >= sevenDaysAgo;
      }));
    } else if (selectedFilter === '30 Hari Terakhir') {
      setFilteredCustomers(filteredCustomers.filter(item => {
        const createdAtDate = new Date(item.created_at);
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        return createdAtDate >= thirtyDaysAgo;
      }));
    } else if (selectedFilter === 'Semua Tanggal') {
      resetFilter()
    } else if (selectedFilter === 'Sudah Bayar') {
      setFilteredCustomers(filteredCustomers.filter(item => {
        return item.payment_status === 2;
      }));
    } else if (selectedFilter === 'Belum Bayar') {
      setFilteredCustomers(filteredCustomers.filter(item => {
        return item.payment_status === 5;
      }));

    } else if (selectedFilter === 'Konseling Instan') {
      setFilteredCustomers(filteredCustomers.filter(item => {
        return item.counseling_type === 'B' || item.counseling_type === '';
      }));
    } else if (selectedFilter === 'Konseling Premium') {
      setFilteredCustomers(filteredCustomers.filter(item => {
        return item.counseling_type === 'A';
      }));
    }
  }, [selectedFilter]);


  console.log(filteredCustomers);

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const resetFilter = () => {
    getAllTransaction((data) => {
      setCustomers(data);
      const filteredData = data.filter(
        (customer) => customer.payment_type === "manual"
      );
      setFilteredCustomers(filteredData);
    });
    setTransaksiManualClicked(true)
    setTransaksiOtomatisClicked(false)
    setBgTransaction('manual')
  }

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
                      <button className="text-primary btn border-0 m-0 p-0 fw-semibold" onClick={resetFilter}>
                        Reset
                      </button>
                    </div>
                    <span className="p-3 fw-semibold">Waktu transaksi : </span>
                    <FilterList title={"Transaksi Terbaru"} value={'Transaksi Terbaru'} type={"radio"} checked={selectedFilter === 'Transaksi Terbaru'} onChange={handleFilterChange} />
                    <FilterList title={"7 Hari Terakhir"} value={'7 Hari Terakhir'} type={"radio"} checked={selectedFilter === '7 Hari Terakhir'} onChange={handleFilterChange} />
                    <FilterList title={"30 Hari Terakhir"} value={'30 Hari Terakhir'} type={"radio"} checked={selectedFilter === '30 Hari Terakhir'} onChange={handleFilterChange} />
                    <FilterList title={"Semua Tanggal"} value={'Semua Tanggal'} type={"radio"} checked={selectedFilter === 'Semua Tanggal'} onChange={handleFilterChange} />
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <span className="p-3 fw-semibold">status transaksi : </span>
                    <FilterList title={"Sudah Bayar"} type={"checkbox"} value={'Sudah Bayar'} checked={selectedFilter === 'Sudah Bayar'} onChange={handleFilterChange} />
                    <FilterList title={"Belum Bayar"} type={"checkbox"} value={'Belum Bayar'} checked={selectedFilter === 'Belum Bayar'} onChange={handleFilterChange} />
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <span className="p-3 fw-semibold">Paket: </span>
                    <FilterList title={"Konseling Instan"} type={"checkbox"} value={'Konseling Instan'} checked={selectedFilter === 'Konseling Instan'} onChange={handleFilterChange} />
                    <FilterList title={"Konseling Premium"} type={"checkbox"} value={'Konseling Premium'} checked={selectedFilter === 'Konseling Premium'} onChange={handleFilterChange} />
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
