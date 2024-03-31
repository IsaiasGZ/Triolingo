import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const NivelesScreen = () => {
  // Datos de los niveles
  const niveles = [
    { nombre: 'Principiante', imagen: require({ uri: 'https://www.formatmallorca.com/wp-content/uploads/2021/01/curso-ingles-a1.jpg' }) },
    { nombre: 'Intermedio', imagen: require({ uri: 'https://www.formatmallorca.com/wp-content/uploads/2021/01/curso-ingles-a2.jpg' }) },
    { nombre: 'Avanzado', imagen: require({ uri: 'https://facialix.com/wp-content/uploads/2023/11/curso-gratis-ingles-B2.jpg' }) },
    { nombre: 'Experto', imagen: require('./imagenes/experto.png') },
    { nombre: 'Maestro', imagen: require('./imagenes/maestro.png') }
  ];

  // Función para manejar el clic en un nivel
  const handleNivelPress = (nivel) => {
    // Aquí se pone la lógica para navegar a la pantalla correspondiente al nivel seleccionado
    console.log('Nivel seleccionado:', nivel);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Selecciona tu nivel:</Text>
      <View style={styles.nivelesContainer}>
        {niveles.map((nivel, index) => (
          <TouchableOpacity
            key={index}
            style={styles.nivelButton}
            onPress={() => handleNivelPress(nivel.nombre)}
          >
            <Image source={nivel.imagen} style={styles.nivelImagen} />
            <Text style={styles.nivelTexto}>{nivel.nombre}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  nivelesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  nivelButton: {
    width: 150,
    height: 150,
    backgroundColor: '#81779B',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nivelImagen: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  nivelTexto: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default NivelesScreen;
