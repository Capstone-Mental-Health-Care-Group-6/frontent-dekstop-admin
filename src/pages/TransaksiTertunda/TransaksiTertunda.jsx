import "./TransaksiTertunda.style.css";
import Layouts from "../../Layouts/Layouts";
import React, { useState, useEffect } from "react";
import { CustomerService } from "../../components/DataComponents/dataComponents";
import { DataTable } from "primereact/datatable";
import Search from "../../components/Elements/search/Search";
import ColumnTable from "../../components/Elements/columnTable/ColumnTable";
import { dataColumnsTertunda } from "../../components/DataComponents/dataComponents";
import { Link } from "react-router-dom";

function TransaksiTertunda() {
    const [customers, setCustomers] = useState([]);
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    const [transaksiManualClicked, setTransaksiManualClicked] = useState(false);
    const [transaksiOtomatisClicked, setTransaksiOtomatisClicked] = useState(false);
    const [bgTransaction, setBgTransaction] = useState(false);

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
                console.log(customers);
                setFilteredCustomers(filteredData);
            });

        } else {
            CustomerService.getCustomersMedium().then((data) => setCustomers(data));
        }
    }, [transaksiManualClicked, transaksiOtomatisClicked]);


    const getValue = (object, path) => {
        const properties = path.split('.');
        return properties.reduce((acc, property) => acc && acc[property], object);
    };

    const handleClick = (transactionType) => {
        setBgTransaction(transactionType);
    };

    const bodyTemplate = (rowData) => {
        return (
            <>
                <img src={rowData.image} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                <Link to={`/admin-transaksi-user/transaksi-tertunda/detail-transaksi-user/${getValue(rowData, 'id')}`}>
                    {rowData.name}
                </Link>
            </>
        );
    };

    return (
        <Layouts titlePage={"Transaksi Tertunda"}>
            <section className="transaksi-tertunda mb-2" id="transaksi-tertunda">
                <p className="routes"> <span>Transaksi</span> / Transaksi Tertunda  </p>

                <div className="transaksi-tertunda-content d-grid align-items-center">
                    <div className="card">
                        <div className="d-flex row row-cols-lg-2 row-cols-1 justify-content-between">
                            <div className="d-flex gap-4 mb-3">
                                <div className=" col d-flex gap-3 filtering-data-manual ">
                                    <h4 className={bgTransaction === 'manual' ? 'active' : ''}
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
                            <Search className={'col d-flex justify-content-end'} size={20} placeholder={"Search"} />
                        </div>

                        <DataTable
                            value={transaksiManualClicked || transaksiOtomatisClicked ? filteredCustomers : customers}
                            paginator
                            rows={5}
                            rowsPerPageOptions={[5, 10, 25, 50]}
                            tableStyle={{ minWidth: '50rem' }}
                            className="table-customers"
                        >
                            {dataColumnsTertunda.map((item, index) => (
                                <ColumnTable
                                    key={index}
                                    header={item.header}
                                    field={item.field}
                                    body={item.field === 'name' ? bodyTemplate : (rowData) => getValue(rowData, item.field)}
                                />
                            ))}
                        </DataTable>
                    </div>
                </div>
            </section>
        </Layouts>
    );
}

export default TransaksiTertunda;
