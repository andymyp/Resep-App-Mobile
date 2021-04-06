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
import MainCard from '../../components/MainCard';

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
    },
    author: {
      avatar: require('../../assets/images/avatar.png'),
      name: 'M. Yudistiandy Prabowo',
    },
    favorite: true,
  },
  {
    id: 3,
    image: require('../../assets/images/foods/softcake.jpg'),
    title: 'Softcake Coklat Spesial',
    desc: {
      time: '15 min',
      rating: 4,
      category: 'Kue',
    },
    author: {
      avatar: require('../../assets/images/avatar.png'),
      name: 'Akhmat Rifaldy',
    },
    favorite: true,
  },
];

const Favorite = ({navigation}) => {
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
            title="Kesukaan"
            color={Theme.colors.white}
            left={{icon: 'menu', onPress: () => navigation.openDrawer()}}
            right={{icon: 'notifications', onPress: () => true}}
          />
          <View style={{padding: 20, top: 15}}>
            <View style={{backgroundColor: 'white', borderRadius: 5}}>
              <TextInput
                icon="search"
                placeholder="Cari resep yang kamu inginkan"
              />
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.content}>
            {card.map((cd, i) => (
              <MainCard
                key={i}
                id={cd.id}
                image={cd.image}
                title={cd.title}
                desc={cd.desc}
                author={cd.author}
                favorite={cd.favorite}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorite;

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
  content: {
    flex: 1,
  },
});
