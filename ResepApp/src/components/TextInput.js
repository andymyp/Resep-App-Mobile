import React, {useState, forwardRef, RefObject} from 'react';
import {StyleSheet, Text, View, TextInput as TI} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Theme from './Theme';

const TextInput = forwardRef(({icon, touched, error, ...props}, ref) => {
  const color = !touched
    ? Theme.colors.default
    : error
    ? Theme.colors.danger
    : Theme.colors.primary;

  const bgColor = !error ? Theme.colors.primary : Theme.colors.danger;
  const iconName = !error ? 'check' : 'close';

  return (
    <View style={[styles.container, {borderColor: color}]}>
      <View style={styles.icon}>
        <Icon name={icon} size={20} {...{color}} />
      </View>
      <View style={styles.icon2}>
        <TI
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          {...{ref}}
          {...props}
        />
      </View>
      {touched && (
        <View
          style={[
            styles.valid,
            {
              backgroundColor: bgColor,
            },
          ]}>
          <Icon name={iconName} size={14} color={Theme.colors.white} />
        </View>
      )}
    </View>
  );
});

export default TextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 48,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 5,
  },
  icon2: {
    flex: 1,
  },
  valid: {
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
