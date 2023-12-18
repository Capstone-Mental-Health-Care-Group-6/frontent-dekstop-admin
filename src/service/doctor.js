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
