import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        post={props.profilePage.post}
        newPostText={props.profilePage.newPostText}
        addPost={props.addPost}
        upDateNewPostText={props.upDateNewPostText}
      />
    </div>
  );
};

export default Profile;
