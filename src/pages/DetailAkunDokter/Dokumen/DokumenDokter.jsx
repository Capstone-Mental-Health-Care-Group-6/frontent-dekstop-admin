import React from "react";
import Layouts from "../../../Layouts/Layouts";
import LayoutDetailDokter from "../../../Layouts/LayoutDetailDokter/LayoutDetailDokter";
import DetailDokterCard from "../../../components/Fragments/card/detail-dokter-card/DetailDokterCard";

const DokumenDokter = () => {
  return (
    <>
      <Layouts titlePage={"Detail Akun Dokter"}>
        <LayoutDetailDokter>
          <DetailDokterCard>
            <div>
              <div className="title-card">
                <p>Dokumen</p>
              </div>

              <div>
                <div class="mb-3">
                  <label for="formFileMultiple" class="form-label fw-semibold">
                    CV/Resume
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    id="formFileMultiple"
                    multiple
                  />
                </div>

                <div class="mb-3">
                  <label for="formFileMultiple" class="form-label fw-semibold">
                    Surat Ijin Praktik (SIP)
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    id="formFileMultiple"
                    multiple
                  />
                </div>

                <div class="mb-3">
                  <label for="formFileMultiple" class="form-label fw-semibold">
                    Ijazah
                  </label>
                  <input
                    class="form-control"
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
