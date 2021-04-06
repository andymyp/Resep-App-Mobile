import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Theme from './Theme';

const {width, height} = Dimensions.get('window');

const Category = ({id, title, image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
      </View>
      <Text style={[Theme.texts.body, styles.title]}>{title}</Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  card: {
    width: width / 5,
    height: width / 5,
    borderRadius: width / 5 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.primary,
  },
  image: {
    width: width / 5,
    height: width / 5,
    borderRadius: width / 5 / 2,
    opacity: 0.8,
  },
  title: {
    marginTop: 5,
    width: width / 5,
    textAlign: 'center',
  },
});
