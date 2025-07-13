function VideoInfo({ title, views, createdAt }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{views.toLocaleString()} Views | Uploaded {createdAt}</p>
    </div>
  );
}

export default VideoInfo;
