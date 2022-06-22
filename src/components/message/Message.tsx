import { FC } from 'react';
import style from './style.module.css';

interface MessageProps {
    text: string
}

export const Message: FC<MessageProps> = (props) => {
    return (
        <>
            <p className={style.background}>{props.text}</p>
        </>
    );
}  