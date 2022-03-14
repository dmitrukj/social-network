import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.posts}>
      <img src="images/ava.jpg" alt="ava" />
      {props.message}
      <span>Like</span> {props.likesCount}
    </div>
  );
};

export default Post;
