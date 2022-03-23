import React from "react";
import "./Dialogs.modules.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  upDateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../Redux/dialogsReduser";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((dialogs) => (
    <DialogItem name={dialogs.name} id={dialogs.id} />
  ));

  let messagesElements = state.message.map((message) => (
    <Message message={message.message} />
  ));
  let newMessageBody = state.newMessageBody;
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.store.dispatch(upDateNewMessageBodyCreator(body));
  };

  return (
    <div className="dialogs">
      <div className="dialogItems">{dialogsElements}</div>
      <div className="messages">{messagesElements}</div>
      <div>
        <div>
          <textarea
            onChange={onNewMessageChange}
            value={newMessageBody}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
