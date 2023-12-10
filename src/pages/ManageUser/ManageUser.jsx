import React, { useEffect, useState } from "react";
import Layouts from "../../Layouts/Layouts";
import Card from "../../components/Fragments/card/Card";
import { dataUsers } from "../../components/DataUsers/dataUsers";
// import { cardManageUsers } from "../../components/DataUsers/dataUsers";
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
import { getAllPatient } from "../../service/patient";

const ManageUser = () => {
  const [searchValue, setSearchValue] = useState(""); // State untuk nilai pencarian

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value); // Fungsi untuk menangani perubahan input pencarian
  };

  const [patientData, setPatientData] = useState(null);

  // useEffect(() => {
  //   getAllPatient((data) => {
  //     setPatientData(data);
  //   });
  // }, []);

  const cardManageUsers = [
    {
      location: "/",
      image: iconTotalUser,
      text: "Total User",
      total: patientData?.total_user || "0",
    },
    {
      location: "/",
      image: iconUserBaru,
      text: "User Baru",
      total: patientData?.total_user_baru || "0",
    },
    {
      location: "/",
      image: iconUserAktif,
      text: "User Aktif",
      total: patientData?.total_user_active || "0",
    },
    {
      location: "/",
      image: iconUserTidakAktif,
      text: "User Tidak Aktif",
      total: patientData?.total_user_inactive || "0",
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
                      <span className="text-primary">Reset</span>
                    </div>
                    <span className="p-3 fw-medium">Status Akun : </span>
                    <FilterList title={"Aktif"} type={"checkbox"} />
                    <FilterList title={"Non Aktif"} type={"checkbox"} />
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <span className="p-3 fw-medium">Paket : </span>
                    <FilterList title={"Konseling Instan"} type={"checkbox"} />
                    <FilterList title={"Konseling Premium"} type={"checkbox"} />
                    <FilterList title={"Non Aktif"} type={"checkbox"} />
                  </ul>
                </div>
              </div>
            </div>
            <UserTable data={dataUsers} searchValue={searchValue} />{" "}
            {/* Meneruskan nilai pencarian ke UserTable */}
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default ManageUser;
