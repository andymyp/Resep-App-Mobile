import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Theme from '../../components/Theme';
import Header from '../../components/Header';
import TextInput from '../../components/TextInput';
import MyCard from '../../components/MyCard';

const {width, height} = Dimensions.get('window');

const card = [
  {
    id: 1,
    image: require('../../assets/images/foods/nasi_goreng.jpg'),
    title: 'Nasi Goreng Spesial',
    desc: {
      time: '5 min',
      rating: 5,
      category: 'Makanan',
      review: 0,
    },
  },
  {
    id: 2,
    image: require('../../assets/images/foods/rendang.jpg'),
    title: 'Rendang Mewah Ala Sella',
    desc: {
      time: '10 min',
      rating: 4,
      category: 'Makanan',
      review: 2,
    },
  },
  {
    id: 3,
    image: require('../../assets/images/foods/softcake.jpg'),
    title: 'Softcake Coklat Spesial aaa aaa aaa',
    desc: {
      time: '15 min',
      rating: 4,
      category: 'Kue',
      review: 5,
    },
  },
  {
    id: 4,
    image: require('../../assets/images/foods/nasi_goreng2.jpg'),
    title: 'Nasi Goreng Telur Dadar',
    desc: {
      time: '20 min',
      rating: 3,
      category: 'Makanan',
      review: 10,
    },
  },
];

const MyRecipe = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Theme.colors.primary}
        translucent={true}
      />
      <ScrollView>
        <View style={styles.header}>
          <Header
            title="Resep Saya"
            color={Theme.colors.white}
            left={{icon: 'menu', onPress: () => navigation.openDrawer()}}
            right={{icon: 'notifications', onPress: () => true}}
          />
          <View style={{padding: 20, top: 15}}>
            <View style={{backgroundColor: 'white', borderRadius: 5}}>
              <TextInput icon="search" placeholder="Cari resep" />
            </View>
          </View>
        </View>
        <View style={styles.body}>
          {card.map((cd, i) => (
            <MyCard
              key={i}
              id={cd.id}
              image={cd.image}
              title={cd.title}
              desc={cd.desc}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyRecipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: width,
    height: height * 0.18,
    backgroundColor: Theme.colors.primary,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 30,
  },
});
