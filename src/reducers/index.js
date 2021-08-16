import { combineReducers } from 'redux';
import movementReducer from './movementReducer';
import { reducer as formReducer } from 'redux-form';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['move', 'form']
}

export const rootReducer = combineReducers({
    move: movementReducer,
    form: formReducer,
});

export default persistReducer(persistConfig, rootReducer);