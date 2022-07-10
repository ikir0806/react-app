import { FC } from 'react';
import { Form } from 'src/components/Form/Form';
import { MessageList } from 'src/components/MessagesList';
import { ChatList } from 'src/components/ChatList/ChatList';
import { Navigate, useParams } from 'react-router-dom';
import { WithClasses } from 'src/HOC/WithClasses';

import style from './ChatPage.module.css';
import { shallowEqual, useSelector } from 'react-redux';
import { selectMessages } from 'src/store/messages/selectors';

export const ChatPage: FC = () => {
    const { chatId } = useParams();
    const MessageListWithClass = WithClasses(MessageList);

    const messages = useSelector(selectMessages, shallowEqual);

    if (chatId && !messages[chatId]) {
        return <Navigate to="/chats" />;
    }

    return (
        <>
            <ChatList />

            {/* <MessageList messages={chatId ? messages[chatId] : []} /> */}
            <MessageListWithClass
                messages={chatId ? messages[chatId] : []}
                classes={style.border}
            />
            <Form />
        </>
    );
};