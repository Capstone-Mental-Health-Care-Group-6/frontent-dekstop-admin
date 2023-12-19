import React from "react";
import Layouts from "../../../Layouts/Layouts";
import DetailDokterCard from "../../../components/Fragments/card/detail-dokter-card/DetailDokterCard";
import "./DetailPengajuan.style.css";
import { useParams } from "react-router-dom";
import { dataPengajuan } from "../../../components/DataDokter/DataPengajuan/dataPengajuan";
import LayoutDetailPengajuan from "../LayoutDetailPengajuan";
import { useLogin } from "../../../hooks/useLogin";

const DetailPengajuan = () => {
  useLogin();
  const { id } = useParams();
  const dokter = dataPengajuan.find((dokter) => dokter.id === parseInt(id));

  return (
    <div>
      <Layouts titlePage={"Detail Akun Dokter"}>
        <LayoutDetailPengajuan>
          <DetailDokterCard>
            <div className="d-flex flex-column gap-3">
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

              <div className="sb sb-5">
                <hr className="section-break-5" />
              </div>

              <div className="title-card">
                <div>
                  <p>Informasi Akademik</p>
                </div>
              </div>

              <div>
                <div className="informasi-umum1 d-flex flex-column gap-3">
                  <div className="">
                    Nama Universitas <br />
                    <span className="fw-semibold">{dokter.university}</span>
                  </div>
                  <div className="">
                    Jurusan <br />
                    <span className="fw-semibold">{dokter.departement}</span>
                  </div>
                  <div className="">
                    Periode <br />
                    <span className="fw-semibold">{dokter.period}</span>
                  </div>
                </div>
              </div>
            </div>
          </DetailDokterCard>
        </LayoutDetailPengajuan>
      </Layouts>
    </div>
  );
};

export default DetailPengajuan;
