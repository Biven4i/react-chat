import styles from './Chat.module.css';
import UsersList from '../UsersList/UsersList';
import MessagesList from '../MessagesList/MessagesList';
import InputMessage from '../InputMessage/InputMessage';

function Chat() {
    return (
        <div className={styles.container}>
            <UsersList />
            <div className={styles.messageBox}>
                <MessagesList />
                <InputMessage />
            </div>
        </div>
    );
}

export default Chat;