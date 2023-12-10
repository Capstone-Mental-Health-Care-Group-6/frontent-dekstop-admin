import React, { useState } from "react";
import Layouts from "../../Layouts/Layouts";

import { dataPengajuan } from "../../components/DataDokter/DataPengajuan/dataPengajuan";
import PengajuanTable from "../../components/Fragments/PengajuanTable/PengajuanTable";

const PengajuanPraktikDokter = () => {
  const [searchValue, setSearchValue] = useState("");
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
          <PengajuanTable data={dataPengajuan} searchValue={searchValue} />{" "}
        </div>
      </Layouts>
    </>
  );
};

export default PengajuanPraktikDokter;
