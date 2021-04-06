import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Theme from '../../components/Theme';

const CloseButton = ({to}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <RectButton style={styles.button} onPress={() => navigation.navigate(to)}>
        <Icon name="close" size={40} color={Theme.colors.blackLight} />
      </RectButton>
    </View>
  );
};

export default CloseButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
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
    marginVertical: 40,
  },
});
