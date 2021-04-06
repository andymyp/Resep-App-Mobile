import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Theme from './Theme';

const DrawerItem = ({icon, color, label, screen}) => {
  navigation = useNavigation();

  const logout = () => {
    alert('logout');
  };

  return (
    <RectButton
      style={{marginBottom: 5, borderRadius: 10}}
      onPress={() =>
        screen != 'Logout' ? navigation.navigate(screen) : logout()
      }>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}>
        <View
          style={{
            backgroundColor: color,
            width: 35,
            height: 35,
            borderRadius: 20,
            alignContent: 'center',
            alignItems: 'center',
            marginLeft: 15,
          }}>
          <Icon
            name={icon}
            color={Theme.colors.white}
            size={20}
            style={{lineHeight: 35}}
          />
        </View>
        <Text style={[Theme.texts.body, {marginLeft: 15}]}>{label}</Text>
      </View>
    </RectButton>
  );
};

export default DrawerItem;
