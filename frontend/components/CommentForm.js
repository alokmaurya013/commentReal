import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const CommentForm = ({ username, setNewComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const commentData = { username, comment };
    await axios.post('/api/comments', commentData);

    setComment('');
    setNewComment(commentData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Your Comment"
        variant="outlined"
        fullWidth
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default CommentForm;
