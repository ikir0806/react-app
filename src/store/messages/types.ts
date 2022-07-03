import { ADD_CHAT, DELETE_CHAT, ADD_MESSAGE } from './actions';
import { Message } from 'src/common-types';

export type MessageActions =
    | ReturnType<AddChat>
    | ReturnType<DeleteChat>
    | ReturnType<AddMessage>;

export type AddChat = (newChat: string) => {
    type: typeof ADD_CHAT;
    newChat: string;
};

export type DeleteChat = (chatName: string) => {
    type: typeof DELETE_CHAT;
    chatName: string;
};

export type AddMessage = (
    chatName: string,
    message: Message
) => {
    type: typeof ADD_MESSAGE;
    chatName: string;
    message: Message;
};