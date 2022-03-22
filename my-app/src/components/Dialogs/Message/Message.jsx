import React from "react";
import "./../Dialogs.modules.css";

const Message = (props) => {
  let newMessageElements = React.createRef();
  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newMessageElements.current.value;
    props.upDateNewPostText(text);
  };
  return (
    <div className="message">
      <div>
        <textarea
          onChange={onPostChange}
          ref={newMessageElements}
          value={props.newPostText}
        ></textarea>
        <button onClick={addPost}>нажми меня</button>
      </div>
      {props.message}
    </div>
  );
};

export default Message;
