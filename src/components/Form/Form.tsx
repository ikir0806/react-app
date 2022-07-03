import { memo, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from './components/Button';
import style from './Form.module.css';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { addMessageWithReply } from 'src/store/messages/actions';
import { useParams } from 'react-router-dom';
import { Authors } from 'src/common-types';
import { ThunkDispatch } from 'redux-thunk';

export const Form: FC = memo(() => {
    const [text, setText] = useState('');

    const dispatch = useDispatch<ThunkDispatch<any, void, any>>();
    const { chatId } = useParams();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (chatId) {
            dispatch(addMessageWithReply(chatId, { author: Authors.USER, text }));
        }

        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <TextField
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                inputProps={{
                    'data-testid': 'input',
                }}
            />
            <Button render={() => <span>send</span>} />
        </form>
    );
});