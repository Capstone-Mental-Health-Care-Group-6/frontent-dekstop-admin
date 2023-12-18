import { axiosInterceptor } from "./axiosInterceptor";

export const getAllArticleCategories = (callback) => {
  axiosInterceptor
    .get("/article/categories")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllArticle = (callback) => {
  axiosInterceptor
    .get("/articles")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const approveArticle = async (id) => {
  await axiosInterceptor
    .put(`/articles/${id}/publish`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const rejectArticle = async (id) => {
  await axiosInterceptor
    .put(`/articles/${id}/reject`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

