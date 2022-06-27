import { FC } from 'react';
import { Message } from '../common-types';

interface MessageListProps {
    messages: Message[];
}

export const MessageList: FC<MessageListProps> = ({ messages }) => (
    <ul>
        {messages.map((message, idx) => (
            <li key={idx} data-testid="li">
                {message.author}: {message.text}
            </li>
        ))}
    </ul>
);