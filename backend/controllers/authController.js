
const { v4: uuidv4 } = require('uuid'); 
const db = require('../config/db');

exports.login = (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }
  
  const sessionId = uuidv4();

  res.json({ sessionId, username });
};
