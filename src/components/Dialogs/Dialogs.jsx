import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {   

    let dialogsElemets = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElemets = props.state.messages.map(m => <Message message={m.message} id={m.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElemets}
            </div>
            <div className={s.messages}>
                {messagesElemets}
            </div>
        </div>
    );
}

export default Dialogs;