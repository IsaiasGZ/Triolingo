import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'; 
import HomeScreen from '../Screens/Home';
import NivelesScreen from './NivelesScreen';
import LeccionScreen from '../Screens/Lecciones';
import PerfilScreen from './PerfilScreen';

const Drawer = createDrawerNavigator(); 

const InicioDrawerScreen = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Niveles" component={NivelesScreen} /> 
        <Drawer.Screen name="Lecciones" component={LeccionScreen} /> 
        <Drawer.Screen name="Perfil" component={PerfilScreen} /> 
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default InicioDrawerScreen;