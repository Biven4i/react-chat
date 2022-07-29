import User from '../User/User';
import styles from './UsersList.module.css';

function UsersList() {
    return (
        <div className={styles.container}>
            <h3 className={styles.userListHeader}>Users:</h3>
        </div>
    );
}

export default UsersList;