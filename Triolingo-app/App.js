import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/components/Login';
import RegisterScreen from './src/components/Register';
import InicioDrawerScreen from './src/Screens/Inicio';

const Stack = createStackNavigator();

const App = () => {
  return (
  <View>
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
          <Stack.Screen name="Home" component={InicioDrawerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  </View>
  );
};



export default App;

