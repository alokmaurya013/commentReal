'use client';

import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';
import CommentList from '../../components/CommentList'; // Make sure the path is correct

let socket; // Move the socket variable outside to access it in handlePostComment

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [username, setUsername] = useState(() => localStorage.getItem('username') || '');

  // Initialize Socket.IO client
  useEffect(() => {
    // Initialize socket connection
    socket = io("http://localhost:5000", {
      transports: ["websocket", "polling"],
    });

    fetchComments();

    // Listen for real-time 'new-comment' events
    socket.on('new-comment', (commentData) => {
      setComments((prevComments) => [commentData, ...prevComments]);
    });

    return () => {
      socket.disconnect(); // Disconnect the socket on component unmount
    };
  }, []);

  // Function to fetch all comments from the backend
  const fetchComments = async () => {
    try {
      const { data } = await axios.get('/api/comments');
      setComments(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  // Function to post a new comment
  const handlePostComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      console.log('Posting comment');
      const response = await axios.post('/api/comments', { username, comment: newComment });

      // Emit the new comment to the socket server
      socket.emit('new-comment', response.data);

      setNewComment(''); // Clear the input after posting
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Comments
      </Typography>

      {/* Form to post a new comment */}
      <form onSubmit={handlePostComment} style={{ marginBottom: '20px' }}>
        <TextField
          label="Your comment"
          variant="outlined"
          fullWidth
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
          Post Comment
        </Button>
      </form>

      {/* Display list of comments using CommentList component */}
      <CommentList comments={comments} />
    </Container>
  );
}
