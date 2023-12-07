import { Link } from "react-router-dom";
import {
  human1,
  human2,
  human3,
  human4,
  iconBerhasilCard,
  iconTertundaCard,
  iconFGagalCard,
  iconTransaksiCard,
  buktiTransfer,
  konsultasiImage,
  konsultasiImage2,
  konsultasiImage3,
  paymentFailed,
} from "../../../image";
import { useState } from "react";
import { useEffect } from "react";

export const dataTableDanaDokter = [
  {
    nama_dokter: "dr. Darlene Robertson",
    idtransaksi: "#1232",
    date: "20/05/2023",
    saldoCair: "Rp 200.000",
    status: "Pending",
    action: "...",
  },
  {
    nama_dokter: "dr. Albert Flores",
    idtransaksi: "#1232",
    date: "20/05/2023",
    saldoCair: "Rp 1.500.000",
    status: "Pending",
    action: "...",
  },
  {
    nama_dokter: "dr. Bessie Cooper",
    idtransaksi: "#1232",
    date: "20/05/2023",
    saldoCair: "Rp 2.000.000",
    status: "Sukses",
    action: "...",
  },
  {
    nama_dokter: "dr. Marvin McKinney",
    idtransaksi: "#1232",
    date: "20/05/2023",
    saldoCair: "Rp 340.000",
    status: "Proses",
    action: "...",
  },
  {
    nama_dokter: "dr. Ralph Edwards",
    idtransaksi: "#1232",
    date: "20/05/2023",
    saldoCair: "Rp 640.000",
    status: "Sukses",
    action: "...",
  },
  {
    nama_dokter: "dr. Esther Howard",
    idtransaksi: "#1232",
    date: "20/05/2023",
    saldoCair: "Rp 2.000.000",
    status: "Sukses",
    action: "...",
  },
  {
    nama_dokter: "dr. Darrell Steward",
    idtransaksi: "#1232",
    date: "20/05/2023",
    saldoCair: "Rp 250.000",
    status: "Sukses",
    action: "...",
  },
  {
    nama_dokter: "dr. Alika Angelina",
    idtransaksi: "#1232",
    date: "20/05/2023",
    saldoCair: "Rp 340.000",
    status: "Sukses",
    action: "...",
  },
];

export const riwayatTransaksi1 = [
  {
    name: "Theresa Webb",
    date: "6 Okt 2023",
    paket: "Paket instan",
    doctor: "Dr. Richard lee",
    status: "Failed",
    image: human1,
  },

  {
    name: "Eleanor Pena",
    date: "6 Okt 2023",
    paket: "Paket Instan ",
    doctor: "Dr. Lika angeline",
    status: "Completed",
    image: human2,
  },
  {
    name: "Jerome Bell",
    date: "6 Okt 2023",
    paket: "Paket Instan",
    doctor: "Dr. Djaja Uhuy",
    status: "Pending",
    image: human3,
  },
  {
    name: "Bessie Cooper",
    date: "6 Okt 2023",
    paket: "Paket Instan",
    doctor: "Dr. Yusuf Mansyur",
    status: "Completed",
    image: human4,
  },
];

export const cardTransaksiUser = [
  {
    location: "/",
    image: iconTransaksiCard,
    text: "Total Berhasil",
    total: "24.000",
  },
  {
    location: "/",
    image: iconBerhasilCard,
    text: "Transaksi Berhasil",
    total: "20.000",
  },
  {
    location: "/admin/transaksi/user/tertunda",
    image: iconTertundaCard,
    text: "Transaksi Tertunda",
    total: "3900",
  },
  {
    location: "/",
    image: iconFGagalCard,
    text: "Transaksi Gagal",
    total: "100",
  },
];

