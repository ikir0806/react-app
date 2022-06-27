import { memo, useState } from 'react';
import TextField from '@mui/material/TextField';
import { AUTHOR } from '../../constants';
import { Button } from './components/Button';
import style from './Form.module.css';
import { FC } from 'react';
import { Message } from '../../common-types';

interface FormProps {
    addMessage: (msg: Message) => void;
}

export const Form: FC<FormProps> = memo(({ addMessage }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addMessage({
            author: AUTHOR.user,
            text,
        });
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