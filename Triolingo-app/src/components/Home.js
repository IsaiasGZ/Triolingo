import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LeccionScreen from '../screens/Lecciones';
const Drawer = createDrawerNavigator();
import axios from 'axios';


const HomeScreen = () => {
  return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Lecciones" component={LeccionScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    //   <View style={styles.container}>
    //   <Image
    //     // source={require('./assets/muerdeaki.jpg')}
    //     style={styles.image}
    //   />


    //   <Text style={styles.title}>Home</Text>
      
    // </View>
    );
}; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});

export default HomeScreen;