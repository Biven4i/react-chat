import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.container}>
            <button className={styles.register}>Sign Up</button>
            <button className={styles.login}>Log in</button>
        </div>
    );
}

export default Home;