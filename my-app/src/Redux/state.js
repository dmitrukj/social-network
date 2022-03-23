let rerenderEntireTree = () => {
  console.log("State change");
};

let state = {
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
};
window.state = state;
export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.post.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};
export let upDateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};
export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};
export default state;
