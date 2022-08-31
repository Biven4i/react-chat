import styles from './Header.module.css';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    function handleClick() {
        localStorage.removeItem('userName');
        navigate('/');
    }

    return(
        <div className={styles.container}>
            <Link className={styles.headerLink} to="/">REACT CHAT</Link>
            { (localStorage.length >= 1) ? <span className={styles.logOutLink} to="/" onClick={() => handleClick()}>Log out</span> : ''}
        </div>
    );
}

export default Header;