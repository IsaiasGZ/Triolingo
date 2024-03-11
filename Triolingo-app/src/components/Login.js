import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Por ahora, solo mostraremos las datos ingresadas
    Alert.alert('Credenciales', `Correo electrónico: ${email}, Contraseña: ${password}`);
  };

  const handleRegisterLink = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>

      <Image
        source={require('../../assets/muerdeaki.jpg')}
        style={styles.image}
        />
      
      <Text style={styles.title}>Inicio de sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <Button

        title="Iniciar sesión"
        onPress={handleLogin}
        color={'#81779B'}
      />

<TouchableOpacity onPress={handleRegisterLink}>
        <Text style={styles.registerLink}>¿No tienes una cuenta? ¡Crea una aquí!</Text>
      </TouchableOpacity>
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
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ddd',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
  },

  registerLink: {
    fontSize: 12,
    marginTop: 10,
    color: '#000',
    textDecorationLine: 'none',
  },

});

export default LoginScreen;