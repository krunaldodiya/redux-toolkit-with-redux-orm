import React, {lazy, memo, Suspense, useEffect} from 'react';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {store} from './src/store';
import AsyncStorage from '@react-native-community/async-storage';

const Home = lazy(() => import('./src/screens/Home'));

const App = () => {
  const persistor = persistStore(store);

  useEffect(() => {
    const unsubscribe = store.subscribe(async () => {
      const root = await AsyncStorage.getItem('persist:root');
      if (root) {
        const persistRoot = JSON.parse(root);
        persistRoot.orm = JSON.stringify(store.getState().orm);
        await AsyncStorage.setItem('persist:root', JSON.stringify(persistRoot));
      }
    });

    return unsubscribe;
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={null}>
          <Home />
        </Suspense>
      </PersistGate>
    </Provider>
  );
};

export default memo(App);
