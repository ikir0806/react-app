import { FC } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuth } from 'src/store/profile/selectors';
import { auth } from 'src/store/profile/slice';

export const nav = [
    {
        id: 1,
        name: 'Main',
        to: '/',
    },
    {
        id: 2,
        name: 'Profile',
        to: '/profile',
    },
    {
        id: 3,
        name: 'Chats',
        to: '/chats',
    },
    {
        id: 4,
        name: 'About',
        to: '/about',
    },
    {
        id: 5,
        name: 'Articles',
        to: '/articles',
    },
];

export const Header: FC = () => {
    const isAuth = useSelector(selectAuth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = () => {
        navigate('/signin', { replace: true });
    };

    return (
        <>
            <header
                style={{
                    backgroundColor: 'grey',
                }}
            >
                <ul
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                    }}
                >
                    {nav.map((link) => (
                        <li key={link.id}>
                            <NavLink
                                to={link.to}
                                style={({ isActive }) => ({
                                    color: isActive ? 'green' : 'blue',
                                })}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div>
                    {isAuth && (
                        <button onClick={() => dispatch(auth(false))}>logout</button>
                    )}
                </div>
                <div>{!isAuth && <button onClick={handleLogin}>login</button>}</div>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};