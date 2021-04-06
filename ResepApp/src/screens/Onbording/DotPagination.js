import React from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {Extrapolate} from 'react-native-reanimated';

import Theme from '../../components/Theme';

const DotPagination = ({index, current}) => {
  const opacity = current.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });

  return <Animated.View style={[styles.container, {opacity}]} />;
};

export default DotPagination;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.primary,
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
});
