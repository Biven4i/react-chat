import styles from './Home.module.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className={styles.container}>
            <Link to="/register" className={styles.register}>Sign Up</Link>
            <Link to="/login" className={styles.login}>Log in</Link>
        </div>
    );
}

export default Home;