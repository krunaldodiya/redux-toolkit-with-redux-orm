import AsyncStorage from '@react-native-community/async-storage';
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {createBlacklistFilter} from 'redux-persist-transform-filter';
import userSlice from './user';

const reducers = combineReducers({
  users: userSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: createBlacklistFilter('users', ['meta']),
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: [...getDefaultMiddleware({serializableCheck: false})],
  devTools: true,
});
