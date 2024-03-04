<<<<<<< Updated upstream
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
=======
import LoginScreen from './src/components/Login';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import RegisterScreen from './src/components/Register';
import NavigationBar from './src/components/Nav-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
>>>>>>> Stashed changes

import { NativeBaseProvider, Box } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box></Box>
    </NativeBaseProvider>
  );
}
