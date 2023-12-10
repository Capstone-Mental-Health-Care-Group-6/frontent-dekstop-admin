import { axiosInterceptor } from "./axiosInterceptor";

export const getAllWithDraw = (callback) => {
  axiosInterceptor
    .get("/withdraw")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const detailWithDraw = (id, callback) => {
  axiosInterceptor
    .get(`/withdraw/${id}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateStatusWithDraw = (id, fromStatus) => {
  axiosInterceptor
    .put(`/withdraw/${id}/status`, fromStatus)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
