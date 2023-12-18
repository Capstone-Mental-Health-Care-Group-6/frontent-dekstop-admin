import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Layouts from "../../Layouts/Layouts";
import { dataArtikel } from "../ManageArtikel/dataArtikel";
import "./DetailArtikel.style.css";
import Button from "../../components/Elements/button/Button";
import { IoMdInformationCircleOutline } from "react-icons/io";
import ModalAlert from "../../components/Fragments/modal-alert/ModalAlert";
import toast, { Toaster } from "react-hot-toast";
import { approveArticle, getAllArticle, rejectArticle } from "../../service/article";
import HtmlParser from "react-html-parser";
import Skeleton from "react-loading-skeleton";

const DetailArtikel = () => {
  const [artikel, setArtikel] = useState([]);
  const [loading, setLoading] = useState(false);
  const param = useParams();

  const id = param.id;

  const [notifArtikel, setNotifArtikel] = useState(false);

  const [selectedButton, setSelectedButton] = useState(null);
  const [textArea, setTextArea] = useState(false);

  const handleButtonClick = (id) => {
    setSelectedButton(id);
    if (id === 4) {
      setTextArea(true);
    } else {
      setTextArea(false);
    }
  };

  const terimaToast = () =>
    toast.success(
      "Artikel sukses dipublikasikan dan siap dinikmati oleh banyak pembaca.",
      {
        duration: 4000,
        position: "bottom-center",
        className: "terima-artikel-toast",
        style: {
          maxWidth: "700px",
          marginBottom: "5%",
        },

        // Aria
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      }
    );

  const tolakToast = () =>
    toast.success(
      "Artikel telah berhasil ditolak. Pemberitahuan ini akan disampaikan kepada Psikolog terkait.",
      {
        duration: 4000,
        position: "bottom-center",
        className: "tolak-artikel-toast",
        style: {
          maxWidth: "700px",
          marginBottom: "5%",
        },

        // Aria
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      }
    );

  useEffect(() => {
    setLoading(true);
    getAllArticle((res) => {
      const filter = res.data.filter((item) => item.id == id);
      const firstFilteredItem = filter.length > 0 ? filter[0] : null;
      setArtikel(firstFilteredItem);
      if (filter[0].status === 'Pending'){
        setNotifArtikel(true)
      } else {
        setNotifArtikel(false)
      }
    });
    setLoading(false);
  }, []);

  const parseData = (dataParam) => {
    const data = dataParam;
    return HtmlParser(String(data));
  };

  const handleApproveArticle = async (id) => {
    await approveArticle(id)
  }

  const handleRejectArticle = async (id) => {
    await rejectArticle(id)
  }

  // console.log(artikel);

  // useEffect(() => {
  //   setLoading(true);
  //   getAllArticle((res) => {
  //     const filter = res.data.filter((item) => item.id == id);
  //     const firstFilteredItem = filter.length > 0 ? filter[0] : null;
  //     setArtikel(firstFilteredItem);
  //     setImage(firstFilteredItem.thumbnail);
  //   });
  //   setLoading(false);
  // }, []);

  return (
    <Layouts titlePage={"Detail Artikel"}>
      <div className="d-flex flex-row">
        <NavLink
          to={"/admin/manage/artikel"}
          className="text-decoration-none text-muted"
        >
          Manage Artikel
        </NavLink>
        <p className="ms-2">/ Detail Artikel</p>
      </div>
      <ModalAlert id={"modal-terima-artikel"}>
        <div className="modal-content p-3">
          <div className="modal-body">
            <button
              type="button"
              className="btn-close float-end"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <p className="fw-bold">Yakin ingin terima pengajuan artikel?</p>
            <div>
              <p>
                Dengan menyetujui, artikel tersebut akan dipublikasikan dan
                dapat diakses oleh pengguna EmpathiCare.
              </p>
            </div>
            <div className="d-flex justify-content-end mt-5 ">
              <Button
                text={"Batal"}
                bsDismiss={"modal"}
                className={
                  "button-tolak-pengajuan-artikel-modal mx-4 py-2 px-3 rounded-3 fw-semibold"
                }
              />
              <Button
                text={"Terima"}
                onClick={() => {
                  handleApproveArticle(id)
                  // setNotifArtikel(false);
                  terimaToast();
                }}
                bsDismiss={"modal"}
                className={
                  "button-terima-pengajuan-artikel-modal py-2 px-3 rounded-3 fw-semibold"
                }
              />
            </div>
          </div>
        </div>
      </ModalAlert>

      <ModalAlert id={"modal-tolak-artikel"}>
        <div className="modal-content p-3">
          <div className="modal-body">
            <button
              type="button"
              className="btn-close float-end"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="row">
              <IoMdInformationCircleOutline size={30} color="blue" />
            </div>
            <p
              className=" subtitle-modal my-3 text-center fw-semibold"
              style={{ fontSize: "16px" }}
            >
              Apakah Anda Yakin Ingin Menolak Publikasi Artikel Ini? Berikan
              Alasan Yang Akan Diberikan Kepada Psikolog
            </p>
            <div>
              <div className="row m-auto">
                <div className="col ps-0">
                  <Button
                    text={"Perlu Revisi Tambahan"}
                    className={`${
                      selectedButton === 1
                        ? "button-pilihan-tolak-biru rounded-2  border-2"
                        : "rounded-2 border-light-subtle border border-2 button-tolak-pengajuan p-2"
                    }`}
                    onClick={() => handleButtonClick(1)}
                  />
                </div>
                <div className="col pe-0">
                  <Button
                    text={"Tidak Sesuai Standar Publikasi"}
                    className={`${
                      selectedButton === 2
                        ? "button-pilihan-tolak-biru rounded-2  border-2"
                        : "rounded-2 border-light-subtle border border-2 button-tolak-pengajuan p-2"
                    }`}
                    onClick={() => handleButtonClick(2)}
                  />
                </div>
              </div>
              <div className="row my-3 mx-0">
                <div className="col-8 gx-2 ps-0">
                  <Button
                    text={"Konten Kurang Relevan Untuk Pembaca"}
                    className={`${
                      selectedButton === 3
                        ? "button-pilihan-tolak-biru rounded-2  border-2"
                        : "rounded-2 border-light-subtle border border-2 button-tolak-pengajuan p-2"
                    }`}
                    onClick={() => handleButtonClick(3)}
                  />
                </div>
                <div className="col-4 pe-0">
                  <Button
                    text={"Alasan Lain"}
                    className={`${
                      selectedButton === 4
                        ? "button-pilihan-tolak-biru rounded-2  border-2"
                        : "rounded-2 border-light-subtle border border-2 button-tolak-pengajuan p-2"
                    }`}
                    onClick={() => handleButtonClick(4)}
                  />
                </div>
              </div>
            </div>
            {textArea ? (
              <div className="my-5">
                <p className="fw-bold">Tuliskan Alasan Penolakan</p>
                <textarea
                  name="alasan-penolakan"
                  id="alasan-penolakan"
                  className="w-100 p-3"
                  rows="2"
                ></textarea>
              </div>
            ) : (
              <div></div>
            )}
            <div className="d-flex justify-content-end mt-5 ">
              <Button
                text={"Batal"}
                bsDismiss={"modal"}
                className={
                  "button-tolak-pengajuan-artikel-modal mx-4 py-2 px-3 rounded-3 fw-semibold"
                }
              />
              <Button
                text={"Tolak Pengajuan"}
                disabled={selectedButton == null}
                onClick={() => {
                  handleRejectArticle(id)
                  // setNotifArtikel(false);
                  tolakToast();
                }}
                bsDismiss={"modal"}
                className={
                  "button-terima-pengajuan-artikel-modal py-2 px-3 rounded-3 fw-semibold"
                }
              />
            </div>
          </div>
        </div>
      </ModalAlert>
      {notifArtikel ? (
        <div className="w-full div-pengajuan rounded-2 mt-2 mb-4 p-4">
          <div className="row">
            <div className="col-1 text-center">
              <IoMdInformationCircleOutline size={25} color="blue" />
            </div>
            <div className="col-10 p-0">
              <p style={{ fontSize: "20px" }} className="fw-semibold mb-1">
                Pengajuan izin publikasi artikel di EmphatiCare
              </p>
              <p style={{ fontSize: "14px" }}>
                Admin EmphatiCare memverifikasi setiap artikel psikolog sebelum
                dipublikasikan untuk memastikan informasi kesehatan mental yang
                akurat dan bermanfaat bagi pembaca.
              </p>
              <div className="row">
                <div className="col-5">
                  <Button
                    text={"Terima Pengajuan Artikel"}
                    id={"modal-terima-artikel"}
                    bsTogle={"modal"}
                    bsTarget={"#modal-terima-artikel"}
                    className={
                      "button-terima-pengajuan-artikel fw-semibold py-2 px-3 rounded-3"
                    }
                  />
                </div>
                <div className="col-4">
                  <Button
                    text={"Tolak Pengajuan"}
                    id={"modal-tolak-artikel"}
                    bsTogle={"modal"}
                    bsTarget={"#modal-tolak-artikel"}
                    className={
                      "button-tolak-pengajuan-artikel fw-semibold py-2 px-3 rounded-3"
                    }
                    // onClick={(e) => {
                    //   setNotifArtikel(false)
                    // }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="card">
        {!loading ? (
          <div className="card-body m-4">
            <h4 className="fw-bold">{artikel.title ? artikel.title : <Skeleton/> }</h4>
            <div className=" details d-flex my-4  ">
              <div className="me-2 kategori-div ">
                <div className="d-inline-block">
                  <div className="kategori-div-template-detail">
                    <p className="kategori-text-template-detail m-0">
                      {artikel.category_name ? artikel.category_name : <Skeleton/>}
                    </p>
                  </div>
                </div>
              </div>
              <div className="author-div mx-2 d-flex align-items-center">
                <p className="subtitle-text ">
                  Ditinjau oleh {artikel.user_name ? artikel.user_name : <Skeleton/>}
                </p>
              </div>
              {/* <div className="tanggal-div  d-flex align-items-center ">
              <p className="subtitle-text ps-2"> {artikel.status} </p>
            </div> */}
            </div>
            <img
              className="w-100"
              src={artikel.thumbnail ? artikel.thumbnail : <Skeleton/>}
              alt={`gambar-${artikel.title}`}
            />
            <p className="my-5 ">{parseData(artikel.content)}</p>
          </div>
        ) : (
          <div>data kosong</div>
        )}
      </div>
      <Toaster />
    </Layouts>
  );
};

export default DetailArtikel;
