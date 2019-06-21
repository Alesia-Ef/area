import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
    <div className={styles.imgBlock}>
        <img className={styles.img} src="https://www.velleminfroy.com/wp-content/uploads/2014/05/nature-velleminfroy.jpg" alt="nature" />
    </div>
    <div className={styles.userBlock}>
      {/* <img className={`${styles.avatar} ${styles.border}`} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg" alt="cat" />
      <div className={styles.description}> description</div> */}
      ava + description
    </div>
    </div>
  )
};

export default ProfileInfo;