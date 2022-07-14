import { memo, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from './components/Button';
import style from './Form.module.css';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Authors } from 'src/common-types';
import { push } from 'firebase/database';
import { getMessageListById } from 'src/services/firebase';

export const Form: FC = memo(() => {
    const [text, setText] = useState('');

    const { chatId } = useParams();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (chatId) {
            // dispatch(
            //   addMessageWithReply({
            //     chatName: chatId,
            //     message: { author: Authors.USER, text },
            //   })
            // );
            push(getMessageListById(chatId), {
                text,
                author: Authors.USER,
            });
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