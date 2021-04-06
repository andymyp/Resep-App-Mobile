import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Theme from './Theme';

const {width, height} = Dimensions.get('window');
const aspecRation = 234 / 600;
const HEIGHT = width * aspecRation;

const Container = ({children, radius, footer}) => {
  const bottomRadius =
    radius == 'left'
      ? {borderBottomLeftRadius: 75}
      : radius == 'right'
      ? {borderBottomRightRadius: 75}
      : {borderBottomLeftRadius: 0};

  const topRadius =
    radius == 'left'
      ? {borderTopRightRadius: 75}
      : radius == 'right'
      ? {borderTopLeftRadius: 75}
      : {borderTopLeftRadius: 75, borderTopRightRadius: 75};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.bgWhite}>
        <View style={[styles.topContainer, bottomRadius]}>
          <Image
            resizeMode="cover"
            style={styles.topImage}
            source={require('../assets/images/bgtop.jpg')}
          />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.fillObject1} />
        <View style={styles.fillObject2} />
        <View style={[styles.content, topRadius]}>
          <KeyboardAwareScrollView>{children}</KeyboardAwareScrollView>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        {footer}
        <View style={{height: 10}} />
      </View>
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.blackLight,
  },
  bgWhite: {
    backgroundColor: Theme.colors.white,
  },
  topContainer: {
    backgroundColor: Theme.colors.primary,
    height: HEIGHT * 0.61 + 40,
    overflow: 'hidden',
  },
  topImage: {
    width: width,
    height: HEIGHT * 0.61 + 40,
    opacity: 0.9,
  },
  contentContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  fillObject1: {
    ...StyleSheet.absoluteFillObject,
    width: width,
    height: HEIGHT,
    backgroundColor: Theme.colors.primary,
  },
  fillObject2: {
    ...StyleSheet.absoluteFillObject,
    width: width,
    height: HEIGHT,
    backgroundColor: Theme.colors.whiteLight,
    opacity: 0.9,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: Theme.colors.white,
    borderBottomLeftRadius: 75,
    borderBottomRightRadius: 75,
  },
  bottomContainer: {
    backgroundColor: Theme.colors.blackLight,
  },
});
