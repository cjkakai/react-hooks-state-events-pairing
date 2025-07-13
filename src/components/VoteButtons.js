// VoteButtons.js
import React from "react";

function VoteButtons({ upvotes, downvotes, onUpvote, onDownvote }) {
  return (
    <div>
      <button onClick={onUpvote}>👍 {upvotes}</button>
      <button onClick={onDownvote}>👎 {downvotes}</button>
    </div>
  );
}

export default VoteButtons;
