  const ADD_POST = 'ADD-POST';
  const UPDATE_NEW_POST_TEXT  = 'UPDATE-NEW-POST-TEXT';
  
  let store = {
     _state : {
      profilePage: {
        posts: [
          {id: 1, message: 'Hi, how are you?', likesCount: 12},
          {id: 2, message: 'It"s my first post', likesCount: 23},
        ],
        newPostText: 'some text'
      },
      dialogsPage: {
        dialogs: [
          {id: 1, name: 'John'},
          {id: 2, name: 'Tom'},
          {id: 3, name: 'Victor'},
          {id: 4, name: 'Sara'},
          {id: 5, name: 'Lena'},
          {id: 5, name: 'Valerij'},
        ],
        messages: [
          {id: 1, message: 'Hi'},
          {id: 2, message: 'How is your life?'},
          {id: 3, message: 'Yo'},
          {id: 4, message: 'Yo'},
          {id: 5, message: 'Yo'},
        ],
      },
    },
    _callSubscriber() {
      console.log('state is changed');
    },

    getState() {
      return this._state;
    },
    subscribe (observer) {
      this._callSubscriber = observer; //наблюдатель. паттерн 
    },
    //сделали приватным
    _addPost () {
      let newPost = {
          id: 5,
          message: this._state.profilePage.newPostText,
          likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
      },
      // сделали приватным
    _updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch (action) {
      if (action.type === ADD_POST) {
        this._addPost();
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
        this._updateNewPostText(action.newText);
      }
    }
  }

  export const addPostActionCreator = () => ({
      type: 'ADD-POST'
  })
  
  export const updateNewPostTextActionCreator = (text) => 
  ({ type: 'UPDATE-NEW-POST-TEXT', newText: text })

  export default store;
  window.store = store;
