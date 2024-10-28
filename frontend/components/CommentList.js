import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
            <strong>{comment.username}</strong>
            <p>{comment.comment}</p>
            <small>{new Date(comment.timestamp).toLocaleString()}</small>
          </div>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default CommentList;
