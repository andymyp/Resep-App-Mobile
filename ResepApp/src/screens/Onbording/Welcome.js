import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Theme from '../../components/Theme';
import Button from '../../components/Button';

const {width, height} = Dimensions.get('window');

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image
          resizeMode="cover"
          style={styles.banner}
          source={require('../../assets/images/onbording/4.jpg')}
        />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.bodyContent}>
          <Text style={[styles.title, Theme.texts.title1]}>Ayo Mulai!</Text>
          <Text style={[styles.textBody, Theme.texts.body]}>
            Masuk atau daftar untuk menumukan resep yang kamu inginkan
          </Text>
          <View style={styles.button}>
            <Button
              onPress={() => navigation.navigate('Login')}
              label="Punya akun? Masuk"
              variant="primary"
            />
          </View>
          <View style={styles.button}>
            <Button
              label="Daftar sekarang, gratis!"
              variant="default"
              onPress={() => navigation.navigate('Register')}
            />
          </View>
          <View style={styles.button}>
            <Button
              label="Lupa password?"
              variant="transparent"
              onPress={() => navigation.navigate('ForgotPassword')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.white,
  },
  bannerContainer: {
    backgroundColor: Theme.colors.primary,
    height: 0.5 * height + 75,
  },
  banner: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    opacity: 0.6,
  },
  bodyContainer: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    marginTop: 0.5 * height,
  },
  bodyContent: {
    flex: 1,
    backgroundColor: Theme.colors.white,
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 40,
  },
  title: {
    marginBottom: 10,
  },
  textBody: {
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    marginBottom: 10,
  },
});
