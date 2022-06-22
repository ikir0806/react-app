import { ChatList } from "./components/chatList/chatList";
import { Message } from "./components/message/Message";
import { MessageList } from "./components/messageList/MessageList";
import style from "./style.module.css";

export const App = () => {

    return (
        <>
            <Message text={"Messenger"} />
            <div className={style.div__wrp}>
                <ChatList />
                <MessageList />
            </div>
        </>);
}