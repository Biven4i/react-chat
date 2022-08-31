import styles from './Home.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

function Home({socket}) {
    const navigate = useNavigate();
    let curentUser = localStorage.getItem('userName');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    if(curentUser) {
        socket.emit('checkLogIn', curentUser);
        socket.on('checkLogInResponse', res => setIsLoggedIn(res));
    }
    
    useEffect(() => {
        if (isLoggedIn === 'true') {
            navigate('/chat', {replace: true});
            navigate(0);
        }
    });

    return (
        <div className={styles.container}>
            <Link to="/register" className={styles.register}>Sign Up</Link>
            <Link to="/login" className={styles.login}>Log in</Link>
        </div>
    );
}

export default Home;