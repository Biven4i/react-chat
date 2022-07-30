import styles from './Header.module.css';
import { Link } from 'react-router-dom';
function Header() {
    return(
        <div className={styles.container}>
            <Link className={styles.headerLink} to="/">REACT CHAT</Link>
        </div>
    );
}

export default Header;