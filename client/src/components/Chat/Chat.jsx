import styles from './Chat.module.css';
import MessagesList from '../MessagesList/MessagesList';
import InputMessage from '../InputMessage/InputMessage';

function Chat({socket}) {
    return (
        <div className={styles.container}>
                <MessagesList socket={socket} />
                <InputMessage socket={socket} />
        </div>
    );
}

export default Chat;