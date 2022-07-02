import { FC, useContext, useState } from 'react';
import { ThemeContext } from './../utils/ThemeContext';
import { changeName, toggleProfile } from 'src/store/profile/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectName, selectVisible } from './../store/profile/selectors';

export const Profile: FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const visible = useSelector(selectVisible);
    const name = useSelector(selectName);

    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    return (
        <>
            <h2>Profile page</h2>
            <div>
                <p>{theme === 'light' ? '🌞' : '🌙'} </p>
                <button onClick={toggleTheme}>change theme</button>
            </div>
            <hr />
            <p>{name}</p>
            <input type="checkbox" checked={visible} readOnly />
            <button onClick={() => dispatch(toggleProfile())}>change visible</button>
            <br />
            <input
                type="text"
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <button onClick={() => dispatch(changeName(value))}>change name</button>
        </>
    );
};