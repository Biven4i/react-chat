import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                name,
                password,
             })
        };
        await fetch('http://localhost:9000/login', requestOptions);
    }

    return (
        <div className={styles.container}>
            <div className={styles.loginContainer}>
                <h3 className={styles.loginHeader}>Welcome to React Chat!</h3>
                <form className={styles.loginForm}>
                    <div className={styles.formContainer}>
                        <div className={styles.inputContainer}>
                            <label>Username:</label>
                            <input type="text" required onChange={e => setName(e.target.value)}></input>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Password:</label>
                            <input type="password" required onChange={e => setPassword(e.target.value)}></input>
                        </div>
                    </div>
                    <button className={styles.submitButton} type='submit' onClick={e => handleSubmit(e)}>Log in</button>
                </form>
                <Link to="/register" className={styles.toRegister}>Don't have an account?</Link>
            </div>
        </div>
    );
}

export default Login;