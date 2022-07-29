import styles from './Message.module.css';

function Message() {
    return (
        <div className={styles.container}>
            <span className={styles.message}>Hello!</span>
            <div className={styles.messageData}>
                <span className={styles.messageInfo}>time</span>
                <span className={styles.messageInfo}> from </span>
                <span className={styles.messageInfo}>You</span>
            </div>
        </div>
    );
}

export default Message;