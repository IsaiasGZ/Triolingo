import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NavigationBar = ({ title, onLeftButtonPress, leftButtonTitle, onRightButtonPress, rightButtonTitle }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onLeftButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>{leftButtonTitle}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onRightButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>{rightButtonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6F80AD',
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default NavigationBar;
