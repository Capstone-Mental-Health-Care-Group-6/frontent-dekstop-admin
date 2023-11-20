import React from "react";
import Layouts from "../../Layouts/Layouts";
import "./ManageDokter.styles.css";
import fakeData from "./MOCK_DATA.json";
import Stetoscop from "../../assets/ManageDokter/stetoscop.png";
import People from "../../assets/ManageDokter/people.png";
import SandClock from "../../assets/ManageDokter/sandclock.png";
import Earth from "../../assets/ManageDokter/earth.png";
import { useTable } from "react-table";
import Card from "../../components/Fragments/card/Card";
import {
  dashboardImg,
  iconCardUser,
  iconCardArtikel,
  iconCardDokter,
  paket1,
  paket2,
} from "../../../image";
import { BsChevronBarExpand } from "react-icons/bs";

const ManageDokter = () => {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Nama",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "No. telp",
        accessor: "phone",
      },
      {
        Header: "Total Jam Kerja",
        accessor: "worktime",
      },
      {
        Header: "Action",
        accessor: "",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <Layouts titlePage={"Manage Dokter"}>
        <div className="mt-3">
          <div className="row d-flex">
            <div className="col">
              <Card
                cardSubtitle="Total User"
                cardTitle="17.000"
                src={iconCardUser}
              />
            </div>

            <div className="col">
              <Card
                cardSubtitle="Total Dokter"
                cardTitle="17.000"
                src={iconCardDokter}
              />
            </div>

            <div className="col">
              <Card
                cardSubtitle="Dokter Aktif"
                cardTitle="250"
                src={iconCardDokter}
              />
            </div>

            <div className="col">
              <Card
                cardSubtitle="Total Dokter"
                cardTitle="17.000"
                src={iconCardDokter}
              />
            </div>
          </div>

          {/* Data-Table */}
          <div className="card my-3  px-4 py-4 border-0">
            <div className="d-flex mb-1 justify-content-between">
              <div className="mx-3 d-flex align-items-center fw-semibold fs-4">
                Data Dokter
              </div>
              <div className="d-flex gap-2">
                <div>
                  <div className="form-outline mb-4">
                    <input
                      type="search"
                      className="form-control"
                      id="datatable-search-input"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div>
                  <div className="form-outline mb-4">
                    <button className="form-control">Filter</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <table {...getTableProps()}>
                <thead className="border-top border-bottom">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => (
                          <td {...cell.getCellProps()}>
                            {" "}
                            {cell.render("Cell")}{" "}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layouts>
    </>
  );
};

export default ManageDokter;
