import React from "react";
import Layouts from "../../../Layouts/Layouts";
import LayoutDetailDokter from "../../../Layouts/LayoutDetailDokter/LayoutDetailDokter";
import DetailDokterCard from "../../../components/Fragments/card/detail-dokter-card/DetailDokterCard";
import { useLogin } from "../../../hooks/useLogin";

const DokumenDokter = () => {
  useLogin();
  return (
    <>
      <Layouts titlePage={"Detail Akun Dokter"}>
        <LayoutDetailDokter>
          <DetailDokterCard>
            <div>
              <div classNameName="title-card">
                <p>Dokumen</p>
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
        </LayoutDetailDokter>
      </Layouts>
    </>
  );
};

export default DokumenDokter;
