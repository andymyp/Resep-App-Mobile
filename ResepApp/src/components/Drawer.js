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
import Icon from 'react-native-vector-icons/MaterialIcons';

import Theme from './Theme';
import DrawerItem from './DrawerItem';
import Header from './Header';

const {width, height} = Dimensions.get('window');
const aspecRation = 234 / 600;
const HEIGHT = width * aspecRation;

const menuItems = [
  {
    icon: 'home',
    color: Theme.colors.primary,
    label: 'Beranda',
    screen: 'Home',
  },
  {
    icon: 'style',
    color: Theme.colors.yellow,
    label: 'Resep Saya',
    screen: 'MyRecipe',
  },
  {
    icon: 'favorite',
    color: Theme.colors.danger,
    label: 'Kesukaan',
    screen: 'Favorite',
  },
  {
    icon: 'logout',
    color: Theme.colors.blackLight,
    label: 'Keluar',
    screen: 'Logout',
  },
];

const Drawer = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topBg}>
          <Header
            title="Menu"
            color={Theme.colors.white}
            left={{icon: 'person', onPress: () => true}}
            right={{icon: 'close', onPress: () => navigation.closeDrawer()}}
          />
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.mainBg1} />
        <View style={styles.mainBg2} />
        <View style={styles.content}>
          <View style={{top: -height / 9}}>
            <Image
              style={styles.avatar}
              source={require('../assets/images/avatar.png')}
            />
            <Text style={[Theme.texts.title2, {textAlign: 'center'}]}>
              M. Yudistiandy Prabowo
            </Text>
            <Text
              style={[
                Theme.texts.body,
                {marginBottom: 30, textAlign: 'center'},
              ]}>
              andymyp199@gmail.com
            </Text>
            {menuItems.map((item, i) => (
              <DrawerItem
                key={i}
                icon={item.icon}
                color={item.color}
                label={item.label}
                screen={item.screen}
              />
            ))}
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomBg}>
          <Image
            style={styles.bottomImage}
            source={require('../assets/images/bgtop.jpg')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.primary,
  },
  topContainer: {
    flex: 0.3,
    backgroundColor: Theme.colors.white,
  },
  topBg: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: Theme.colors.primary,
    borderBottomRightRadius: 75,
  },
  mainContainer: {
    flex: 0.8,
  },
  mainBg1: {
    flex: 1,
    backgroundColor: Theme.colors.primary,
  },
  mainBg2: {
    flex: 1,
    backgroundColor: Theme.colors.whiteLight,
    opacity: 0.9,
  },
  content: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    padding: 40,
    justifyContent: 'center',
    backgroundColor: Theme.colors.white,
    borderTopLeftRadius: 75,
    borderBottomRightRadius: 75,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    alignSelf: 'center',
    borderColor: Theme.colors.white,
    borderWidth: 5,
  },
  bottomContainer: {
    flex: 0.2,
    backgroundColor: Theme.colors.white,
  },
  bottomBg: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: Theme.colors.primary,
    borderTopLeftRadius: 75,
    overflow: 'hidden',
  },
  bottomImage: {
    width: width,
    height: HEIGHT * 0.61 + 50,
    opacity: 0.9,
  },
});