export const CustomerService = {
  getData() {
    return [
      {
        id: 1000,
        name: "James Butt",
        image: human1,
        id_transaksi: 222,
        paket_langganan: "Paket Instan",
        status_pembayaran: "sudah bayar",
        paket_konseling: "unqualified",
        metode_pembayaran: "Otomatis",
        harga: "20.000",
        nama_dokter: "Dr. Djaja Uhuy",
        durasi_konseling: "60 menit",
      },
      {
        id: 3256,
        name: "Alice Johnson",
        image: human2,
        id_transaksi: 789,
        paket_langganan: "Paket Instan",
        status_pembayaran: "sudah bayar",
        paket_konseling: "unqualified",
        metode_pembayaran: "Otomatis",
        harga: "20.000",
        nama_dokter: "Dr. Djaja Uhuy",
        durasi_konseling: "60 menit",
      },
      {
        id: 1234,
        name: "Bob Smith",
        image: human3,
        id_transaksi: 456,
        paket_langganan: "Paket Instan",
        status_pembayaran: "sudah bayar",
        paket_konseling: "unqualified",
        metode_pembayaran: "Otomatis",
        harga: "20.000",
        nama_dokter: "Dr. Djaja Uhuy",
        durasi_konseling: "60 menit",
      },
      {
        id: 9876,
        name: "Eva Davis",
        image: human4,
        id_transaksi: 654,
        paket_langganan: "Paket Instan",
        status_pembayaran: "belum bayar",
        paket_konseling: "unqualified",
        metode_pembayaran: "Otomatis",
        harga: "20.000",
        nama_dokter: "Dr. Djaja Uhuy",
        durasi_konseling: "60 menit",
      },
      {
        id: 5432,
        name: "Charlie Wilson",
        id_transaksi: 987,
        image: human3,
        paket_langganan: "Paket Instan",
        status_pembayaran: "belum bayar",
        paket_konseling: "unqualified",
        metode_pembayaran: "Manual",
        harga: "20.000",
        nama_dokter: "Dr. Djaja Uhuy",
        durasi_konseling: "60 menit",
      },
      {
        id: 6789,
        name: "David Miller",
        id_transaksi: 321,
        image: human4,
        paket_langganan: "Paket Instan",
        status_pembayaran: "sudah bayar",
        paket_konseling: "unqualified",
        metode_pembayaran: "Manual",
        harga: "20.000",
        nama_dokter: "Dr. Djaja Uhuy",
        durasi_konseling: "60 menit",
      },
      {
        id: 2345,
        name: "Fiona Taylor",
        id_transaksi: 135,
        image: human1,
        paket_langganan: "Paket Instan",
        status_pembayaran: "belum bayar",
        paket_konseling: "unqualified",
        metode_pembayaran: "Manual",
        harga: "20.000",
        nama_dokter: "Dr. Djaja Uhuy",
        durasi_konseling: "60 menit",
      },
    ];
  },

  getCustomersSmall() {
    return Promise.resolve(this.getData().slice(0, 10));
  },

  getCustomersMedium() {
    return Promise.resolve(this.getData().slice(0, 50));
  },

  getCustomersLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
  },

  getCustomersXLarge() {
    return Promise.resolve(this.getData());
  },

  getCustomers(params) {
    const queryParams = params
      ? Object.keys(params)
          .map(
            (k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k])
          )
          .join("&")
      : "";

    return fetch(
      "https://www.primefaces.org/data/customers?" + queryParams
    ).then((res) => res.json());
  },
};

export const emptyMessageTransaksiTertunda = (custumers) => {
  if (custumers.length < 1) {
    return (
      <div className="d-grid justify-content-center">
        <div className="w-50 d-grid justify-content-center mx-auto">
          <img className="mx-auto" src={paymentFailed} alt="" />
          <div className="text-justify">
            <h3>Tidak ada data transaksi tertunda</h3>
            <p>
              Maaf, Saat ini belum ada data transaksi tertunda. Ini bisa jadi
              karena user belum melakukan transaksi atau data transaksi user
              sedang dimuat.
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="d-grid justify-content-center">
        <div className="w-100 d-grid justify-content-center mx-auto">
          <img className="mx-auto" src={searchFailed} alt="" />
          <div className="text-justify">
            <h3>Maaf, Pencarian tidak dapat ditemukan</h3>
          </div>
        </div>
      </div>
    );
  }
};

