import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
      <div className={styles.item}>
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="ava" />
      {props.message}
      <div>
      <span>Like</span> {props.likesCount}
      </div>
      </div>
  )
};

export default Post;