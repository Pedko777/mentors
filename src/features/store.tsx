import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { mentorsSaga } from './saga/saga';
import IAppState from './IAppState.interface';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(): Store<IAppState> {
  const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(mentorsSaga);

  return store;
}
