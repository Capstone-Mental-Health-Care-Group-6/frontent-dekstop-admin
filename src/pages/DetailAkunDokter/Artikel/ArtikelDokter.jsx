import React from "react";
import Layouts from "../../../Layouts/Layouts";
import LayoutDetailDokter from "../../../Layouts/LayoutDetailDokter/LayoutDetailDokter";
import DetailDokterCard from "../../../components/Fragments/card/detail-dokter-card/DetailDokterCard";
import ArtikelCard from "../../../components/Fragments/card/artikel-card/ArtikelCard";
import { artikeldokter } from "../../../../image";
import { useParams } from "react-router-dom";
import { dataDokter } from "../../../components/DataDokter/dataDokter";
import { useLogin } from "../../../hooks/useLogin";

const ArtikelDokter = () => {
  useLogin();
  const { id } = useParams();
  const dokter = dataDokter.find((dokter) => dokter.id === parseInt(id));
  return (
    <>
      <Layouts titlePage={"Detail Akun Dokter"}>
        <LayoutDetailDokter>
          <DetailDokterCard>
            <div>
              <div className="title-card">
                <p>Daftar Artikel</p>
              </div>
              <div className="d-flex flex-column gap-5">
                <div className="d-flex gap-4">
                  <ArtikelCard
                    imageartikel={artikeldokter}
                    title="Judul Artikel"
                    caption="Write an amazing description in this dedicated card section. Each word counts. "
                  />
                  <ArtikelCard
                    imageartikel={artikeldokter}
                    title="Judul Artikel"
                    caption="Write an amazing description in this dedicated card section. Each word counts. "
                  />
                </div>
                <div className="d-flex gap-4">
                  <ArtikelCard
                    imageartikel={artikeldokter}
                    title="Judul Artikel"
                    caption="Write an amazing description in this dedicated card section. Each word counts. "
                  />
                  <ArtikelCard
                    imageartikel={artikeldokter}
                    title="Judul Artikel"
                    caption="Write an amazing description in this dedicated card section. Each word counts. "
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

export default ArtikelDokter;
