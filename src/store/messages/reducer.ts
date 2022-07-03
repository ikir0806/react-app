import { nanoid } from 'nanoid';
import { Reducer } from 'redux';
import { Message } from 'src/common-types';
import { AUTHOR } from 'src/constants';
import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT } from './actions';
import { MessageActions } from './types';

type MessageWithId = { id: string } & Message;
export interface MessagesState {
    [key: string]: MessageWithId[];
}

const initialMessages: MessagesState = {
    default: [
        {
            id: '1',
            author: AUTHOR.bot,
            text: 'Hello to this chat',
        },
    ],
};

export const messageReducer: Reducer<MessagesState, MessageActions> = (
    state = initialMessages,
    action
) => {
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...state,
                [action.newChat]: [],
            };
        }
        case DELETE_CHAT: {
            const chats = { ...state };
            delete chats[action.chatName];
            return chats;
        }
        case ADD_MESSAGE: {
            return {
                ...state,
                [action.chatName]: [
                    ...state[action.chatName],
                    {
                        id: nanoid(),
                        author: action.message.author,
                        text: action.message.text,
                    },
                ],
            };
        }
        default:
            return state;
    }
};