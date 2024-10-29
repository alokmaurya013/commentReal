const db = require('../config/db');

// Fetch all comments
const getComments = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM comments ORDER BY timestamp DESC');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching comments:', err); // Log the error for debugging
    res.status(500).json({ message: 'Error fetching comments' });
  }
};

// Post a new comment and broadcast it
const postComment = (io) => async (req, res) => {
  const { username, comment } = req.body;

  if (!username || !comment) {
    return res.status(400).json({ message: 'Username and comment are required' });
  }

  const newComment = { username, comment, timestamp: new Date() };

  try {
    // Insert the new comment into the database
    const result = await db.query('INSERT INTO comments (username, comment, timestamp) VALUES (?, ?, ?)', [username, comment, newComment.timestamp]);
    
    const commentId = result[0].insertId;
    const commentData = { id: commentId, username, comment, timestamp: newComment.timestamp };
    
    // Emit the new comment to all connected clients via Socket.IO
    io.emit('new-comment', commentData);

    // Return the new comment as the response
    res.status(201).json(commentData);
  } catch (err) {
    console.error('Error posting comment:', err);
    res.status(500).json({ message: 'Error posting comment' });
  }
};

module.exports = { getComments, postComment };
