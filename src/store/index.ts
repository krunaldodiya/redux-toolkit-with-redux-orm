import AsyncStorage from '@react-native-community/async-storage';
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {createBlacklistFilter} from 'redux-persist-transform-filter';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import todoSlice from './todo';
import {createReducer} from 'redux-orm';
import {orm} from '../orm';

const ormReducer = createReducer(orm, function(session, action) {
  console.log(session, action);
});

const reducers = combineReducers({
  orm: ormReducer,
  todos: todoSlice.reducer,
});

const todosBlacklist = createBlacklistFilter('todos', ['loading']);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [todosBlacklist],
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: [...getDefaultMiddleware({serializableCheck: false})],
  devTools: true,
});
