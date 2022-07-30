import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Register.module.css';

function Register() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

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
        await fetch('http://localhost:9000/register', requestOptions);
    }

    return (
        <div className={styles.container}>
            <div className={styles.registerContainer}>
                <h3 className={styles.registerHeader}>Create account</h3>
                <form className={styles.registerForm}>
                    <div className={styles.formContainer}>
                        <div className={styles.inputContainer}>
                            <label>Username:</label>
                            <input type="text" required onChange={e => setName(e.target.value)}></input>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Password:</label>
                            <input type="password" required onChange={e => setPassword(e.target.value)}></input>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Re-enter password:</label>
                            <input type="password" required onChange={e => setPasswordCheck(e.target.value)}></input>
                        </div>
                    </div>
                    <button className={styles.submitButton} type='submit' onClick={e => handleSubmit(e)}>Sign up</button>
                </form>
                <Link to="/login" className={styles.toLogin}>Already have an account?</Link>
            </div>
        </div>
    );
}

export default Register;