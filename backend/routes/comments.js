const express = require('express');
const { getComments, postComment } = require('../controllers/commentsController');

const router = express.Router();

module.exports = (io) => {
  // Define routes
  router.get('/comments', getComments); // GET /api/comments
  router.post('/comments', postComment(io)); // POST /api/comments with socket instance passed
  
  return router;
};
