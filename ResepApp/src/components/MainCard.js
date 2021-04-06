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

const MainCard = ({id, image, title, desc, author, favorite}) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Pressable onPress={() => alert('Image')}>
          <Image resizeMode="cover" style={styles.image} source={image} />
        </Pressable>
        <Pressable style={styles.favIcon} onPress={() => alert('Favorite')}>
          <Icon
            style={styles.favorite}
            name="favorite"
            size={30}
            color={favorite ? Theme.colors.danger : Theme.colors.white}
          />
        </Pressable>
      </View>
      <View style={styles.body}>
        <View style={styles.desc}>
          <Text style={Theme.texts.time}>
            {desc.time} | {desc.category}
          </Text>
          <Text>
            {[...Array(desc.rating)].map((_, i) => (
              <Icon key={i} name="star" color={Theme.colors.yellow} size={16} />
            ))}
          </Text>
        </View>
        <View style={styles.author}>
          <Pressable onPress={() => alert('Avatar')}>
            <Image
              resizeMode="cover"
              style={styles.avatar}
              source={author.avatar}
            />
          </Pressable>
          <Pressable
            style={styles.titleContainer}
            onPress={() => alert('Resep')}>
            <Text style={Theme.texts.title3}>{title}</Text>
            <Text style={Theme.texts.body}>{author.name}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default MainCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginBottom: 30,
  },
  imageContainer: {
    flex: 1,
    width: width - 40,
    height: width / 2 - 40,
    overflow: 'hidden',
  },
  image: {
    width: width - 40,
    height: width / 2 - 40,
    borderRadius: 20,
  },
  favIcon: {
    position: 'absolute',
    backgroundColor: Theme.colors.default04,
    top: 5,
    right: 5,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  favorite: {
    opacity: 0.8,
  },
  body: {
    marginTop: 2,
  },
  desc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  author: {
    marginTop: 5,
    flexDirection: 'row',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  titleContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
});
