import { nanoid } from 'nanoid';
import { StoreState } from 'src/store';

export const selectChats = (state: StoreState) =>
    Object.keys(state.messages).map((chat) => ({
        id: nanoid(),
        name: chat,
    }));

export const selectMessages = (state: StoreState) => state.messages;