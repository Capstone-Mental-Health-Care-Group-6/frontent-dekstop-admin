import "./TransaksiUser.style.css";
import Layouts from "../../Layouts/Layouts";
import Card from "../../components/Fragments/card/Card";
import { iconBerhasilCard, iconFGagalCard, iconTertundaCard, iconTransaksiCard, paket1, paket2 } from "../../../image";
import { Link } from "react-router-dom";
import { riwayatTransaksi1 } from "../../components/DataComponents/dataComponents";
import RiwayatTransaksi from "../../components/Fragments/riwayat-transaksi-user/RiwayatTransaksi";


const TransaksiUser = () => {

  return (
    <Layouts titlePage={"Transaksi User"}>
      <section className="transaksi-user" id="transaksi-user">
        <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4">
          <div className="col">
            <Link to={'/'}>
              <Card src={iconTransaksiCard} cardSubtitle={'Total Berhasil'} cardTitle={'24.000'} />
            </Link>
          </div>
          <div className="col">
            <Card src={iconBerhasilCard} cardSubtitle={'Transaksi Berhasil'} cardTitle={'20.000'} />
          </div>
          <div className="col">
            <Card src={iconTertundaCard} cardSubtitle={'Transaksi Tertunda'} cardTitle={'3900'} />
          </div>
          <div className="col">
            <Card src={iconFGagalCard} cardSubtitle={' Transaksi Gagal'} cardTitle={'100'} />
          </div>
        </div>
      </section>

      <section className="row row-cols-1 row-cols-lg-2 riwayat-dan-paket" id="riwayat-dan-paket">
        <div className="col">
          <div className="paket-teratas p-4">
            <h4>Paket Teratas</h4>
            <div className="paket-1 d-flex gap-2 align-items-center" >
              <img src={paket1} alt="" />
              <div className="d-grid align-items-center">
                <h5> Paket Konseling</h5>
                <span>Instant</span>
              </div>
            </div>

            <div className="paket-2 d-flex gap-2 align-items-center" >
              <img src={paket2} alt="" />
              <div className="d-grid align-items-center">
                <h5> Paket Konseling</h5>
                <span>Premium</span>
              </div>
            </div>

          </div>
        </div>

        <div className="col">
          <div className="riwayat-transaksi p-4">
            <h4>Riwayat Transaksi</h4>

            {riwayatTransaksi1.map((item, index) => (
              <div className="d-grid" key={index}>
                <RiwayatTransaksi key={index} name={item.name} date={item.date} paket={item.paket} doctor={item.doctor}
                  status={item.status} image={item.image} />
              </div>
            ))}


          </div>
        </div>
      </section>

    </Layouts>
  )
};

export default TransaksiUser;
