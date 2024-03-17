import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LeccionScreen = () => {
  const [pregunta, setPregunta] = useState(''); //se agrega id de la pregunta o la pregunta en si
  const [respuestas, setRespuestas] = useState(['']); // se agrega las posibles respuestas de la pregunta

  const handleRespuestaSeleccionada = (respuesta) => {
    // Aquí se agregara la lógica para manejar la respuesta seleccionada
    console.log('Youre answer was :', respuesta);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pregunta}>{pregunta}</Text>
      <View style={styles.respuestasContainer}>
        {respuestas.map((respuesta, index) => (
          <TouchableOpacity
            key={index}
            style={styles.respuestaButton}
            onPress={() => handleRespuestaSeleccionada(respuesta)}
          >
            <Text style={styles.respuestaText}>{respuesta}</Text>
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
    paddingHorizontal: 20,
  },
  pregunta: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  respuestasContainer: {
    width: '100%',
    alignItems: 'center',
  },
  respuestaButton: {
    backgroundColor: '#B3AEDB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  respuestaText: {
    fontSize: 16,
  },
});

export default LeccionScreen;