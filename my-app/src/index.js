import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let post = [
  { id: 1, message: "Hi,how are you?", likesCount: 12 },
  { id: 2, message: "It's my first post", likesCount: 23 },
  { id: 3, message: "what is happening in Ukraine", likesCount: 14 },
];

let message = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Привет" },
  { id: 3, message: "Как дела" },
  { id: 4, message: "Отличная погодка" },
  { id: 5, message: "Что творится в мире" },
  { id: 6, message: "hi" },
  { id: 7, message: "yo" },
];
let dialogs = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Antoha" },
  { id: 3, name: "Svetopusik" },
  { id: 4, name: "Pashanhos" },
  { id: 5, name: "Jenechka" },
  { id: 6, name: "Valera" },
  { id: 7, name: "Denhik" },
];

ReactDOM.render(
  <React.StrictMode>
    <App post={post} message={message} dialogs={dialogs} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
