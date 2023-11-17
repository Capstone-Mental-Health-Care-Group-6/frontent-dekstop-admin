import { human1, human2, human3, human4, iconBerhasilCard, iconTertundaCard, iconFGagalCard, iconTransaksiCard } from "../../../image";

export const riwayatTransaksi1 = [
    {
        name: "Theresa Webb",
        date: "6 Okt 2023",
        paket: "Paket instan",
        doctor: "Dr. Richard lee",
        status: "Failed",
        image: human1
    },

    {
        name: 'Eleanor Pena',
        date: '6 Okt 2023',
        paket: 'Paket Instan ',
        doctor: 'Dr. Lika angeline',
        status: 'Completed',
        image: human2
    },
    {
        name: 'Jerome Bell',
        date: '6 Okt 2023',
        paket: 'Paket Instan',
        doctor: 'Dr. Djaja Uhuy',
        status: 'Pending',
        image: human3
    },
    {
        name: 'Bessie Cooper',
        date: '6 Okt 2023',
        paket: 'Paket Instan',
        doctor: 'Dr. Yusuf Mansyur',
        status: 'Completed',
        image: human4
    },
]

export const cardTransaksiUser = [
    {
        location: '/',
        image: iconTransaksiCard,
        text: 'Total Berhasil',
        total: '24.000'
    },
    {
        location: '/',
        image: iconBerhasilCard,
        text: 'Transaksi Berhasil',
        total: '20.000'
    },
    {
        location: '/',
        image: iconTertundaCard,
        text: 'Transaksi Tertunda',
        total: '3900'
    },
    {
        location: '/',
        image: iconFGagalCard,
        text: 'Transaksi Gagal',
        total: '100'
    },
]