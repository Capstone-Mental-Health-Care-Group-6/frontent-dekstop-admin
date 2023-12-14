import "./TransaksiUser.style.css";
import Layouts from "../../Layouts/Layouts";
import Card from "../../components/Fragments/card/Card";
import { iconBerhasilCard, iconFGagalCard, iconTertundaCard, iconTransaksiCard, paket1, paket2 } from "../../../image";
import { Link } from "react-router-dom";
import { riwayatTransaksi1 } from "../../components/DataComponents/dataComponents";
import RiwayatTransaksi from "../../components/Fragments/riwayat-transaksi-user/RiwayatTransaksi";
import Button from "../../components/Elements/button/Button";
import PaketTeratas from "../../components/Fragments/paket-teratas/PaketTeratas";
import { useEffect, useState } from "react";
import { getAllTransaction } from "../../service/transaction";


const TransaksiUser = () => {

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getAllTransaction((data) => {
      const shuffledCustomers = shuffleArray(data);
      setCustomers(shuffledCustomers);
    });
  }, []);

  const paymentStatusCount = customers.reduce((acc, transaction) => {
    const status = transaction.payment_status;
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  const shuffleArray = (array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  const formatDate = (isoDate) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = new Date(isoDate).toLocaleDateString('id-ID', options);
    return formattedDate;
  };

  // ini adalah result data random dari customerr
  const displayedCustomers = customers.slice(0, 4);
  console.log(displayedCustomers);

  const styleText = ((status) => {
    if (status === 'A') {
      return 'Paket  Premium'
    } else if (status === 'B') {
      return 'Paket  Instan'
    } else if (status === 2) {
      return 'Accept'
    } else if (status === 5) {
      return 'Pending'
    } else {
      return 'Failed'
    }
  })


  return (
    <Layouts titlePage={"Transaksi User"}>
      <section className="transaksi-user" id="transaksi-user">
        <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4">
          <div className="col" >
            <Card src={iconTransaksiCard} cardSubtitle={'Total Berhasil'} cardTitle={paymentStatusCount[2] || 0} />
          </div>
          <div className="col" >
            <Card src={iconBerhasilCard} cardSubtitle={'Transaksi Berhasil'} cardTitle={paymentStatusCount[2] || 0} />
          </div>
          <div className="col" >
            <Link to={'/admin/transaksi/user/tertunda'}>
              <Card src={iconTertundaCard} cardSubtitle={'Transaksi Tertunda'} cardTitle={paymentStatusCount[5] || 0} />
            </Link>
          </div>
          <div className="col" >
            <Card src={iconFGagalCard} cardSubtitle={'Transaksi Gagal'} cardTitle={paymentStatusCount[4] || 0} />
          </div>
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

            {displayedCustomers.map((item, index) => (
              <div className="d-grid" key={index}>
                <RiwayatTransaksi key={index} name={item.patient_name} date={formatDate(item.created_at)} paket={styleText(item.counseling_type)} doctor={item.doctor_name}
                  status={styleText(item.payment_status)} image={item.patient_avatar} />
              </div>
            ))}
            <div className="d-flex justify-content-center" >
              <Button className={'btn text-primary '} text={'Lihat Semua'} />
            </div>

          </div>
        </div>
      </section>

    </Layouts >
  )
};

export default TransaksiUser;
