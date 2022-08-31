import styles from './InputMessage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setMessageText } from '../../slices/message';
import { useEffect, useRef } from 'react';

function InputMessage({ socket }) {
    const message = useSelector(state => state.message.messageText);
    const user = localStorage.getItem('userName');
    const dispatch = useDispatch();
    const inputEl = useRef(null);
    function sendMessage(e) {
        if (e.key === 'Enter') {
            if (message.trim() !== '') {
                socket.emit('message', message, user);
                dispatch(setMessageText(''));
            }
        }
    }

    useEffect(() => {
        inputEl.current.focus();
    });

    return (
        <div className={styles.container}>
            <input 
                ref={inputEl}
                className={styles.inputMessage} 
                type="text" 
                placeholder='Enter your message...'
                value={message}
                onChange={e => dispatch(setMessageText(e.target.value))}
                onKeyUp={e => sendMessage(e)}
            />
        </div>
    );
}

export default InputMessage;