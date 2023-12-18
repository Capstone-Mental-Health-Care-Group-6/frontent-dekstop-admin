import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Layouts from "../../Layouts/Layouts";
import { dataArtikel } from "../ManageArtikel/dataArtikel";
import "./DetailArtikel.style.css";
import Button from "../../components/Elements/button/Button";
import { IoMdInformationCircleOutline } from "react-icons/io";
import ModalAlert from "../../components/Fragments/modal-alert/ModalAlert";
import toast from "react-hot-toast";

const DetailArtikel = () => {
  const [artikel, setArtikel] = useState([]);
  const param = useParams();

  const fetchId = param.id;

  const [notifArtikel, setNotifArtikel] = useState(true);

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

  const terimaToast = () => toast .success('Artikel sukses dipublikasikan dan siap dinikmati oleh banyak pembaca.', {
    duration: 4000,
    position: 'bottom-center',
    className: "terima-artikel-toast",
        style: {
          maxWidth: "700px",
          marginBottom: "5%",
        },

    // Aria
    ariaProps: {
        role: 'status',
        'aria-live': 'polite',
    },
});

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
    setArtikel(dataArtikel[fetchId - 1]);
  }, [fetchId]);

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
                  setNotifArtikel(false);
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
                  setNotifArtikel(false);
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
      {/* <ModalAlert id={"confirm-artikel"}></ModalAlert> */}
      <div className="card">
        <div className="card-body m-4">
          <h4 className="fw-bold">{artikel.judul}</h4>
          <div className=" details d-flex my-4  ">
            <div className="me-2 kategori-div ">
              {artikel.kategori &&
                artikel.kategori.map((item, index) => (
                  <div key={index} className="d-inline-block">
                    <div className="kategori-div-template-detail">
                      <p className="kategori-text-template-detail m-0">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
            <div className="author-div mx-2 d-flex align-items-center">
              <p className="subtitle-text ">Ditinjau oleh {artikel.author}</p>
            </div>
            <div className="tanggal-div  d-flex align-items-center ">
              <p className="subtitle-text ps-2"> {artikel.tanggal} </p>
            </div>
          </div>
          <img
            className="w-100"
            src="data:image/jpeg;base64,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"
            alt={`gambar-${artikel.judul}`}
          />
          <p className="my-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            architecto consequuntur est quam facere iure exercitationem
            voluptatum veritatis expedita repellat minus, impedit, id ullam
            voluptate tempore ea illum, possimus quisquam nobis. Ipsa, eligendi.
            Est officia nihil voluptatibus dolor ipsam ipsum odit eligendi
            sapiente minus assumenda natus sed iure asperiores quo tenetur,
            cupiditate vel laborum, ab ex? Animi, totam. Corporis, id possimus
            beatae optio nostrum ullam! Optio nisi officia facilis dolorem in,
            consequatur vitae, ipsa autem provident quaerat voluptatibus maxime
            numquam rerum! Cum veniam explicabo suscipit id similique,
            aspernatur voluptas accusamus, hic incidunt nostrum reiciendis est
            pariatur voluptatum facere, tempora nihil! Numquam reprehenderit
            iste nihil repellat qui eaque mollitia, animi aliquam? Corporis
            magnam sequi, minima reiciendis animi, quod officia atque placeat
            velit cum labore itaque totam eveniet culpa ut dolores impedit
            explicabo! Saepe voluptatibus tenetur maiores, asperiores optio
            velit culpa sint? Ea, possimus voluptatum modi natus provident eius
            nulla eos eum adipisci numquam vero, in itaque ullam velit
            consequuntur corrupti nobis sint blanditiis tempora perspiciatis.
            Delectus amet autem, asperiores deleniti possimus sit consequatur
            eaque earum recusandae nemo perferendis quod sed facere reiciendis?
            Impedit aliquam numquam molestiae. Ab, temporibus aliquid quisquam
            quos odio fuga corrupti velit sint expedita vero incidunt atque
            tempore officia recusandae eius cumque illo blanditiis. Laudantium
            cumque dolorum culpa iure amet facere reprehenderit ex est ipsam
            veritatis atque perferendis, nihil nesciunt vero provident esse
            vitae eum quis similique. Asperiores eos quas minus voluptatibus
            unde voluptas impedit commodi, laboriosam ullam eius molestiae
            corrupti, amet quam ducimus similique doloribus architecto placeat
            aliquam, sit nemo nisi temporibus? Quaerat enim soluta, voluptas
            iste temporibus corrupti quasi asperiores. Nemo assumenda, esse
            commodi nam sapiente fugiat fuga! Quas beatae voluptas in soluta!
            Commodi enim sunt necessitatibus quod, earum, voluptate adipisci
            molestiae tempore illum laborum ut cupiditate! Maxime perspiciatis
            sint dolores? Doloribus eius exercitationem, sunt fugit in veniam
            laboriosam obcaecati natus assumenda id repellat recusandae beatae
            possimus, ducimus quas. Ipsum, rerum nesciunt. Vitae sequi adipisci
            modi, quaerat provident unde alias quos repudiandae molestiae est. A
            quaerat voluptatum pariatur, tenetur aut amet mollitia fuga. Quia
            non, sed odit, dicta id unde suscipit laudantium vitae accusamus
            distinctio natus officia minima dolore a amet quaerat obcaecati quae
            deleniti dolorum quos facere voluptatibus. Vel veritatis vitae
            sapiente aut voluptates maiores, quaerat fugit, iure magni ad veniam
            qui quae tempora, itaque eaque ratione minima laudantium nostrum
            sunt dolorum reiciendis facere odio amet. Hic temporibus maxime
            officiis ab porro sapiente eos possimus asperiores veritatis optio
            ipsam consectetur beatae, amet, voluptatum voluptatem veniam
            expedita maiores laudantium, illum commodi ducimus nesciunt
            distinctio? Quod expedita recusandae sunt quibusdam accusantium
            reiciendis earum necessitatibus, ut, blanditiis, voluptatum sint
            molestias! Neque, odit alias! Debitis a doloribus, quia hic impedit
            corporis in omnis delectus eos assumenda maxime ex ad harum nesciunt
            doloremque voluptatum sequi vitae sapiente iure qui expedita
            nostrum! Deleniti animi culpa nobis unde! Cupiditate sit, alias
            possimus quod deserunt ullam quia aut architecto optio tempore
            repellendus. Doloremque ipsam harum deleniti voluptatum, non
            laboriosam veritatis labore blanditiis quidem reiciendis iure maxime
            nesciunt aut fuga odit cupiditate minima perferendis.
          </p>
        </div>
      </div>
      <Toaster />
    </Layouts>
  );
};

export default DetailArtikel;
