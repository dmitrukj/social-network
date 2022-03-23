import profileReduser from "./profileReduser";
import dialogsReduser from "./dialogsReduser";
import sideBarReduser from "./sideBarReduser";

let store = {
  _state: {
    profilePage: {
      post: [
        { id: 1, message: "Hi,how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 23 },
        { id: 3, message: "what is happening in Ukraine", likesCount: 14 },
      ],
      newPostText: "привет медвед",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Antoha" },
        { id: 3, name: "Svetopusik" },
        { id: 4, name: "Pashanhos" },
        { id: 5, name: "Jenechka" },
        { id: 6, name: "Valera" },
        { id: 7, name: "Denhik" },
      ],
      message: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Привет" },
        { id: 3, message: "Как дела" },
        { id: 4, message: "Отличная погодка" },
        { id: 5, message: "Что творится в мире" },
        { id: 6, message: "hi" },
        { id: 7, message: "yo" },
      ],
      sidebar: {},
    },
  },
  _callSubscriber() {
    console.log("State change");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
    this._state.sideBar = sideBarReduser(this._state.sideBar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.state = store;
