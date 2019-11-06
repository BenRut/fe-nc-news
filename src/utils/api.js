const axios = require('axios');

export const fetchArticles = topic => {
  return axios
    .get(`https://ben-rut-nc-news.herokuapp.com/api/articles`, {
      params: {
        topic: topic
      }
    })
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

export const fetchSingleArticle = article_id => {
  return axios
    .get(`https://ben-rut-nc-news.herokuapp.com/api/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const updateVotes = (article_id, inc_votes) => {
  return axios.patch(
    `https://ben-rut-nc-news.herokuapp.com/api/articles/${article_id}`,
    { inc_votes }
  );
};
