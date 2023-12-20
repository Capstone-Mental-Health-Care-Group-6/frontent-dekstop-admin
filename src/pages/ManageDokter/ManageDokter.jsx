import React, { useEffect, useState } from "react";
import Layouts from "../../Layouts/Layouts";
import Card from "../../components/Fragments/card/Card";
import "./ManageDokter.styles.css";
import {
  iconCardUser,
  iconCardDokter,
  captivePortal,
  sandClock,
} from "../../../image";
import Search from "../../components/Elements/SearchManageUser/SearchManageUser";
import FilterList from "../../components/Fragments/filter-list/FilterList";
import { dataDokter } from "../../components/DataDokter/dataDokter";
import { LuFilter } from "react-icons/lu";
import DokterTable from "../../components/Fragments/dokterTable/DokterTable";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getAllDoctor, getDashboardDoctor } from "../../service/doctor";
import Skeleton from "react-loading-skeleton";
import { PulseLoader } from "react-spinners";

const ManageDokter = () => {
  const { id } = useParams();
  const dokter = dataDokter.find((dokter) => dokter.id === parseInt(id));
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [dataTableManageDokter, setdataTableManageDokter] = useState([]);
  const [totalDokter, setTotalDokter] = useState(0);
  const [totalDokterBaru, setTotalDokterBaru] = useState(0);
  const [totalDokterAktif, setTotalDokterAktif] = useState(0);
  const [totalPengajuan, setTotalPengajuan] = useState(0);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value); // Fungsi untuk menangani perubahan input pencarian
  };

  useEffect(() => {
    setLoading(true);

    getAllDoctor((data) => {
      setTotalDokter(data.data.length);
      setLoading(false);
    });

    getDashboardDoctor((data) => {
      setTotalDokterBaru(data.data.total_new_doctor);
      setTotalDokterAktif(data.data.total_active_doctor);
      setTotalPengajuan(data.data.total_pending_doctor);
      setLoading(false);
    });

    getAllDoctor((data) => {
      setdataTableManageDokter(data.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Layouts titlePage={"Manage Dokter"}>
        <div className="cardDokter d-flex gap-2">
          <Card
            cardSubtitle="Total Dokter"
            cardTitle={
              loading ? (
                <PulseLoader color="#D5E0DE" size={8} loading={loading} />
              ) : (
                totalDokter
              )
            }
            src={iconCardUser}
          />

          <Card
            cardSubtitle="Dokter Baru"
            cardTitle={
              loading ? (
                <PulseLoader color="#D5E0DE" size={8} loading={loading} />
              ) : (
                totalDokterBaru
              )
            }
            src={iconCardDokter}
          />

          <Card
            cardSubtitle="Dokter Aktif"
            cardTitle={
              loading ? (
                <PulseLoader color="#D5E0DE" size={8} loading={loading} />
              ) : (
                totalDokterAktif
              )
            }
            src={captivePortal}
          />

          <Link
            className="card-pengajuan"
            to={`/admin/manage/dokter/pengajuan`}
          >
            <div className="card bg-white border-white">
              <div className="card-body">
                <img className="mb-2" src={sandClock} />
                <h6 className="card-subtitle">Pengajuan Dokter</h6>
                <h5 className="card-title">
                  {loading ? (
                    <PulseLoader color="#D5E0DE" size={8} loading={loading} />
                  ) : (
                    totalPengajuan
                  )}
                </h5>
              </div>
            </div>
          </Link>
        </div>

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
              {!loading ? (
                <DokterTable
                  data={dataTableManageDokter}
                  searchValue={searchValue}
                />
              ) : (
                <Skeleton height={60} count={6} />
              )}
            </div>
          </div>
        </section>
      </Layouts>
    </>
  );
};

export default ManageDokter;
