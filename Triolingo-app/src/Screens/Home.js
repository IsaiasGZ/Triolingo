import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MyCarousel from '../Components/Carrusel';

const HomeScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Nivel de ingles</Text>
        <MyCarousel></MyCarousel>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Lecciones</Text>
        {/* Otros elementos y componentes aquí */}
      </View>
    </>
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