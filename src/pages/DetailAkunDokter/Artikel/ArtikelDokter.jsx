import React from "react";
import Layouts from "../../../Layouts/Layouts";
import LayoutDetailDokter from "../../../Layouts/LayoutDetailDokter/LayoutDetailDokter";
import DetailDokterCard from "../../../components/Fragments/card/detail-dokter-card/DetailDokterCard";

const ArtikelDokter = () => {
  return (
    <>
      <Layouts titlePage={"Detail Akun Dokter"}>
        <LayoutDetailDokter>
          <DetailDokterCard>
            <div className="title-card">
              <p>Artikel</p>
            </div>
          </DetailDokterCard>
        </LayoutDetailDokter>
      </Layouts>
    </>
  );
};

export default ArtikelDokter;
