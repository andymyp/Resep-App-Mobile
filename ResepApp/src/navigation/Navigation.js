import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, connect} from 'react-redux';

import OnBoarding from '../screens/Onbording/OnBoarding';
import Welcome from '../screens/Onbording/Welcome';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import Main from '../screens/Main/Main';

const Navigation = () => {
  const AuthStack = createStackNavigator();
  const token = useSelector(state => state.user.token);

  return (
    <NavigationContainer>
      <AuthStack.Navigator
        headerMode="none"
        initialRouteName={token != '' ? 'Main' : 'OnBoarding'}>
        <AuthStack.Screen name="OnBoarding" component={OnBoarding} />
        <AuthStack.Screen name="Welcome" component={Welcome} />
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Register" component={Register} />
        <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
        <AuthStack.Screen name="Main" component={Main} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = state => {
  return {
    // session_id: state.user.session_id,
    // network: state.network,
  };
};

export default connect(mapStateToProps)(Navigation);
