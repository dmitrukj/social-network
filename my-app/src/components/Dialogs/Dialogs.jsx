import React from "react";
import "./Dialogs.modules.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((dialogs) => (
    <DialogItem name={dialogs.name} id={dialogs.id} />
  ));

  let messagesElements = props.state.message.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className="dialogs">
      <div className="dialogItems">{dialogsElements}</div>
      <div className="messages">{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
