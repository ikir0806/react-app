import { onValue } from 'firebase/database';
import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AboutWithConnect } from 'src/pages/About';
import { Articles } from 'src/pages/Articles';
import { ChatPage } from 'src/pages/ChatPage/ChatPage';
import { Main } from 'src/pages/Main';
import { Profile } from 'src/pages/Profile';
import { SignIn } from 'src/pages/SignIn';
import { SignUp } from 'src/pages/SignUp';
import { firebaseAuth, messagesRef } from 'src/services/firebase';
import { changeAuth } from 'src/store/profile/slice';
import { ChatList } from '../ChatList/ChatList';
import { Header } from '../Header';
import { PrivateRoute } from '../PriviteRoute';
import { PublicRoute } from '../PublicRoute';

// const Profile = React.lazy(() =>
//   Promise.all([
//     import('./pages/Profile').then(({ Profile }) => ({
//     import { useDispatch } from 'react-redux';
// default: Profile,
//     })),
//     new Promise((resolve) => setTimeout(resolve, 1000)),
//   ]).then(([moduleExports]) => moduleExports)
// );

export const AppRouter: FC = () => {
    const dispatch = useDispatch();

    const [chats, setChats] = useState<any[]>([]);
    const [messagesDB, setMessagesDB] = useState<any>({});

    useEffect(() => {
        const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(changeAuth(true));
            } else {
                dispatch(changeAuth(false));
            }
        });

        return unsubscribe;
    }, [dispatch]);

    useEffect(() => {
        const unsubscribe = onValue(messagesRef, (snapshot) => {
            const data = snapshot.val();

            const newChats = Object.entries(data).map((item: any) => ({
                id: item[0],
                name: item[1].name,
            }));

            setChats(newChats);
            setMessagesDB(data);
        });

        return unsubscribe;
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Main />} />
                <Route
                    path="profile"
                    element={<PrivateRoute component={<Profile />} />}
                />
                <Route path="articles" element={<Articles />} />
                <Route path="about" element={<AboutWithConnect />} />
                <Route path="signin" element={<PublicRoute component={<SignIn />} />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="chats" element={<PrivateRoute />}>
                    <Route
                        index
                        element={<ChatList chats={chats} messagesDB={messagesDB} />}
                    />
                    <Route
                        path=":chatId"
                        element={<ChatPage chats={chats} messagesDB={messagesDB} />}
                    />
                </Route>
            </Route>

            <Route path="*" element={<h2>404 page</h2>} />
        </Routes>
    );
};