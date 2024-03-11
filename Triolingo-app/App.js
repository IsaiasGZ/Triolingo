import LoginScreen from './src/components/Login';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import RegisterScreen from './src/components/Register';
import RegisterScree from './src/components/Home';
import NavigationBar from './src/components/Nav-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
  <View style={styles.container}>
    {/* <NavigationBar> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={RegisterScree} />
        </Stack.Navigator>
      </NavigationContainer>
    {/* </NavigationBar> */}
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECFF',
    alignItems: 'down',
    justifyContent: 'center',
  },
});


export default App;

