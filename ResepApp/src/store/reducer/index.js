import {persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import {reducer as network} from 'react-native-offline';
import {auth} from './auth';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['network'],
};

export default persistCombineReducers(persistConfig, {
  user: auth,
  network: network,
});
