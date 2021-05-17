import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../sagas';
import { simple } from '../reducers/simple';
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger';

const monitor = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})

const sagaMiddleware = createSagaMiddleware({ sagaMonitor: monitor });

export const store = createStore(simple, composeWithDevTools(applyMiddleware(sagaMiddleware,logger)));

sagaMiddleware.run(rootSaga);

export default store