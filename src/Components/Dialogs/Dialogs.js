import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs
  .map(el =>  <DialogItem name={el.name} id={el.id} />);

  let messagesElements = props.state.messages
  .map(el => <Message message={el.message} />)


  return (
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>
        { dialogsElements }
          </div>

        <div className={styles.messages}>
        {messagesElements}
        </div>
      </div>
  )
};

export default Dialogs;