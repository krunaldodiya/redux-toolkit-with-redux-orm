import React, {lazy, Suspense, memo} from 'react';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {store} from './src/store';

const Home = lazy(() => import('./src/screens/Home'));

const App = () => {
  const persistor = persistStore(store);

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
