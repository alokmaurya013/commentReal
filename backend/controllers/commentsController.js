const db = require('../config/db');

// Get all comments
const getComments = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM comments ORDER BY timestamp DESC');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching comments:', err); // Log the error for debugging
    res.status(500).json({ message: 'Error fetching comments' });
  }
};

// Post a new comment

const postComment = (io) => (req, res) => {
  const { username, comment } = req.body;
  const newComment = { username, comment };
  console.log('post-request on backend controller');
  db.query('INSERT INTO comments SET ?', newComment, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    const commentId = result.insertId;
    const commentData = { id: commentId, username, comment, timestamp: new Date() };
    
    // Emit the new comment to all connected clients
    io.emit('new-comment', commentData);

    return res.status(201).json(commentData);
  });
};

module.exports = { getComments, postComment };

