const express = require('express');
const { getComments, postComment } = require('../controllers/commentsController');

const router = express.Router();

module.exports = (io) => {
  router.get('/comments', getComments); // GET /api/comments
  router.post('/comments', postComment(io)); // POST /api/comments
  return router;
};
