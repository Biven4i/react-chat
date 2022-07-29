import styles from './InputMessage.module.css';

function InputMessage() {
    return (
        <div className={styles.container}>
            <input className={styles.inputMessage} type="text" placeholder='Enter your message...'/>
        </div>
    );
}

export default InputMessage;