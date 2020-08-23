import { combineReducers } from 'redux';
import {persistReducer} from "redux-persist";
import storageSession from 'redux-persist/lib/storage/session';

import { ContentReducer } from './content/content.reducer';

const persistConfig = {
    key: 'root',
    storage: storageSession,
    whitelist: ['content'],
};

const rootReducer = combineReducers({
    content: ContentReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export { persistedReducer }