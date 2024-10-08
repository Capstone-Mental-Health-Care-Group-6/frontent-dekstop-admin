import React, { useEffect, useState } from "react";
import Layouts from "../../Layouts/Layouts";
import Card from "../../components/Fragments/card/Card";
import { dataUsers } from "../../components/DataUsers/dataUsers";
import { Link } from "react-router-dom";
import Search from "../../components/Elements/SearchManageUser/SearchManageUser";
import FilterList from "../../components/Fragments/filter-list/FilterList";
import { LuFilter } from "react-icons/lu";
import UserTable from "../../components/Fragments/userTable/UserTable";
import "./ManageUser.style.css";
import {
  iconTotalUser,
  iconUserAktif,
  iconUserBaru,
  iconUserTidakAktif,
} from "../../../image";
import { getAllManageUser, getAllPatient } from "../../service/patient";
import PulseLoader from "react-spinners/PulseLoader";
import { useLogin } from "../../hooks/useLogin";
import Skeleton from "react-loading-skeleton";

const ManageUser = () => {
  useLogin();
  const [searchValue, setSearchValue] = useState(""); // State untuk nilai pencarian
  const [dataUsers, setDataUsers] = useState([]);
  const [patientData, setPatientData] = useState(0);
  const [loading, setLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState("");

  const resetFilter = () => {
    setStatusFilter("");

    getAllManageUser((data) => {
      setDataUsers(data.data);
    });
  };

  const handleFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value); // Fungsi untuk menangani perubahan input pencarian
  };

  useEffect(() => {
    setLoading(true);

    getAllPatient((data) => {
      setPatientData(data.data);
      setLoading(false);
    });

    getAllManageUser((data) => {
      setDataUsers(data.data);
      setLoading(false);
    });
  }, []);

  const cardManageUsers = [
    {
      location: "/",
      image: iconTotalUser,
      text: "Total User",
      total: loading ? (
        <PulseLoader color="#D5E0DE" size={8} loading={loading} />
      ) : (
        patientData?.total_user
      ),
    },
    {
      location: "/",
      image: iconUserBaru,
      text: "User Baru",
      total: loading ? (
        <PulseLoader color="#D5E0DE" size={8} loading={loading} />
      ) : (
        patientData?.total_user_baru
      ),
    },
    {
      location: "/",
      image: iconUserAktif,
      text: "User Aktif",
      total: loading ? (
        <PulseLoader color="#D5E0DE" size={8} loading={loading} />
      ) : (
        patientData?.total_user_active
      ),
    },
    {
      location: "/",
      image: iconUserTidakAktif,
      text: "User Tidak Aktif",
      total: loading ? (
        <PulseLoader color="#D5E0DE" size={8} loading={loading} />
      ) : (
        patientData?.total_user_inactive
      ),
    },
  ];

  return (
    <Layouts titlePage={"Manage User"}>
      <section className="manage-user ms-3" id="manage-user">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {cardManageUsers.map((item, index) => (
            <div className="col" key={index}>
              <Card
                src={item.image}
                cardSubtitle={item.text}
                cardTitle={item.total}
              ></Card>
            </div>
          ))}
        </div>
      </section>

      <section className="data-user mt-3 ms-3" id="data-user">
        <div className="card">
          <div className="card-body">
            <div className="row my-auto">
              <div className="col-8">
                <h4>Data User</h4>
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
                      <button
                        className="btn text-primary fw-semibold"
                        onClick={resetFilter}
                      >
                        Reset
                      </button>
                    </div>
                    <span className="p-3 fw-medium">Status Akun : </span>
                    <FilterList
                      title={"Aktif"}
                      type={"checkbox"}
                      value={"Active"}
                      checked={statusFilter === "Active"}
                      onChange={handleFilterChange}
                    />
                    <FilterList
                      title={"Non Aktif"}
                      type={"checkbox"}
                      value={"Inactive"}
                      checked={statusFilter === "Inactive"}
                      onChange={handleFilterChange}
                    />
                  </ul>
                </div>
              </div>
            </div>
            {!loading ? (
              <UserTable
                data={dataUsers}
                searchValue={searchValue}
                statusFilter={statusFilter}
              />
            ) : (
              <Skeleton height={60} count={6} />
            )}
            {/* Meneruskan nilai pencarian ke UserTable */}
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default ManageUser;
