import React from "react";
import Layouts from "../../../Layouts/Layouts";
import LayoutDetailDokter from "../../../Layouts/LayoutDetailDokter/LayoutDetailDokter";
import DetailDokterCard from "../../../components/Fragments/card/detail-dokter-card/DetailDokterCard";
import "./informasiDokter.style.css";

const DetailAkunDokter = () => {
  return (
    <div>
      <Layouts titlePage={"Detail Akun Dokter"}>
        <LayoutDetailDokter>
          <DetailDokterCard>
            <div className="fs-3 fw-bold">Informasi Umum</div>
            <div className="d-flex flex-row gap-5">
              <div className="informasi-umum1 d-flex flex-column gap-3">
                <div className="">
                  ID Akun <br />
                  <span className="fw-semibold">{/* {id} */} 1234567890</span>
                </div>
                <div>
                  Nama Lengkap <br />
                  <span className="fw-semibold">
                    {/* {namaLengkap} */} Lika Angelina
                  </span>
                </div>
                <div>
                  No Telp <br />
                  <span className="fw-semibold">
                    {/* {notelp} */} 08123456789
                  </span>
                </div>
                <div>
                  Email <br />
                  <span className="fw-semibold">
                    {/* {email} */} leao90@gmail.com
                  </span>
                </div>
              </div>
              <div className="d-flex flex-column gap-3">
                <div>
                  NIK <br />
                  <span className="fw-semibold">
                    {/* {nik} */} 1927391782039
                  </span>
                </div>
                <div>
                  Tanggal Lahir <br />
                  <span className="fw-semibold">
                    {/* tanggalLahir */} 08 September 1996
                  </span>
                </div>
                <div>
                  Asal Kota <br />
                  <span className="fw-semibold">{/* {asalKota} */} Solo</span>
                </div>
                <div>
                  Jenis Kelamin <br />
                  <span className="fw-semibold">
                    {/* {jenisKelamin} */} Perempuan
                  </span>
                </div>
              </div>
            </div>
            <div></div>
          </DetailDokterCard>
        </LayoutDetailDokter>
      </Layouts>
    </div>
  );
};

export default DetailAkunDokter;
