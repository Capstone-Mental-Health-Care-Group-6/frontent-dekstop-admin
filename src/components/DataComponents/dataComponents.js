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
        location: '/admin-transaksi-user/transaksi-tertunda',
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

export const CustomerService = {
    getData() {
        return [
            {
                id: 1000,
                name: 'James Butt',
                id_transaksi: 222,
                paket_langganan: 'Paket Instan',
                status_pembayaran: 'sudah bayar',
                paket_konseling: 'unqualified',
                metode_pembayaran: true,
                harga: 20.000,
                nama_dokter: 'Dr. Djaja Uhuy',
                durasi_konseling: '60 menit',
            },
            {
                id: 3256,
                name: 'Alice Johnson',
                id_transaksi: 789,
                paket_langganan: 'Paket Instan',
                status_pembayaran: 'sudah bayar',
                paket_konseling: 'unqualified',
                mtode_pembayaran: true,
                harga: 20.000,
                nama_dokter: 'Dr. Djaja Uhuy',
                durasi_konseling: '60 menit',
            },
            {
                id: 1234,
                name: 'Bob Smith',
                id_transaksi: 456,
                paket_langganan: 'Paket Instan',
                status_pembayaran: 'sudah bayar',
                paket_konseling: 'unqualified',
                mtode_pembayaran: true,
                harga: 20.000,
                nama_dokter: 'Dr. Djaja Uhuy',
                durasi_konseling: '60 menit',
            },
            {
                id: 9876,
                name: 'Eva Davis',
                id_transaksi: 654,
                paket_langganan: 'Paket Instan',
                status_pembayaran: 'belum bayar',
                paket_konseling: 'unqualified',
                mtode_pembayaran: true,
                harga: 20.000,
                nama_dokter: 'Dr. Djaja Uhuy',
                durasi_konseling: '60 menit',
            },
            {
                id: 5432,
                name: 'Charlie Wilson',
                id_transaksi: 987,
                paket_langganan: 'Paket Instan',
                status_pembayaran: 'belum bayar',
                paket_konseling: 'unqualified',
                mtode_pembayaran: true,
                harga: 20.000,
                nama_dokter: 'Dr. Djaja Uhuy',
                durasi_konseling: '60 menit',
            },
            {
                id: 6789,
                name: 'David Miller',
                id_transaksi: 321,
                paket_langganan: 'Paket Instan',
                status_pembayaran: 'sudah bayar',
                paket_konseling: 'unqualified',
                mtode_pembayaran: true,
                harga: 20.000,
                nama_dokter: 'Dr. Djaja Uhuy',
                durasi_konseling: '60 menit',
            },
            {
                id: 2345,
                name: 'Fiona Taylor',
                id_transaksi: 135,
                paket_langganan: 'Paket Instan',
                status_pembayaran: 'belum bayar',
                paket_konseling: 'unqualified',
                mtode_pembayaran: true,
                harga: 20.000,
                nama_dokter: 'Dr. Djaja Uhuy',
                durasi_konseling: '60 menit',
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
                .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                .join('&')
            : '';

        return fetch('https://www.primefaces.org/data/customers?' + queryParams).then((res) => res.json());
    }
};

export const dataColumnsTertunda = [
    {
        field: 'name',
        header: 'Name',
    },
    {
        field: 'id_transaksi',
        header: 'ID Transaksi',
    },
    {
        field: 'harga',
        header: 'Harga',
    },
    {
        field: 'paket_langganan',
        header: 'Paket Langganan',
    },
    {
        field: 'status_pembayaran',
        header: 'Status Pembayaran',
    },

]