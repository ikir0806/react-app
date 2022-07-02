import { memo, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from './components/Button';
import style from './Form.module.css';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from 'src/store/messages/actions';
import { useParams } from 'react-router-dom';

export const Form: FC = memo(() => {
    const [text, setText] = useState('');

    const dispatch = useDispatch();
    const { chatId } = useParams();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (chatId) {
            dispatch(addMessage(chatId, text));
        }

        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <TextField
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button render={() => <span>send</span>} />
        </form>
    );
});