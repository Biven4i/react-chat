import styles from './Message.module.css';

function Message({ user, message, isSender, time }) {
    return (
        <div className={isSender ? styles.container : `${styles.container} ${styles.sender}`}>
            <span className={styles.message}>{message}</span>
            <div className={styles.messageData}>
                <span className={styles.messageInfo}>{time}</span>
                <span className={styles.messageInfo}> from </span>
                <span className={styles.messageInfo}>{isSender ? 'You' : user}</span>
            </div>
        </div>
    );
}

export default Message;