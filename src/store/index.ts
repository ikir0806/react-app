import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { profileReducer } from './profile/slice';
import { messageReducer } from './messages/reducer';

export type StoreState = ReturnType<typeof rootReducer>;

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['profile'],
};

export const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messageReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);