import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from '@mui/material';

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.length > 0 ? (
        <List>
          {comments.map((comment) => (
            <div key={comment.id}>
              <ListItem>
                <ListItemText
                  primary={<strong>{comment.username}</strong>}
                  secondary={
                    <>
                      <Typography variant="body1">{comment.comment}</Typography>
                      <Typography variant="caption" color="textSecondary">
                        {new Date(comment.timestamp).toLocaleString()}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      ) : (
        <Typography variant="body1" color="textSecondary">
          No comments yet.
        </Typography>
      )}
    </div>
  );
};

export default CommentList;
