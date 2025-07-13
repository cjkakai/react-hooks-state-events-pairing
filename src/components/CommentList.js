// CommentList.js
import React from "react";

function CommentList({ comments }) {
  return (
    <div>
      <h2>{comments.length} Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h4>{comment.user}</h4>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
