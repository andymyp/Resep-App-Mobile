import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Theme from '../../components/Theme';
import Button from '../../components/Button';

const SubSlide = ({subtitle, deskripsi, last, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, Theme.texts.title1]}>{subtitle}</Text>
      <Text style={[styles.deskripsi, Theme.texts.body]}>{deskripsi}</Text>
      <Button
        label={last ? 'Ayo Mulai!' : 'Selanjutnya'}
        variant={last ? 'primary' : 'default'}
        {...{onPress}}
      />
    </View>
  );
};

export default SubSlide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
  },
  deskripsi: {
    textAlign: 'center',
    marginBottom: 20,
  },
});
