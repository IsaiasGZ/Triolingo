import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'; 

const Drawer = createDrawerNavigator(); 

const InicioDrawerScreen = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Niveles" component={NivelesScreen} /> 
        <Drawer.Screen name="Lecciones" component={LeccionesScreen} /> 
        <Drawer.Screen name="Perfil" component={PerfilScreen} /> 
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default  InicioDrawerScreen; 