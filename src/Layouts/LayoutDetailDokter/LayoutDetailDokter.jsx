import React, { Children } from "react";
import "./LayoutDetailDokter.css";
import DetailDokterItem from "../../components/Elements/DetailDokterItem/DetailDokterItem";
import { avatar1, icon1, icon2, icon3, icon4 } from "../../../image";

const LayoutDetailDokter = ({ children }) => {
  return (
    <>
      <div>
        <div>
          <p>
            Manage Dokter /
            <span className="fw-semibold"> Detail Akun Dokter</span>
          </p>
        </div>
        <div>
          <div className="d-flex flex-row">
            <div className="wrapper">
              <div className="profile-card card py-4 border-0">
                <div className="d-flex justify-items-center">
                  <div className="d-flex justify-items-center px-4">
                    <img className="img-detailDokter" src={avatar1} />
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="grid gap-4">
                      <div className="nameDokter fw-semibold">
                        dr. Lika Angelina
                      </div>
                      <div className="titleDokter">Psikolog Klinis</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detail-dokter-item card mt-4 border-0">
                <div className=" d-grid align-items-stretch">
                  <ul className=" menu d-grid gap-5 py-5 justify-content-center align-items-center mx-auto p-0 ">
                    <DetailDokterItem
                      img={icon1}
                      title="Informasi Dokter"
                      location="/admin-manage-dokter/detail-akun-dokter"
                    />
                    <DetailDokterItem
                      img={icon2}
                      title="Dokumen"
                      location="/admin-manage-dokter/detail-akun-dokter/dokumen"
                    />
                    <DetailDokterItem
                      img={icon3}
                      title="Pengalaman"
                      location="/admin-manage-dokter/detail-akun-dokter/pengalaman"
                    />
                    <DetailDokterItem
                      img={icon4}
                      title="Artikel"
                      location="/admin-manage-dokter/detail-akun-dokter/artikel"
                    />
                    <div className="">
                      <div className="fw-semibold">Status Akun</div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="wrapper mx-5">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutDetailDokter;
