const axios = require('axios');

export const fetchAllArticles = () => {
  return axios
    .get(`https://ben-rut-nc-news.herokuapp.com/api/articles`)
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const fetchTopics = () => {
  return axios
    .get(`https://ben-rut-nc-news.herokuapp.com/api/topics`)
    .then(({ data: { topics } }) => {
      return topics;
    });
};
