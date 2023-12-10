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
