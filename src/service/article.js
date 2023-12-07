import { axiosInterceptor } from "./axiosInterceptor";

export const getAllArticle = (callback) => {
    axiosInterceptor.get('/article/categories')
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
}
