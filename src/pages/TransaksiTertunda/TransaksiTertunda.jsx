import "./TransaksiTertunda.style.css";
import Layouts from "../../Layouts/Layouts";
import React, { useState, useEffect } from "react";
import { CustomerService } from "../../components/DataComponents/dataComponents";
import Search from "../../components/Elements/search/Search";
import ColumnTable from "../../components/Elements/columnTable/ColumnTable";
import { dataColumnsTertunda } from "../../components/DataComponents/dataComponents";
import Table from "../../components/Fragments/tabel/Table";
import { paymentFailed, searchFailed } from "../../../image";
import { BsFilter, BsFilterRight } from "react-icons/bs";
import { LuFilter } from "react-icons/lu";
import FilterList from "../../components/Fragments/filter-list/FilterList";

function TransaksiTertunda() {
    const [customers, setCustomers] = useState([]);
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    const [transaksiManualClicked, setTransaksiManualClicked] = useState(false);
    const [transaksiOtomatisClicked, setTransaksiOtomatisClicked] = useState(false);
    const [bgTransaction, setBgTransaction] = useState(false);
    const [searchData, setSearchData] = useState('');


    useEffect(() => {
        // nanti nya nama pembayarannya berdasarkan data transaksi yang ada di backend
        if (transaksiManualClicked) {
            CustomerService.getCustomersMedium().then((data) => {
                const filteredData = data.filter(
                    (customer) => customer.metode_pembayaran === "Manual"
                );
                setFilteredCustomers(filteredData);
            });

        } else if (transaksiOtomatisClicked) {
            CustomerService.getCustomersMedium().then((data) => {
                const filteredData = data.filter(
                    (customer) => customer.metode_pembayaran === "Otomatis"
                );
                setFilteredCustomers(filteredData);
            });

        } else {
            CustomerService.getCustomersMedium().then((data) => setCustomers(data));
        }
    }, [transaksiManualClicked, transaksiOtomatisClicked]);


    const handleSearch = (e) => {
        setSearchData(e.target.value);
    };

    const filteredData = customers.filter(item => {
        return item.name.toLowerCase().includes(searchData.toLowerCase())
    })

    const filteredOtomatisManual = filteredCustomers.filter((item => {
        return item.name.toLowerCase().includes(searchData.toLowerCase())
    }))


    const emptyMessage = () => {
        if (customers.length === 0) {
            return (
                <div className="d-grid justify-content-center" >
                    <div className="w-50 d-grid justify-content-center mx-auto">
                        <img className="mx-auto" src={paymentFailed} alt="" />
                        <div className="text-justify">
                            <h3  >Tidak ada data transaksi tertunda</h3>
                            <p>Maaf, Saat ini belum ada data transaksi tertunda. Ini bisa jadi karena user belum melakukan transaksi atau data transaksi user sedang dimuat.</p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="d-grid justify-content-center" >
                    <div className="w-100 d-grid justify-content-center mx-auto">
                        <img className="mx-auto" src={searchFailed} alt="" />
                        <div className="text-justify">
                            <h3>Maaf, Pencarian tidak dapat ditemukan</h3>
                        </div>
                    </div>
                </div>
            )
        }
    }


    const handleClick = (transactionType) => {
        setBgTransaction(transactionType);
    };

    return (
        <Layouts titlePage={"Transaksi Tertunda"}>
            <section className="transaksi-tertunda mb-2" id="transaksi-tertunda">
                <p className="routes"> <span>Transaksi</span> / Transaksi Tertunda  </p>

                <div className="transaksi-tertunda-content d-grid align-items-center">
                    <div className="card">
                        <div className="d-flex row row-cols-lg-2 row-cols-1 justify-content-between">
                            <div className="d-flex gap-4 mb-3">
                                <div className=" col  d-flex  filtering-data-manual ">
                                    <h4 className={`px-2 ${bgTransaction === 'manual' ? 'active' : ''}`}
                                        onClick={() => {
                                            setTransaksiManualClicked(true);
                                            setTransaksiOtomatisClicked(false);
                                            handleClick('manual')
                                        }}

                                    >
                                        Transaksi Manual
                                    </h4>

                                    <h4 className={bgTransaction === 'otomatis' ? 'active' : ''}
                                        onClick={() => {
                                            setTransaksiOtomatisClicked(true);
                                            setTransaksiManualClicked(false);
                                            handleClick('otomatis')
                                        }}
                                    >
                                        Transaksi Otomatis
                                    </h4>

                                </div>
                            </div>
                            <div className="col gap-2 search-container d-flex justify-content-end">
                                <Search size={20} placeholder={"Search"} value={searchData} onChange={handleSearch} />
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className="btn border-secondary-subtle dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                    >
                                        <LuFilter />
                                    </button>
                                    <ul className="dropdown-menu">
                                        <div className="d-flex justify-content-between fw-semibold p-3" >
                                            <span >Filter</span>
                                            <span className="text-primary" >Reset</span>
                                        </div>
                                        <span className="p-3 fw-medium" >Waktu transaksi : </span>
                                        <FilterList title={'Transaksi Terbaru'} type={'radio'} />
                                        <FilterList title={'7 Hari Terakhir'} type={'radio'} />
                                        <FilterList title={'30 Hari Terakhir'} type={'radio'} />
                                        <FilterList title={'30 Hari Terakhir'} type={'radio'} />
                                        <FilterList title={'Semua Tanggal'} type={'radio'} />
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <span className="p-3 fw-medium" >status transaksi : </span>
                                        <FilterList title={'Sudah Bayar'} type={'checkbox'} />
                                        <FilterList title={'Belum Bayar'} type={'checkbox'} />
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <span className="p-3 fw-medium" >Paket: </span>
                                        <FilterList title={'Konseling Instan'} type={'checkbox'} />
                                        <FilterList title={'Konseling Premium'} type={'checkbox'} />
                                    </ul>
                                </div>
                            </div>



                        </div>

                        <Table value={transaksiManualClicked || transaksiOtomatisClicked ? filteredOtomatisManual : filteredData}
                            emptyMessage={emptyMessage} >
                            {dataColumnsTertunda.map((item, index) => (
                                <ColumnTable key={index} header={item.header} field={item.field} body={item.body} />
                            ))}
                        </Table>

                    </div>
                </div>
            </section>
        </Layouts>
    );
}

export default TransaksiTertunda;
