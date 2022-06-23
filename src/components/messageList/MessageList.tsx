import React from "react";
import { useState, useEffect } from "react";
import style from "./style.module.css";

interface MessageListProps {
    author: string,
    text: string,
}

export const MessageList = () => {
    const [messageList, setMessageList] = useState<MessageListProps[]>([]);
    const [message, setMessage] = useState('');

    const handleClick = (event: { preventDefault: () => void; }) => {
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

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setMessage(event.target.value);
    }

    return (
        <div className={style.div}>
            <ul className={style.ul}>
                {messageList.map((item, idx) => <li className={style.list} key={idx}>{item.author}: {item.text}</li>)}
            </ul>
            <div>
                <input className={style.input} aria-label="input" type="text" value={message} onChange={handleChange} />
                <button className={style.button} onClick={handleClick}>send</button>
            </div>
        </div>);
}
