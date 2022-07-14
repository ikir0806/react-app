import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'src/services/firebase';

export const SignIn: FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoagin] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setError('');
            setLoagin(true);
            await logIn(email, password);
            navigate('/chats', { replace: true });
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoagin(false);
        }
    };

    return (
        <>
            <h2>Sign in</h2>
            <form onSubmit={handleSubmit}>
                <p>Логин:</p>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p>Пароль:</p>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button>login</button>
            </form>
            {loading && <div>loading...</div>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
    );
};