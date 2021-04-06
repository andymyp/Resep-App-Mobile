import * as React from 'react';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Drawer from '../../components/Drawer';
import Home from './Home';
import MyRecipe from './MyRecipe';
import Favorite from './Favorite';

const {width} = Dimensions.get('window');

const Main = props => {
  const DrawerNav = createDrawerNavigator();

  return (
    <DrawerNav.Navigator
      initialRouteName="Home"
      drawerContent={props => <Drawer {...props} />}
      drawerStyle={{width: '100%'}}
      screenOptions={{
        swipeEnabled: false,
        gestureEnabled: false,
      }}>
      <DrawerNav.Screen name="Home" component={Home} />
      <DrawerNav.Screen name="MyRecipe" component={MyRecipe} />
      <DrawerNav.Screen name="Favorite" component={Favorite} />
    </DrawerNav.Navigator>
  );
};

export default Main;
