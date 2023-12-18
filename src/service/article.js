    import { axiosInterceptor } from "./axiosInterceptor";

export const getAllArticleCategories = (callback) => {
    axiosInterceptor.get('/article/categories')
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
}

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
  