import "./TransaksiTertunda.style.css";
import Layouts from "../../Layouts/Layouts";
import React, { useState, useEffect } from "react";
import { CustomerService } from "../../components/DataComponents/dataComponents";
import { DataTable } from "primereact/datatable";
import Search from "../../components/Elements/search/Search";
import ColumnTable from "../../components/Elements/columnTable/ColumnTable";
import { dataColumnsTertunda } from "../../components/DataComponents/dataComponents";
import { Link } from "react-router-dom";
import Table from "../../components/Fragments/tabel/Table";
import { paymentFailed, searchFailed } from "../../../image";

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
                                <div className=" col d-flex  filtering-data-manual ">
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
                            <Search className={'col d-flex justify-content-end'} size={20} placeholder={"Search"} value={searchData} onChange={handleSearch} />
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
