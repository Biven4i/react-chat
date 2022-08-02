import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { setName, setPassword } from '../../slices/user';
import { useDispatch, useSelector } from 'react-redux';
import ErrorBox from '../ErrorBox/ErrorBox';
import { useState } from 'react';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useSelector(state => state.user.name);
    const password = useSelector(state => state.user.password);

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
        if (!name) {
            setError(true);
            setTextError('Fill in the username field');
            setTimeout(() => setError(false), 2000);
        } else if (!password) {
            setError(true);
            setTextError('Fill in the password field');
            setTimeout(() => setError(false), 2000);
        } else {
            await fetch('http://localhost:9000/login', requestOptions)
                .then(res => res.text())
                .then(text => {
                    switch (text) {
                        case 'User does not exist':
                            setError(true);
                            setTextError(text);
                            setTimeout(() => setError(false), 2000);
                            break;
                        case 'Invalid password':
                            setError(true);
                            setTextError(text);
                            setTimeout(() => setError(false), 2000);
                            break;
                        default:
                            navigate('/chat');
                            break;
                    }
                });
        }
    }

    return (
        <div className={styles.container}>
            <ErrorBox isError={error} textError={textError} />
            <div className={styles.loginContainer}>
                <h3 className={styles.loginHeader}>Welcome to React Chat!</h3>
                <form className={styles.loginForm}>
                    <div className={styles.formContainer}>
                        <div className={styles.inputContainer}>
                            <label>Username:</label>
                            <input type="text" required onChange={e => dispatch(setName(e.target.value))}></input>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Password:</label>
                            <input type="password" required onChange={e => dispatch(setPassword(e.target.value))}></input>
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