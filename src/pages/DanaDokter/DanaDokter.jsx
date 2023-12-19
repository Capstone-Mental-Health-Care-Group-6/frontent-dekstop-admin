import React, { useEffect, useState } from "react";
import Layouts from "../../Layouts/Layouts";
import "./DanaDokter.style.css";
import Search from "../../components/Elements/SearchManageUser/SearchManageUser";
import TablePencairanSaldo from "../../components/Fragments/TablePencairanSaldo/TablePencairanSaldo";
import { dataTableDanaDokter } from "../../components/DataComponents/dataComponents";
import { searchFailed } from "../../../image";
import { getAllWithDraw } from "../../service/withDraw";
import { useLogin } from "../../hooks/useLogin";
import Skeleton from "react-loading-skeleton";

const DanaDokter = () => {
  useLogin();
  const [searchValue, setSearchValue] = useState(""); // State untuk nilai pencarian
  const [dataTableDanaDokter, setDataTableDanaDokter] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllWithDraw((data) => {
      setDataTableDanaDokter(data.data);
      setLoading(false);
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value); // Fungsi untuk menangani perubahan input pencarian
  };

  return (
    <Layouts titlePage={"Dana Dokter"}>
      <section className="wrapper__dana__dokter bg-white rounded-3">
        <div className="d-flex p-3 align-items-center justify-content-between">
          <h5 className="fw-semibold">Tabel Pencairan Dana Dokter</h5>
          <Search
            size={20}
            placeholder={"Search"}
            value={searchValue}
            onChange={handleSearchChange}
          />
        </div>

        {!loading ? (
          dataTableDanaDokter.length === 0 ? (
            <div className="dana__dokter__kosong d-flex align-items-center justify-content-center flex-column">
              <img src={searchFailed} alt="img-pasien-kosong" />
              <h5 className="fw-semibold">
                Tidak ada data pencairan dana dokter
              </h5>
              <p>
                Maaf, Saat ini belum ada data request pencairan dana dokter yang
                tersedia. Ini bisa jadi karena belum ada dokter yang mengajukan
                pencairan dana atau data pencairan sedang dimuat.
              </p>
            </div>
          ) : (
            <TablePencairanSaldo
              data={dataTableDanaDokter}
              searchValue={searchValue}
            />
          )
        ) : (
          <Skeleton height={60} count={6} />
        )}
      </section>
    </Layouts>
  );
};

export default DanaDokter;
