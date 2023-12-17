import { axiosInterceptor } from "./axiosInterceptor";

export const getAllPatient = (callback) => {
  axiosInterceptor
    .get("/patient/dashboard")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllManageUser = (callback) => {
  axiosInterceptor
    .get("/patient")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDetailPatient = (id, callback) => {
  axiosInterceptor
    .get(`/patient/account/${id}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateStatusAkunPatient = (id, status, callback) => {
  axiosInterceptor
    .put(`/patient/update/${id}/status`, { status })
    .then((res) => {
      console.log(res);
      callback(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
