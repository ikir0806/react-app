import { AddChat, AddMessage, DeleteChat } from './types';
import { Dispatch } from 'redux';
import { Authors, Message } from 'src/common-types';

export const ADD_CHAT = 'MESSAGES::ADD_CHAT';
export const DELETE_CHAT = 'MESSAGES::DELETE_CHAT';
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addChat: AddChat = (newChat) => ({
    type: ADD_CHAT,
    newChat,
});

export const deleteChat: DeleteChat = (chatName) => ({
    type: DELETE_CHAT,
    chatName,
});

export const addMessage: AddMessage = (chatName, message) => ({
    type: ADD_MESSAGE,
    chatName,
    message,
});

let timeout: NodeJS.Timeout;

export const addMessageWithReply =
    (chatName: string, message: Message) => (dispatch: Dispatch) => {
        dispatch(addMessage(chatName, message));

        if (message.author !== Authors.BOT) {
            if (timeout) {
                clearTimeout(timeout);
            }

            timeout = setTimeout(
                () =>
                    dispatch(
                        addMessage(chatName, {
                            author: Authors.BOT,
                            text: 'Im BOT',
                        })
                    ),
                1000
            );
        }
    };