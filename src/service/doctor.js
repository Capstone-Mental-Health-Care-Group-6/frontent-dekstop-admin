import { axiosInterceptor } from "./axiosInterceptor";

export const getAllDoctor = (callback) => {
  axiosInterceptor
    .get("/doctor")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDoctorById = ({ callback, id }) => {
  axiosInterceptor
    .get(`/doctor/${id}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDashboardDoctor = (callback) => {
  axiosInterceptor
    .get("/doctor/dashboard")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
