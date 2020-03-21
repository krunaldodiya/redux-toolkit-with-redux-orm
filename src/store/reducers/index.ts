import AsyncStorage from '@react-native-community/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {ormReducer} from '../../orm';
import {authPersistReducer} from './auth';

const rootReducer = combineReducers({
  orm: ormReducer,
  auth: authPersistReducer,
});

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['auth'],
};

const rootPersistReducer = persistReducer(rootPersistConfig, rootReducer);

export {rootPersistReducer};
