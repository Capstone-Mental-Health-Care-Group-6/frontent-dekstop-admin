import { axiosInterceptor } from "./axiosInterceptor";

export const getAllTransaction = (callback) => {
    axiosInterceptor.get('/transaksi')
        .then((res) => {
            callback(res.data.data)
        }).catch((err) => {
            console.log(err);
        });
}

export const getDetailTransaction = (id, callback) => {
    axiosInterceptor.get(`/transaksi/check/${id}`)
        .then((res) => {
            callback(res.data)
        }).catch((err) => {
            console.log(err);
        });
}