import React from "react";
import Layouts from "../../../Layouts/Layouts";
import DetailDokterCard from "../../../components/Fragments/card/detail-dokter-card/DetailDokterCard";
import LayoutDetailPengajuan from "../LayoutDetailPengajuan";
// import { useParams } from "react-router-dom";
// import { dataDokter } from "../../../components/DataDokter/dataDokter";

const PengalamanPengajuan = () => {
  // const { id } = useParams();
  // const dokter = dataDokter.find((dokter) => dokter.id === parseInt(id));
  return (
    <>
      <Layouts titlePage={"Detail Akun Dokter"}>
        <LayoutDetailPengajuan>
          <DetailDokterCard>
            <div>
              <div className="title-card">
                <p>Pengalaman Dokter</p>
              </div>

              <div className="mt-5">
                <div>
                  <p>Nama Perusahaan</p>
                  <p className="fw-semibold">
                    {/* {peruhasaan} */}
                    Rumah Sakit Siloam
                  </p>
                </div>
                <div>
                  <p>Jabatan</p>
                  <p className="fw-semibold">
                    {/* {jabatan} */}
                    Psikologi
                  </p>
                </div>
                <div>
                  <p>Periode</p>
                  <p className="fw-semibold">
                    {/* {periode} */}
                    12 Agus 2020 - Sekarang
                  </p>
                </div>
              </div>
            </div>
          </DetailDokterCard>
        </LayoutDetailPengajuan>
      </Layouts>
    </>
  );
};

export default PengalamanPengajuan;
