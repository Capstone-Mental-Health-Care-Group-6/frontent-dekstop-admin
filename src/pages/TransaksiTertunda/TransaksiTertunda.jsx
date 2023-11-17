import "./TransaksiTertunda.style.css";
import Layouts from '../../Layouts/Layouts';
import React, { useState, useEffect } from 'react'
import { CustomerService } from '../../components/DataComponents/dataComponents';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { LuSearch } from "react-icons/lu";
import Search from "../../components/Elements/search/Search";

function TransaksiTertunda() {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);
    return (
        <Layouts titlePage={"Transaksi Tertunda"}>
            <section className='transaksi-tertunda' id="transaksi-tertunda" >
                <p className='routes' ><span>Transaksi</span> / Transaksi Tertunda </p>
                <div className="transaksi-tertunda-content d-grid align-items-center">
                    <div className="card">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex gap-4">
                                <h4>Transaksi Manual</h4>
                                <h4>Transaksi Otomatis</h4>
                            </div>

                            {/* <div className="search-container ">
                                <button className="search__button">
                                    <LuSearch size={20} />
                                </button>
                                <input type="text" className="form-control input-search" placeholder="Search" />
                            </div> */}
                            <Search size={20} placeholder={"Search"} />
                        </div>
                        <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                            <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                            <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
                            <Column field="company" header="Company" style={{ width: '25%' }}></Column>
                            <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
                        </DataTable>
                    </div>
                </div>
            </section>
        </Layouts>
    )
}

export default TransaksiTertunda