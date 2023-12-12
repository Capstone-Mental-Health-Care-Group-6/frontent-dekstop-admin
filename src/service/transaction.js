import { axiosInterceptor } from "./axiosInterceptor";

export const getAllTransaction = (callback) => {
    axiosInterceptor.get('/transaksi')
        .then((res) => {
            callback(res.data.data)
        }).catch((err) => {
            console.log(err);
        });
}