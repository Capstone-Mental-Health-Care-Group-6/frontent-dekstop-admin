import React from "react";
import Layouts from "../../../Layouts/Layouts";
import LayoutDetailDokter from "../../../Layouts/LayoutDetailDokter/LayoutDetailDokter";
import DetailDokterCard from "../../../components/Fragments/card/detail-dokter-card/DetailDokterCard";
import "./informasiDokter.style.css";
import { useParams } from "react-router-dom";
import { dataDokter } from "../../../components/DataDokter/dataDokter";

const DetailAkunDokter = () => {
  const { id } = useParams();
  const dokter = dataDokter.find((dokter) => dokter.id === parseInt(id));

  return (
    <div>
      <Layouts titlePage={"Detail Akun Dokter"}>
        <LayoutDetailDokter>
          <DetailDokterCard>
            <div className="">
              <div className="title-card">
                <p>Informasi Umum</p>
              </div>

              <div className="info-card d-flex gap-3">
                <div className="informasi-umum1 d-flex flex-column gap-3">
                  <div className="">
                    ID Akun <br />
                    <span className="fw-semibold">{dokter.id}</span>
                  </div>
                  <div>
                    Nama Lengkap <br />
                    <span className="fw-semibold">{dokter.doctorName}</span>
                  </div>
                  <div>
                    No Telp <br />
                    <span className="fw-semibold">{dokter.telephone}</span>
                  </div>
                  <div>
                    Email <br />
                    <span className="fw-semibold">{dokter.email}</span>
                  </div>
                </div>
                <div className="informasi-umum2 d-flex flex-column gap-3">
                  <div>
                    NIK <br />
                    <span className="fw-semibold">{dokter.nik}</span>
                  </div>
                  <div>
                    Tanggal Lahir <br />
                    <span className="fw-semibold">{dokter.birth}</span>
                  </div>
                  <div>
                    Asal Kota <br />
                    <span className="fw-semibold">{dokter.hometown}</span>
                  </div>
                  <div>
                    Jenis Kelamin <br />
                    <span className="fw-semibold">{dokter.gender}</span>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </DetailDokterCard>
        </LayoutDetailDokter>
      </Layouts>
    </div>
  );
};

export default DetailAkunDokter;
