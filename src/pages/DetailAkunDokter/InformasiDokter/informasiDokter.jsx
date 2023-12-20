import React, { useEffect, useState } from "react";
import Layouts from "../../../Layouts/Layouts";
import LayoutDetailDokter from "../../../Layouts/LayoutDetailDokter/LayoutDetailDokter";
import DetailDokterCard from "../../../components/Fragments/card/detail-dokter-card/DetailDokterCard";
import "./informasiDokter.style.css";
import { useParams } from "react-router-dom";
import { dataDokter } from "../../../components/DataDokter/dataDokter";
import { useLogin } from "../../../hooks/useLogin";

const DetailAkunDokter = () => {
  useLogin();
  const { id } = useParams();
  const [dataDokter, setdataDokter] = useState([]);
  const [loading, setLoading] = useState(false);

  // const data = dataDokter.find((item) => item.id === parseInt(id));
  // const data = [];
  useEffect(() => {
    setLoading(true);
    getDoctorById({
      callback: (data) => {
        setdataDokter(data.data);
        setLoading(false); // Log the data after it has been set
      },
      id,
    });
  }, [id]);

  return (
    <div>
      <Layouts titlePage={"Detail Akun Dokter"}>
        <LayoutDetailDokter>
          <DetailDokterCard>
            <div className="d-flex flex-column gap-3">
              <div className="title-card">
                <p>Informasi Umum</p>
              </div>

              <div className="info-card d-flex gap-3">
                <div className="informasi-umum1 d-flex flex-column gap-3">
                  <div className="">
                    ID Akun <br />
                    <span className="fw-semibold">{dataDokter?.id}</span>
                  </div>
                  <div>
                    Nama Lengkap <br />
                    <span className="fw-semibold">
                      {dataDokter?.doctor_name}
                    </span>
                  </div>
                  <div>
                    No Telp <br />
                    <span className="fw-semibold">
                      {dataDokter?.doctor_number_phone}
                    </span>
                  </div>
                  {/* <div>
                    Email <br />
                    <span className="fw-semibold">{dokterEmail}</span>
                  </div> */}
                </div>
                <div className="informasi-umum2 d-flex flex-column gap-3">
                  <div>
                    NIK <br />
                    <span className="fw-semibold">
                      {dataDokter?.doctor_nik}
                    </span>
                  </div>
                  <div>
                    Tanggal Lahir <br />
                    <span className="fw-semibold">
                      {dataDokter?.doctor_dob}
                    </span>
                  </div>
                  <div>
                    Asal Kota <br />
                    <span className="fw-semibold">
                      {dataDokter?.doctor_kota}
                    </span>
                  </div>
                  <div>
                    Jenis Kelamin <br />
                    <span className="fw-semibold">
                      {dataDokter?.doctor_gender}
                    </span>
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
                  {dataDokter?.education?.map((v, i) => {
                    return (
                      <>
                        <div className="">
                          Nama Universitas <br />
                          <span className="fw-semibold">
                            {v.doctor_university}
                          </span>
                        </div>
                        <div className="">
                          Jurusan <br />
                          <span className="fw-semibold">
                            {v.doctor_study_program}
                          </span>
                        </div>
                        <div className="">
                          Periode <br />
                          <span className="fw-semibold">
                            {v.doctor_enroll_year}
                          </span>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </DetailDokterCard>
        </LayoutDetailDokter>
      </Layouts>
    </div>
  );
};

export default DetailAkunDokter;
