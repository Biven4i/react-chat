import styles from './Header.module.css';

function Header() {
    return(
        <div className={styles.container}>
            <span>REACT CHAT</span>
        </div>
    );
}

export default Header;