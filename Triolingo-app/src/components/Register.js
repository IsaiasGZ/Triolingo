import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, Image } from 'react-native';

const RegisterScreen = () => {
  const [Email, setEmail] = useState('');
  const [Nombre, setNombre] = useState('');
  const [Edad, setEdad] = useState('');
  const [Contrasena, setContrasena] = useState('');

  const handleRegister = () => {
    // Por ahora, solo mostramos las datos ingresadas
    const userData = {
      Nombre: Nombre,
      Email: Email,
      Edad: Edad,
      Contrasena: Contrasena
    };
    Alert.alert('Registro exitoso', JSON.stringify(userData));
  };

  
  return (

    <View style={styles.container}>
      <Image
        // source={require('./assets/muerdeaki.jpg')}
        style={styles.image}
      />


      <Text style={styles.title}>Registrar cuenta</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        onChangeText={text => setNombre(text)}
        value={Nombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Edad"
        onChangeText={text => setEdad(text)}
        value={Edad}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        onChangeText={text => setEmail(text)}
        value={Email}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={text => setContrasena(text)}
        value={Contrasena}
        secureTextEntry={true}
      />

      <Button
        title="Registrarse"
        onPress={handleRegister}
        color={'#81779B'}
      />

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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    marginBottom: 20,
  },
});

export default RegisterScreen;