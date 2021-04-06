import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Theme from './Theme';

const Header = ({title, color, left, right}) => {
  return (
    <View style={styles.container}>
      <Icon name={left.icon} size={30} color={color} onPress={left.onPress} />
      <Text style={[Theme.texts.title2, {color: color}]}>
        {title.toUpperCase()}
      </Text>
      <Icon name={right.icon} size={30} color={color} onPress={right.onPress} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 20,
  },
});
