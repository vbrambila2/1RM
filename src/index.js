import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
   rootReducer,
   composeEnhancers(applyMiddleware(reduxThunk))
);

const persistor = persistStore(store);
 
ReactDOM.render(
   <Provider store={store} >
      <PersistGate persistor={persistor}>
         <App />
      </PersistGate>
   </Provider>,
   document.getElementById('root')
);