import React from 'react';
import SingleComment from '../SingleComment/SingleComment'; 

const CommentList = ({ comments, onCommentDelete, refreshComment }) => {

  return (
    <div className="comments-list">
      {comments.length === 0 ? (
        <p>Nessun commento disponibile.</p>
      ) : (
        comments.map((comment) => (
          <SingleComment 
            key={comment._id} 
            comment={comment} 
            onDelete={onCommentDelete} 
            refreshComment={refreshComment}
          />
        ))
      )}
    </div>
  );
};

export default CommentList;
