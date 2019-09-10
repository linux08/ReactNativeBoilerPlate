/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  // YellowBox
} from 'react-native';


import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { RootNavigator } from './src/navigator/index';
import NavigationService from './src/services/NavigationService';
import { store, persistor } from './src/store';
import ErrorHandler from './src/components/ErrorHandler';
import Loading from './src/components/Loading';



//  YellowBox.ignoreWarnings([
//       'Setting a timer',
//       'Warning',
//       'Remote',
//       'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?',
//     ]);

const App = () => {

  return (
   <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Loading />}>
          <ErrorHandler>
              <StatusBar barStyle="light-content" />
              <RootNavigator
                ref={navigatorRef => {
                  NavigationService.setTopLevelNavigator(navigatorRef);
                }}
              />
          </ErrorHandler>
        </PersistGate>
      </Provider>
  );
};

export default App;
