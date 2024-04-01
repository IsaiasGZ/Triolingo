import LoginScreen from './src/components/Login';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import RegisterScreen from './src/components/Register';

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CarouselScreen from './src/components/carousel';
import HomeScreen from './src/screens/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
  <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
         screenOptions={{
          headerStyle: {
            backgroundColor: '#7180A8',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Carousel" component={CarouselScreen} />
          <Stack.Screen name="Salir" component={HomeScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECFF',
    alignItems: 'nada',
    justifyContent: 'center',
  },
});


export default App;
