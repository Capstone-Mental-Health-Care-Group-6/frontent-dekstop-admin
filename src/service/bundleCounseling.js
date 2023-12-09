import { axiosInterceptor } from "./axiosInterceptor";

export const getAllBundle = (callback) => {
    axiosInterceptor.get('/bundle')
        .then((res) => {
            callback(res.data)
        }).catch((err) => {
            console.log(err);
        });
}

export const createBundle = (formBundle, callback) => {
    axiosInterceptor.post('/bundle', formBundle, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
        .then((res) => {
            callback(true, res.data);
        })
        .catch((err) => {
            console.log(err);
            callback(false, err.message);
        });
};


export const detailBundle = (id, callback) => {
    axiosInterceptor.get(`/bundle/${id}`)
        .then((res) => {
            callback(res.data)
        }).catch((err) => {
            console.log(err);
        });
}

export const updateBundle = (id, formBundle) => {
    axiosInterceptor.put(`/bundle/${id}`, formBundle)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}


export const deleleBundle = (id) => {
    axiosInterceptor.delete(`/bundle/${id}`)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}