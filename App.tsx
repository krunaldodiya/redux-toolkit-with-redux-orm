import {getPersistor} from '@rematch/persist';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Home from './src/screens/Home';
import {store} from './src/store';

const App = () => {
  const persistor = getPersistor();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
};

export default App;
