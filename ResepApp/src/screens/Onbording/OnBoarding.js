import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {Extrapolate} from 'react-native-reanimated';

import Theme from '../../components/Theme';
import DotPagination from './DotPagination';
import Slide from './Slide';
import SubSlide from './SubSlide';

const {width, height} = Dimensions.get('window');

const slides = [
  {
    title: 'SEARCH',
    subtitle: 'Cari Resep Masakan',
    deskripsi:
      'Bingung mau masak apa? Jangan khawatir! Cari resep masakan di sini.',
    picture: require('../../assets/images/onbording/1.jpg'),
  },
  {
    title: 'FAVORITE',
    subtitle: 'Simpan Resep Disukai',
    deskripsi: 'Simpan resep yang kamu sukai dengan menambahkan ke favorite.',
    picture: require('../../assets/images/onbording/2.jpg'),
  },
  {
    title: 'SHARE',
    subtitle: 'Bagikan Resep Kamu',
    deskripsi: 'Tambah resep pribadi atau bagikan resep kamu ke orang lain.',
    picture: require('../../assets/images/onbording/3.jpg'),
  },
];

const OnBoarding = () => {
  const navigation = useNavigation();

  const [animationValue] = useState(new Animated.Value(0));

  const scroll = useRef(Animated.ScrollView);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Animated.View style={styles.slider}>
        {slides.map(({picture}, i) => {
          const opacity = animationValue.interpolate({
            inputRange: [(i - 1) * width, i * width, (i + 1) * width],
            outputRange: [0, 0.8, 0],
            extrapolate: Extrapolate.CLAMP,
          });

          return (
            <Animated.View key={i} style={[styles.underlay, {opacity}]}>
              <Image
                resizeMode="cover"
                style={styles.picture}
                source={picture}
              />
            </Animated.View>
          );
        })}

        <Animated.ScrollView
          horizontal
          ref={scroll}
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={0}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: animationValue}}}],
            {useNativeDriver: false},
          )}>
          {slides.map(({title}, i) => (
            <Slide key={i} {...{title}} />
          ))}
        </Animated.ScrollView>
      </Animated.View>

      <View style={styles.footer}>
        <Animated.View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <DotPagination
                key={index}
                current={Animated.divide(animationValue, width)}
                {...{index}}
              />
            ))}
          </View>

          <Animated.View
            style={[
              styles.footerText,
              {
                transform: [
                  {translateX: Animated.multiply(animationValue, -1)},
                ],
              },
            ]}>
            {slides.map(({subtitle, deskripsi}, i) => {
              const last = i == slides.length - 1;
              return (
                <SubSlide
                  key={i}
                  onPress={() => {
                    if (last) {
                      navigation.navigate('Welcome');
                    } else {
                      scroll.current?.scrollTo({
                        x: width * (i + 1),
                        animated: true,
                      });
                    }
                  }}
                  {...{subtitle, deskripsi, last}}
                />
              );
            })}
          </Animated.View>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.white,
  },
  slider: {
    height: 0.61 * height + 75,
    backgroundColor: Theme.colors.primary,
    overflow: 'hidden',
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    opacity: 0.8,
  },
  footer: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    marginTop: 0.61 * height,
  },
  footerContent: {
    flex: 1,
    backgroundColor: Theme.colors.white,
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: 75,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    flex: 1,
    flexDirection: 'row',
    width: width * slides.length,
    paddingTop: 40,
  },
});
