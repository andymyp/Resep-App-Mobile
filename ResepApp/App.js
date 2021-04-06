import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/es/integration/react';
import {ReduxNetworkProvider} from 'react-native-offline';

import configStore from './src/store/configStore';
import Navigation from './src/navigation/Navigation';

export default function App() {
  const persist = persistStore(configStore);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <Provider store={configStore}>
        <PersistGate persistor={persist}>
          <ReduxNetworkProvider>
            <Navigation />
          </ReduxNetworkProvider>
        </PersistGate>
      </Provider>
    );
  }
}
