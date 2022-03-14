import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";

import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="images/social.jpg" alt="social" />
      </div>
      <div>ava</div>
      <MyPosts />
      <Post />
      <Post />
    </div>
  );
};

export default Profile;
