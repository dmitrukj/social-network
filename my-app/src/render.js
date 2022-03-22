import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { addPost } from "./Redux/state";
import { upDateNewPostText } from "./Redux/state";

//addPost("ggggggggg");
export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        upDateNewPostText={upDateNewPostText}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
reportWebVitals();
