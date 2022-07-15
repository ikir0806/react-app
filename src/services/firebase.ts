import { initializeApp } from 'firebase/app';
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB4aPN7-Hjd_WvFgZvkJeNxOnRYRJMXaA4",
    authDomain: "react-app-69335.firebaseapp.com",
    projectId: "react-app-69335",
    storageBucket: "react-app-69335.appspot.com",
    messagingSenderId: "416334814857",
    appId: "1:416334814857:web:c02a286446e344acfcf058"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

export const signUp = async (email: string, password: string) =>
    await createUserWithEmailAndPassword(firebaseAuth, email, password);

export const logIn = async (email: string, password: string) =>
    await signInWithEmailAndPassword(firebaseAuth, email, password);

export const logOut = async () => await signOut(firebaseAuth);

const db = getDatabase(app);

export const userRef = ref(db, 'user');
export const messagesRef = ref(db, 'messages');

export const getChatById = (chatId: string) => ref(db, `messages/${chatId}`);

export const getMessageListById = (chatId: string) =>
    ref(db, `messages/${chatId}/messageList/`);