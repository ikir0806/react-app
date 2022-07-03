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

    // useEffect(() => {
    //   if (
    //     chatId &&
    //     messages[chatId]?.length > 0 &&
    //     messages[chatId][messages[chatId].length - 1].author === AUTHOR.user
    //   ) {
    //     const timeout = setTimeout(() => {
    //       onAddMessage(chatId, {
    //         author: AUTHOR.bot,
    //         text: 'Im BOT',
    //       });
    //     }, 1000);

    //     return () => {
    //       clearTimeout(timeout);
    //     };
    //   }
    // }, [chatId, messages]);

    if (chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace />;
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