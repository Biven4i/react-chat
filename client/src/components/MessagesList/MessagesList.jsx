import styles from './MessagesList.module.css';
import Message from '../Message/Message';
import { useRef, useState } from 'react';
import { useEffect } from 'react';

function MessagesList({ socket }) {
    const containerEl = useRef(null);
    const [messages, setMessages] = useState([]);
    let curentUser = localStorage.getItem('userName');
    let isSender;
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    socket.on("dbConnect", dbConnect => {
        for(let item of dbConnect) {
            isSender = curentUser === item[0];
            messages.push([item[0], item[1], `${new Date().getHours()}` + item[2].slice(13,16), isSender]);
        }
        setMessages([...messages]);
    });

    useEffect(() => {
        containerEl.current.scrollTop = containerEl.current.scrollHeight;
    })

    socket.once('messageResponse', (message, user) => {
        isSender = curentUser === user;
        let time = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
        messages.push([user, message, time, isSender]);
        setMessages([...messages]);
    });

    return (
        <div className={styles.container} ref={containerEl}>
            {
                messages.map((message, index) => <Message key={index} user={message[0]} message={message[1]} isSender={message[3]} time={message[2]} />)
            }
        </div>
    );
}

export default MessagesList;