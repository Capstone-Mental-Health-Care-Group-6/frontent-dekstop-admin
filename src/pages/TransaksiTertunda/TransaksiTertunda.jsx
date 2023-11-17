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

    useEffect(() => {

        // nanti nya nama negara nya berdasarkan data transaksi yang ada di backend
        if (transaksiManualClicked) {
            CustomerService.getCustomersMedium().then((data) => {
                const filteredData = data.filter(
                    (customer) => customer.country.name === "Algeria"
                );
                setFilteredCustomers(filteredData);
            });

        } else if (transaksiOtomatisClicked) {
            CustomerService.getCustomersMedium().then((data) => {
                const filteredData = data.filter(
                    (customer) => customer.country.name === "Panama"
                );
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


    return (
        <Layouts titlePage={"Transaksi Tertunda"}>
            <section className="transaksi-tertunda" id="transaksi-tertunda">
                <p className="routes">
                    <span>Transaksi</span> / Transaksi Tertunda
                </p>
                <div className="transaksi-tertunda-content d-grid align-items-center">
                    <div className="card">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex gap-4">
                                <h4 onClick={() => {
                                    setTransaksiManualClicked(true);
                                    setTransaksiOtomatisClicked(false)
                                }}>
                                    Transaksi Manual
                                </h4>

                                <h4 onClick={() => {
                                    setTransaksiOtomatisClicked(true);
                                    setTransaksiManualClicked(false); // Reset the other button
                                }}
                                >
                                    Transaksi Otomatis
                                </h4>
                            </div>
                            <Search size={20} placeholder={"Search"} />
                        </div>

                        <DataTable
                            value={transaksiManualClicked || transaksiOtomatisClicked ? filteredCustomers : customers}
                            paginator
                            rows={5}
                            rowsPerPageOptions={[5, 10, 25, 50]}
                            tableStyle={{ minWidth: '50rem' }}
                        >
                            {dataColumnsTertunda.map((item, index) => (
                                <ColumnTable
                                    key={index}
                                    header={item.header}
                                    field={item.field}
                                    body={(rowData) => (
                                        <Link to={`/${getValue(rowData, 'id')}`}>
                                            {getValue(rowData, item.field)}
                                        </Link>
                                    )}
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
