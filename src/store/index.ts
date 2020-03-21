import AsyncStorage from '@react-native-community/async-storage';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistReducer} from 'redux-persist';
import {createBlacklistFilter} from 'redux-persist-transform-filter';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import ReduxThunk from 'redux-thunk';
import {ormReducer} from '../orm';

const appReducer = combineReducers({
  orm: ormReducer,
});

const todosBlacklist = createBlacklistFilter('users', ['loading']);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [todosBlacklist],
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, appReducer);

const middlewares = [ReduxThunk];

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export {store};
