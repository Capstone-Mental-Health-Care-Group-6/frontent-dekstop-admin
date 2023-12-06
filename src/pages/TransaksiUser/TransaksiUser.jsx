import "./TransaksiUser.style.css";
import Layouts from "../../Layouts/Layouts";
import Card from "../../components/Fragments/card/Card";
import { paket1, paket2 } from "../../../image";
import { Link } from "react-router-dom";
import { cardTransaksiUser, riwayatTransaksi1 } from "../../components/DataComponents/dataComponents";
import RiwayatTransaksi from "../../components/Fragments/riwayat-transaksi-user/RiwayatTransaksi";
import Button from "../../components/Elements/button/Button";
import PaketTeratas from "../../components/Fragments/paket-teratas/PaketTeratas";


const TransaksiUser = () => {

  return (
    <Layouts titlePage={"Transaksi User"}>
      <section className="transaksi-user" id="transaksi-user">
        <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4">
          {cardTransaksiUser.map((item, index) => (
            <div className="col" key={index}>
              <Link to={item.location}>
                <Card src={item.image} cardSubtitle={item.text} cardTitle={item.total} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="row row-cols-1 row-cols-lg-2 riwayat-dan-paket" id="riwayat-dan-paket">
        <div className="col">
          <div className="paket-teratas p-4">
            <h4>Paket Teratas</h4>
            <PaketTeratas className={'paket-1 d-flex gap-2 align-items-center'} title={'Paket Konseling'} text={'Instant'} image={paket1} />
            <PaketTeratas className={'paket-2 d-flex gap-2 align-items-center'} title={'Paket Konseling'} text={'Premium'} image={paket2} />
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
            <div className="d-flex justify-content-center" >
              <Button className={'btn text-primary '} text={'Lihat Semua'} />
            </div>

          </div>
        </div>
      </section>

    </Layouts>
  )
};

export default TransaksiUser;
