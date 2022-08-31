import { setName, setPassword, setPasswordCheck } from '../../slices/user';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Register.module.css';
import ErrorBox from '../ErrorBox/ErrorBox';
import { useState } from 'react';

function Register() {
    const name = useSelector(state => state.user.name);
    const password = useSelector(state => state.user.password);
    const passwordCheck = useSelector(state => state.user.passwordCheck);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [error, setError] = useState(false);
    const [textError, setTextError] = useState('');

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
        // REFACTOR THIS SHIT!!!!
        if (!name) {
            setError(true);
            setTextError('Fill in the username field');
            setTimeout(() => setError(false), 2000);
        } else if (!password) {
            setError(true);
            setTextError('Fill in the password field');
            setTimeout(() => setError(false), 2000);
        } else if (!passwordCheck) {
            setError(true);
            setTextError('Enter your password again');
            setTimeout(() => setError(false), 2000);
        } else if (password !== passwordCheck) {
            setError(true);
            setTextError('Passwords do not match');
            setTimeout(() => setError(false), 2000);
        } else {
            await fetch('http://localhost:9000/register', requestOptions)
                .then(res => res.text())
                .then(text => {
                    switch (text) {
                        case 'User already exists':
                            setError(true);
                            setTextError(text);
                            setTimeout(() => setError(false), 2000);
                            break;
                        case 'Created new user':
                            localStorage.setItem('userName', name);
                            navigate('/chat');
                            navigate(0);
                    }
                });
        }
    }

    return (
        <div className={styles.container}>
            <ErrorBox isError={error} textError={textError} />
            <div className={styles.registerContainer}>
                <h3 className={styles.registerHeader}>Create account</h3>
                <form className={styles.registerForm}>
                    <div className={styles.formContainer}>
                        <div className={styles.inputContainer}>
                            <label>Username:</label>
                            <input type="text" required onChange={e => dispatch(setName(e.target.value))}></input>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Password:</label>
                            <input type="password" required onChange={e => dispatch(setPassword(e.target.value))}></input>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Re-enter password:</label>
                            <input type="password" required onChange={e => dispatch(setPasswordCheck(e.target.value))}></input>
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