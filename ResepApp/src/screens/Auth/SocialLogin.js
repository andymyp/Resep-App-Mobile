import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import Theme from '../../components/Theme';

const SocialLogin = () => {
  return (
    <View style={styles.container}>
      <RectButton style={styles.button}>
        <Image
          style={styles.imageFacebook}
          source={require('../../assets/images/social/facebook.png')}
        />
      </RectButton>
      <RectButton style={styles.button}>
        <Image
          style={styles.imageGoogle}
          source={require('../../assets/images/social/google.png')}
        />
      </RectButton>
      <RectButton style={styles.button}>
        <Image
          style={styles.imageTwitter}
          source={require('../../assets/images/social/twitter.png')}
        />
      </RectButton>
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginHorizontal: 6,
  },
  imageFacebook: {
    width: 50,
    height: 50,
  },
  imageGoogle: {
    width: 35,
    height: 35,
  },
  imageTwitter: {
    width: 40,
    height: 40,
  },
});
