import { combineReducers } from 'redux';
import movements from './movementReducer'; 
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['movements']
};

export const rootReducer = combineReducers({
    movements
});

export default persistReducer(persistConfig, rootReducer);