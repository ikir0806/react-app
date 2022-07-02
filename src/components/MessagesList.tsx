import { FC } from 'react';
import { Message } from 'src/store/messages/reducer';

interface MessageListProps {
    messages: Message[];
}

export const MessageList: FC<MessageListProps> = ({ messages }) => (
    <ul>
        {messages.map((message, idx) => (
            <li key={idx}>
                {message.author}: {message.text}
            </li>
        ))}
    </ul>
);