const getValue = (object, path) => {
  const properties = path.split(".");
  return properties.reduce((acc, property) => acc && acc[property], object);
};

const styleName = (rowData) => {
  return (
    <>
      <img
        src={rowData.image}
        style={{ width: "50px", height: "50px", marginRight: "10px" }}
      />

      {rowData.metode_pembayaran === "Otomatis" ? (
        <Link
          to={`/admin/transaksi/user/tertunda/otomatis/${getValue(
            rowData,
            "id"
          )}`}
        >
          {rowData.name}
        </Link>
      ) : (
        <Link
          to={`/admin/transaksi/user/tertunda/detail/${getValue(
            rowData,
            "id"
          )}`}
        >
          {rowData.name}
        </Link>
      )}
    </>
  );
};

const styleStatus = (rowData) => {
  const [changeItemStatus, setChangeItemStatus] = useState("");

  useEffect(() => {
    if (rowData.status_pembayaran === "sudah bayar") {
      setChangeItemStatus("changeItemStatusBayar");
    } else if (rowData.status_pembayaran === "belum bayar") {
      setChangeItemStatus("changeItemStatusBelum");
    } else {
      setChangeItemStatus("");
    }
  });

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={changeItemStatus}>{rowData.status_pembayaran}</div>
      </div>
    </>
  );
};

export const dataColumnsTertunda = [
  {
    field: "name",
    header: "Name",
    body: styleName,
  },
  {
    field: "id_transaksi",
    header: "ID Transaksi",
  },
  {
    field: "harga",
    header: "Harga",
  },
  {
    field: "paket_langganan",
    header: "Paket Langganan",
  },
  {
    field: "status_pembayaran",
    header: "Status Pembayaran",
    body: styleStatus,
  },
];

export const detailDataTransaksi = [
  {
    name: "Rafael Leao",
    paket: "Konseling Premium",
    metode_pembayaran: "Transfer Bank (Manual)",
    status_pembayaran: "Sudah Bayar",
    id_Transaksi: "129834",
    harga: "Rp50.000",
    nama_dokter: "Lika Angelina S.Psi, M.Psi. Psikolog",
    durasi_Konseling: "60 Menit",
    buktiTransfer: buktiTransfer,
  },
];

export const dataCardKonsultasi = [
  {
    image: konsultasiImage,
    paket: "Paket Pekenalan",
    sesi: "Rp 100.000 / 1 Sesi",
    information:
      "Metode Chat, Call, Video Call, atau Zoom,Jadwal bisa disesuaikan dengan kebutuhan,Garansi Ganti Psikolog",
  },
  {
    image: konsultasiImage2,
    paket: "Paket Bikin Nyaman",
    sesi: "Rp 150.000 / 2 Sesi",
    information:
      "Metode Chat, Call, Vidcall, atau Zoom Jadwal bisa disesuai dengan kebutuhan Garansi Ganti Psikolog Masa aktif paket 1 bulan",
  },
  {
    image: konsultasiImage3,
    paket: "Paket Selalu Ingat Dia",
    sesi: "Rp 2.000.000 / 4 Sesi",
    information:
      "Metode Chat, Call, Vidcall, atau Zoom Jadwal bisa disesuai dengan kebutuhan Garansi Ganti Psikolog Masa aktif paket 1 bulan",
  },
];

// const InputKonselingField = [
//     {
//         title: 'Nama Paket',
//         placeholder: 'Masukan Nama',
//         value: 'formdata.value'
//     },
//     {
//         title: 'Harga',
//         placeholder: 'Masukan Harga',
//     },
//     {
//         title: 'Banyak Sesi',
//         placeholder: 'Masukan Jumlah Sesi',
//     },
// ]
