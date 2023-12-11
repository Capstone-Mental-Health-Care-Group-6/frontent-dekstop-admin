import React, { useState } from "react";
import Layouts from "../../Layouts/Layouts";
import { dataPengajuan } from "../../components/DataDokter/DataPengajuan/dataPengajuan";
import PengajuanTable from "../../components/Fragments/PengajuanTable/PengajuanTable";
import Search from "../../components/Elements/SearchManageUser/SearchManageUser";
import FilterList from "../../components/Fragments/filter-list/FilterList";
import { LuFilter } from "react-icons/lu";
import "./PengajuanPraktikDokter.style.css";

const PengajuanPraktikDokter = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value); // Fungsi untuk menangani perubahan input pencarian
  };
  return (
    <>
      <Layouts titlePage={"Pengajuan Praktik Dokter"}>
        <div>
          <div>
            <p>
              Manage Dokter /
              <span className="fw-semibold">Pengajuan Praktik Dokter</span>
            </p>
          </div>

          {/* <PengajuanTable data={dataPengajuan} searchValue={searchValue} />{" "} */}

          <section className="data-user mt-3" id="data-user">
            <div className="card border-0">
              <div className="card-body">
                <div className="row my-auto">
                  <div className="col-8">
                    <h4>Data Dokter</h4>
                  </div>
                  <div className="col-md-2">
                    <Search
                      size={20}
                      placeholder={"Search"}
                      value={searchValue}
                      onChange={handleSearchChange}
                    />{" "}
                    {/* Menggunakan nilai pencarian dan fungsi onChange */}
                  </div>
                  <div className="col-md-2">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn border-secondary-subtle"
                        data-bs-toggle="dropdown"
                      >
                        <LuFilter className="icon-filter" />
                        <p>Filter</p>
                      </button>
                      <ul className="dropdown-menu">
                        <div className="d-flex justify-content-between fw-semibold p-3">
                          <span>Filter</span>
                          <span className="text-primary">Reset</span>
                        </div>
                        <span className="p-3 fw-medium">Status Akun : </span>
                        <FilterList title={"Aktif"} type={"checkbox"} />
                        <FilterList title={"Non Aktif"} type={"checkbox"} />
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <span className="p-3 fw-medium">Paket : </span>
                        <FilterList
                          title={"Konseling Instan"}
                          type={"checkbox"}
                        />
                        <FilterList
                          title={"Konseling Premium"}
                          type={"checkbox"}
                        />
                        <FilterList title={"Non Aktif"} type={"checkbox"} />
                      </ul>
                    </div>
                  </div>
                </div>
                <PengajuanTable data={dataPengajuan} searchValue={searchValue} />{" "}
              </div>
            </div>
          </section>
        </div>
      </Layouts>
    </>
  );
};

export default PengajuanPraktikDokter;
