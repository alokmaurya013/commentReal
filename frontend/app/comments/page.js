'use client';

import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

let socket;

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [username, setUsername] = useState(() => localStorage.getItem('username') || '');

  // Initialize Socket.IO client
  useEffect(() => {
    const socket = io("http://localhost:5000", {
      transports: ["websocket", "polling"],
    });
    fetchComments();

    // Listen for real-time 'new-comment' events
    socket.on('new-comment', (comment) => {
      setComments((prevComments) => [comment, ...prevComments]);
    });

    return () => {
      socket.disconnect();
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
      console.log('post-comment-try')
      await axios.post('/api/comments', { username, comment: newComment });
      setNewComment(' '); // Clear the input after posting
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <div>
      <h2>Comments</h2>

      {/* Form to post a new comment */}
      <form onSubmit={handlePostComment}>
        <input
          type="text"
          placeholder="Your comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit">Post Comment</button>
      </form>

      {/* Display list of comments */}
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.username}</strong>: {comment.comment}
          </li>
        ))}
      </ul>
    </div>
  );
}
