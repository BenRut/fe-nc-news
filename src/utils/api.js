const axios = require('axios');

export const fetchArticles = (topic, sort_by, order) => {
  return axios
    .get(`https://ben-rut-nc-news.herokuapp.com/api/articles`, {
      params: {
        topic,
        sort_by,
        order
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

export const updateVotes = (id, inc_votes, endpoint) => {
  return axios.patch(
    `https://ben-rut-nc-news.herokuapp.com/api/${endpoint}/${id}`,
    { inc_votes }
  );
};

export const fetchCommentsByArticleId = article_id => {
  return axios
    .get(
      `https://ben-rut-nc-news.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const postComment = (article_id, username, body) => {
  return axios.post(
    `https://ben-rut-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
    { username, body }
  );
};

export const deleteComment = comment_id => {
  return axios.delete(
    `https://ben-rut-nc-news.herokuapp.com/api/comments/${comment_id}`
  );
};
