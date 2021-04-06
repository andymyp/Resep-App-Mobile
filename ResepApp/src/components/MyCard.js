import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Theme from './Theme';

const {width, height} = Dimensions.get('window');

const MyCard = ({id, image, title, desc}) => {
  return (
    <Pressable style={styles.card} onPress={() => alert('Resep saya ' + id)}>
      <View style={styles.imageContainer}>
        <Image resizeMode="cover" style={styles.image} source={image} />
      </View>
      <View style={styles.body}>
        <Text style={Theme.texts.time}>
          {desc.time} | {desc.category}
        </Text>
        <Text style={Theme.texts.title3}>{title}</Text>
        <View style={styles.desc}>
          <Text>Review: {desc.review}</Text>
          <View style={styles.rating}>
            {[...Array(desc.rating)].map((_, i) => (
              <Icon key={i} name="star" color={Theme.colors.yellow} size={16} />
            ))}
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default MyCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  imageContainer: {
    width: 90,
    height: 90,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 15,
  },
  desc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
