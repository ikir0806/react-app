import { FC, useCallback } from 'react';
import { useEffect } from 'react';
import { Form } from 'src/components/Form';
import { MessageList } from 'src/components/MessagesList';
import { AUTHOR } from 'src/constants';
import { Message, Messages } from 'src/common-types';
import { ChatList } from 'src/components/ChatList/ChatList';
import { Chat } from 'src/common-types';
import { Navigate, useParams, useLocation } from 'react-router-dom';

interface ChatPageProps {
    chats: Chat[];
    onAddChat: (chat: Chat) => void;
    messages: Messages;
    onAddMessage: (id: string, msg: Message) => void;
    onDeleteChat: (name: string) => void;
}

export const ChatPage: FC<ChatPageProps> = ({
    chats,
    onAddChat,
    messages,
    onAddMessage,
    onDeleteChat,
}) => {
    const { chatId } = useParams();

    useEffect(() => {
        if (
            chatId &&
            messages[chatId]?.length > 0 &&
            messages[chatId][messages[chatId].length - 1].author === AUTHOR.user
        ) {
            const timeout = setTimeout(() => {
                onAddMessage(chatId, {
                    author: AUTHOR.bot,
                    text: 'Im BOT',
                });
            }, 1000);

            return () => {
                clearTimeout(timeout);
            };
        }
    }, [chatId, messages]);

    const handleAddMessage = useCallback(
        (mesasge: Message) => {
            if (chatId) {
                onAddMessage(chatId, mesasge);
            }
        },
        [chatId]
    );

    if (chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace />;
    }

    return (
        <>
            <ChatList chats={chats} onAddChat={onAddChat} onDeleteChat={onDeleteChat} />
            <MessageList messages={chatId ? messages[chatId] : []} />
            <Form addMessage={handleAddMessage} />
        </>
    );
};