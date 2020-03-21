import AsyncStorage from '@react-native-community/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import ormReducer from '../../orm';
import todoReducer from './todo';

const todoPersistConfig = {
  key: 'todo',
  storage: AsyncStorage,
  blacklist: ['loading', 'loaded'],
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  orm: ormReducer,
  todo: persistReducer(todoPersistConfig, todoReducer),
});

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['auth'],
  stateReconciler: autoMergeLevel2,
};

export default persistReducer(rootPersistConfig, rootReducer);
