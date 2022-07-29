import styles from './Login.module.css';

function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.loginContainer}>
                <h3 className={styles.loginHeader}>Welcome to React Chat!</h3>
                <form className={styles.loginForm}>
                    <div className={styles.formContainer}>
                        <div className={styles.inputContainer}>
                            <label>Username:</label>
                            <input type="text" required></input>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Password:</label>
                            <input type="password" required></input>
                        </div>
                    </div>
                    <button className={styles.submitButton} type='submit'>Log in</button>
                </form>
                <span className={styles.toRegister}>Don't have an account?</span>
            </div>
        </div>
    );
}

export default Login;