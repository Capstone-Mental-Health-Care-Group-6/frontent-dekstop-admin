import React from "react";
import Layouts from "../../../Layouts/Layouts";
import LayoutDetailDokter from "../../../Layouts/LayoutDetailDokter/LayoutDetailDokter";
import DetailDokterCard from "../../../components/Fragments/card/detail-dokter-card/DetailDokterCard";
import { useLogin } from "../../../hooks/useLogin";
// import { useParams } from "react-router-dom";
// import { dataDokter } from "../../../components/DataDokter/dataDokter";

const PengalamanDokter = () => {
  useLogin();
  // const { id } = useParams();
  // const dokter = dataDokter.find((dokter) => dokter.id === parseInt(id));
  return (
    <>
      <Layouts titlePage={"Detail Akun Dokter"}>
        <LayoutDetailDokter>
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
        </LayoutDetailDokter>
      </Layouts>
    </>
  );
};

export default PengalamanDokter;
