import { nanoid } from 'nanoid';
import { FC, useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Authors, Chat, Message, Messages } from './common-types';
import { ChatList } from './components/ChatList/ChatList';
import { Header } from './components/Header';
import { ChatPage } from './pages/ChatPage';
import { Main } from './pages/Main';
import { Profile } from './pages/Profile';

const defaultMessages: Messages = {
    default: [
        {
            author: Authors.USER,
            text: '1',
        },
        {
            author: Authors.USER,
            text: '2',
        },
    ],
};

export const App: FC = () => {
    const [messages, setMesseges] = useState(defaultMessages);

    const chats = useMemo(
        () =>
            Object.keys(messages).map((chat) => ({
                id: nanoid(),
                name: chat,
            })),
        [Object.keys(messages).length]
    );

    const onAddChat = (newChat: Chat) => {
        setMesseges({
            ...messages,
            [newChat.name]: [],
        });
    };

    const onAddMessage = (chatId: string, newMessage: Message) => {
        setMesseges({
            ...messages,
            [chatId]: [...messages[chatId], newMessage],
        });
    };

    const onDeleteChat = (name: string) => {
        const newMessages = { ...messages };
        delete newMessages[name];
        setMesseges(newMessages);
    }

    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Main />} />
                <Route path="profile" element={<Profile />} />
                <Route path="chats">
                    <Route
                        index
                        element={<ChatList chats={chats} onAddChat={onAddChat} onDeleteChat={onDeleteChat} />}
                    />
                    <Route
                        path=":chatId"
                        element={
                            <ChatPage
                                chats={chats}
                                onAddChat={onAddChat}
                                messages={messages}
                                onAddMessage={onAddMessage} onDeleteChat={onDeleteChat}
                            />
                        }
                    />
                </Route>
            </Route>

            <Route path="*" element={<h2>404 page</h2>} />
        </Routes>
    );
};