import { Suspense } from 'react';
import { FC, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { defaultContext, ThemeContext } from './utils/ThemeContext';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppRouter } from './components/AppRouter/AppRouter';

export const App: FC = () => {
    const [theme, setTheme] = useState(defaultContext.theme);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <Provider store={store}>
            <Suspense fallback={<div>Loading...</div>}>
                <ThemeContext.Provider
                    value={{
                        theme,
                        toggleTheme,
                    }}
                >
                    <BrowserRouter>
                        <AppRouter />
                    </BrowserRouter>
                </ThemeContext.Provider>
            </Suspense>
        </Provider>
    );
};