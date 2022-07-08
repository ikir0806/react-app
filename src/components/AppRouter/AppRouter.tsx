import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutWithConnect } from 'src/pages/About';
import { ChatPage } from 'src/pages/ChatPage/ChatPage';
import { Main } from 'src/pages/Main';
import { Profile } from 'src/pages/Profile';
import { ChatList } from '../ChatList/ChatList';
import { Header } from '../Header';

// const Profile = React.lazy(() =>
//   Promise.all([
//     import('./pages/Profile').then(({ Profile }) => ({
//       default: Profile,
//     })),
//     new Promise((resolve) => setTimeout(resolve, 1000)),
//   ]).then(([moduleExports]) => moduleExports)
// );

export const AppRouter: FC = () => (
    <Routes>
        <Route path="/" element={<Header />}>
            <Route index element={<Main />} />
            <Route path="profile" element={<Profile />} />
            <Route path="about" element={<AboutWithConnect />} />
            <Route path="chats">
                <Route index element={<ChatList />} />
                <Route path=":chatId" element={<ChatPage />} />
            </Route>
        </Route>

        <Route path="*" element={<h2>404 page</h2>} />
    </Routes>
);