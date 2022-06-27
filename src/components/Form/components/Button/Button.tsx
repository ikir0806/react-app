import { FC } from 'react';
import MUIButton from '@mui/material/Button';

import style from './Button.module.css';

interface ButtonProps {
    disabled?: boolean;
    click?: () => void;
    render?: () => JSX.Element;
}

export const Button: FC<ButtonProps> = ({
    render,
    disabled = false,
    click,
}) => {
    return (
        <MUIButton
            disabled={disabled}
            className={style.button}
            variant="contained"
            type="submit"
            onClick={click}
            data-testid="button"
        >
            {render && render()}
        </MUIButton>
    );
};