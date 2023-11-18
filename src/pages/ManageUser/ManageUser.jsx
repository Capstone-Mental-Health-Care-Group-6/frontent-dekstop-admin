import React, { useState } from "react";
import { Paginator } from "primereact/paginator";
import Layouts from "../../Layouts/Layouts";
import Card from "../../components/Fragments/card/Card";
import { dataUsers } from "../../components/DataUsers/dataUsers";
import { cardManageUsers } from "../../components/DataUsers/dataUsers";
import { Link } from "react-router-dom";
import Search from "../../components/Elements/SearchManageUser/SearchManageUser";
import Filter from "../../components/Elements/FilterManageUser/FilterManageUser";
import UserTable from "../../components/Fragments/userTable/userTable";
import "./ManageUser.style.css";

const ManageUser = () => {


  return (
    <Layouts titlePage={"Manage User"}>
      <section className="manage-user ms-3" id="manage-user">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {cardManageUsers.map((item, index) => (
            <div className="col" key={index}>
              <Link to={item.location} className="text-decoration-none">
                <Card src={item.image} cardSubtitle={item.text} cardTitle={item.total}></Card>
              </Link>
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
                <Search size={20} placeholder={"Search"} />
              </div>
              <div className="col-md-2">
                <Filter size={20} placeholder={"Filter"} />
              </div>
            </div>
            <UserTable data={dataUsers} />
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default ManageUser;
