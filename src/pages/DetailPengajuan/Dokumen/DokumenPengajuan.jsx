import React from "react";
import Layouts from "../../../Layouts/Layouts";
import LayoutDetailPengajuan from "../LayoutDetailPengajuan";
import DetailDokterCard from "../../../components/Fragments/card/detail-dokter-card/DetailDokterCard";
import { useLogin } from "../../../hooks/useLogin";

const DokumenPengajuan = () => {
  useLogin();
  return (
    <>
      <Layouts titlePage={"Detail Akun Dokter"}>
        <LayoutDetailPengajuan>
          <DetailDokterCard>
            <div>
              <div classNameName="title-card">
                <p className="fw-semibold">Dokumen</p>
              </div>

              <div>
                <div className="mb-3">
                  <label
                    for="formFileMultiple"
                    className="form-label fw-semibold"
                  >
                    CV/Resume
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="formFileMultiple"
                    multiple
                  />
                </div>

                <div classNameName="mb-3">
                  <label
                    for="formFileMultiple"
                    className="form-label fw-semibold"
                  >
                    Surat Ijin Praktik (SIP)
                  </label>

                  <input
                    className="form-control"
                    type="file"
                    id="formFileMultiple"
                    multiple
                  />
                </div>

                <div className="mb-3">
                  <label
                    for="formFileMultiple"
                    className="form-label fw-semibold"
                  >
                    Ijazah
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="formFileMultiple"
                    multiple
                  />
                </div>
              </div>
            </div>
          </DetailDokterCard>
        </LayoutDetailPengajuan>
      </Layouts>
    </>
  );
};

export default DokumenPengajuan;
