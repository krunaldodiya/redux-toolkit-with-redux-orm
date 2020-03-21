import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import {rootPersistReducer} from './reducers';

const middlewares = [ReduxThunk];

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  rootPersistReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares)),
);

export {store};
