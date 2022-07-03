import { AddChat, AddMessage, DeleteChat } from './types';

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

export const addMessage: AddMessage = (chatName, text) => ({
    type: ADD_MESSAGE,
    chatName,
    text,
}); 