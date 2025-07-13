import React, { useState } from "react";
import video from "../data/video";
import VideoInfo from "./VideoInfo";
import VoteButtons from "./VoteButtons";
import CommentList from "./CommentList";

function App() {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const [showComments, setShowComments] = useState(true);

  function handleUpvote() {
    setUpvotes((prev) => prev + 1);
  }

  function handleDownvote() {
    setDownvotes((prev) => prev + 1);
  }

  function toggleComments() {
    setShowComments((prev) => !prev);
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />

      <VideoInfo
        title={video.title}
        views={video.views}
        createdAt={video.createdAt}
      />

      <VoteButtons
        upvotes={upvotes}
        downvotes={downvotes}
        onUpvote={handleUpvote}
        onDownvote={handleDownvote}
      />

      <button onClick={toggleComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>

      {showComments && <CommentList comments={video.comments} />}
    </div>
  );
}

export default App;
