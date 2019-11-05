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
      console.log(topics);

      return topics;
    });
};

export const fetchSingleArticle = article_id => {
  return axios
    .get(`https://ben-rut-nc-news.herokuapp.com/api/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const fetchArticlesByTopic = slug => {
  return axios
    .get(`https://ben-rut-nc-news.herokuapp.com/api/articles/?topic=${slug}`)
    .then(({ data: { articles } }) => {
      return articles;
    });
};
