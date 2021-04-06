import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import Theme from './Theme';

const Button = ({variant, label, onPress, children}) => {
  const backgroundColor =
    variant == 'primary'
      ? Theme.colors.primary
      : variant == 'transparent'
      ? 'transparent'
      : Theme.colors.default04;

  const color =
    variant == 'primary' ? Theme.colors.white : Theme.colors.blackLight;

  return (
    <RectButton style={[styles.container, {backgroundColor}]} {...{onPress}}>
      {children ? (
        children
      ) : (
        <Text style={[Theme.texts.label, {color}]}>{label}</Text>
      )}
    </RectButton>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
