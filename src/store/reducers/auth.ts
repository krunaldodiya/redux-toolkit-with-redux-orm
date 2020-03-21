import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const initialState = {
  loading: false,
  loaded: false,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET':
      return {...state, loading: true};

    default:
      return state;
  }
};

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  blacklist: ['loading', 'loaded'],
  stateReconciler: autoMergeLevel2,
};

const authPersistReducer = persistReducer(authPersistConfig, authReducer);

export {authPersistReducer};
