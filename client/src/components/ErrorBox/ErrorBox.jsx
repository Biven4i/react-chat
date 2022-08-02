import styles from './ErrorBox.module.css';
import { CSSTransition } from 'react-transition-group';

function ErrorBox(props) {
    return (
        <div>
            <CSSTransition in={props.isError}
                timeout={300}
                classNames={{
                    enter: styles["error-enter"],
                    enterActive: styles["error-enter-active"],
                    exit: styles["error-exit"],
                    exitActive: styles["error-exit-active"],
                }}
                unmountOnExit
            >
                <div className={styles.errorBox}>
                    <span>{props.textError}</span>
                </div>
            </CSSTransition>
        </div>
    );
}

export default ErrorBox;