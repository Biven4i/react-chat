import styles from './Register.module.css';

function Register() {
    return (
        <div className={styles.container}>
            <div className={styles.registerContainer}>
                <h3 className={styles.registerHeader}>Create account</h3>
                <form className={styles.registerForm}>
                    <div className={styles.formContainer}>
                        <div className={styles.inputContainer}>
                            <label>Username:</label>
                            <input type="text" required></input>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Password:</label>
                            <input type="password" required></input>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Re-enter password:</label>
                            <input type="password" required></input>
                        </div>
                    </div>
                    <button className={styles.submitButton} type='submit'>Sign up</button>
                </form>
                <span className={styles.toLogin}>Already have an account?</span>
            </div>
        </div>
    );
}

export default Register;