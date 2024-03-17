import LoginScreen from './src/components/Login';
import RegisterScreen from './src/components/Register';
import RegisterScree from './src/components/Home';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
          <Stack.Screen name="Home" component={RegisterScree} />
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

