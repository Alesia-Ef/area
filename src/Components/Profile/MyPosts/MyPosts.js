import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../state/state';

const MyPosts = (props) => {
  let postsElements = props.posts.map(p =>  <Post message={p.message} likesCount={p.likesCount} />)

  let newPostItem = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostItem.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  return (
        <div className={styles.postsBox}>
   <h3> My posts </h3>
      <div>
        <div>
        <textarea onChange={ onPostChange } ref={newPostItem} value={props.newPostText} />
        </div>
        <div>
        <button onClick={ addPost }>add post</button>
        </div>
      </div>
      <div className={styles.posts}>
        { postsElements }
      </div>
    </div>
  )
};

export default MyPosts;