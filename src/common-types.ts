export enum Authors {
    USER = 'USER',
    BOT = 'BOT',
}

export interface Message {
    author: Authors;
    text: string;
}