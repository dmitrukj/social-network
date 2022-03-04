import React from "react";
import classes from "./Post.module.css";

const Post = () => {
  return (
    <div className={classes.posts}>
      <img src="images/ava.jpg" alt="ava" />
      Post
      <span>Like</span>
      <span>disLike</span>
    </div>
  );
};

export default Post;
