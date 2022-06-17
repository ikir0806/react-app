import { Message } from "./message/Message";
import { useState, useEffect } from "react";

export const App = () => {
    const [messageList, setMessageList] = useState([]);
    const [message, setMessage] = useState('');

    const handleClick = (event) => {
        event.preventDefault();
        let copy = Object.assign([], messageList);
        copy.push({ author: 'user1', text: message })
        setMessageList(copy);
        setMessage('');
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if ((messageList[0]) &&
                ((messageList[messageList.length - 1].author) !== 'bot')) {
                let copy = Object.assign([], messageList);
                copy.push({ author: 'bot', text: 'hello there' })
                setMessageList(copy);
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [messageList]);

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    return <>
        <Message text="Messenger" />
        <ul>
            {messageList.map((item, idx) => <li key={idx}>{item.author}: {item.text}</li>)}
        </ul>
        <div>
            <input type="text" value={message} onChange={handleChange} />
            <button onClick={handleClick}>send</button>
        </div>
    </>;
}