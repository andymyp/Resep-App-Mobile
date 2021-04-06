import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

import Theme from '../../components/Theme';

const {width, height} = Dimensions.get('window');
const SLIDE_HEIGHT = 0.61 * height;

const Slide = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={Theme.texts.hero}>{title}</Text>
      </View>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  titleContainer: {
    justifyContent: 'center',
    top: SLIDE_HEIGHT - 75,
  },
});
