import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import LeccionScreen from './src/screens/Lecciones'
import InicioDrawerScreen from './src/Components/Inicio';

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
          <Stack.Screen name="Lecciones" component={LeccionScreen} />
          <Stack.Screen name="Inicio" component={InicioDrawerScreen} />
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



