import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import {
  createNetworkMiddleware,
  offlineActionCreators,
  checkInternetConnection,
} from 'react-native-offline';
import {persistStore} from 'redux-persist';

const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 200,
});

const middleware = [thunk, networkMiddleware];

const configStore = () => {
  const store = compose(applyMiddleware(...middleware))(createStore)(reducer);
  const {connectionChange} = offlineActionCreators;

  persistStore(store, null, () => {
    checkInternetConnection().then(isConnected => {
      store.dispatch(connectionChange(isConnected));
      callback();
    });
  });

  return store;
};

export default configStore();
