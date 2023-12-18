import React, { useEffect, useState } from "react";
import Layouts from "../../Layouts/Layouts";
import { useParams } from "react-router-dom";
import "./TransaksiOtomatis.styles.css";
import ItemDataTransaksi from "../../components/Fragments/item-data-transaksi/ItemDataTransaksi";
import { getDetailTransaction } from "../../service/transaction";
import { useLogin } from "../../hooks/useLogin";

function TransaksiOtomatis() {
  useLogin();
  const id = useParams();
  const idString = String(id.id);
  const [detailTransaction, setDetailTransaction] = useState([]);
  useEffect(() => {
    getDetailTransaction(idString, (data) => {
      setDetailTransaction(data.data);
    });
  }, [id]);

  const styleText = (status) => {
    if (status === "A") {
      return "Paket Konsultasi Premium";
    } else if (status === "B") {
      return "Paket Konsultasi Premium Instan";
    } else if (status === 2) {
      return "Accept";
    } else if (status === 5) {
      return "Pending";
    } else {
      return "Failed";
    }
  };

  return (
    <Layouts titlePage={"Transaksi Tertunda"}>
      <section className="transaksi-otomatis" id="transaksi-otomatis">
        <p className="routes">
          {" "}
          <span>Transaksi</span> / Transaksi Tertunda{" "}
        </p>
        {detailTransaction.map((item, index) => (
          <div
            key={index}
            className="row row-cols-1 row-cols-md-2 detail-wrapper"
          >
            <div className="col">
              <ItemDataTransaksi title={"Nama User"} text={item.patient_name} />
              <ItemDataTransaksi
                title={"Paket Konseling"}
                text={styleText(item.counseling_type)}
              />
              <ItemDataTransaksi
                className={"text-uppercase"}
                title={"Metode Pembayaran"}
                text={item.payment_type}
              />
              <ItemDataTransaksi
                title={"Status Pembayaran"}
                text={styleText(item.payment_status)}
              />
              <ItemDataTransaksi
                title={"ID Transaksi"}
                text={item.transaction_id}
              />
              <ItemDataTransaksi title={"Harga"} text={item.price_counseling} />
            </div>
            <div className="col">
              <ItemDataTransaksi
                title={"Nama Dokter"}
                text={item.doctor_name}
              />
              <ItemDataTransaksi
                title={"Durasi Konseling"}
                text={item.duration_name}
              />
            </div>
          </div>
        ))}
      </section>
    </Layouts>
  );
}

export default TransaksiOtomatis;
