import { Message } from "./components/message/Message";
import { MessageList } from "./components/messageList/MessageList";
import { useState, useEffect } from "react";

export const App = () => {

    return <>
        <Message text="Messenger" />
        <MessageList />
    </>;
}