<<<<<<< Updated upstream
import {useForm, Coroller} from 'react-hook-form';

export default function LoginForm(props){
    const {control, handleSubmit, errors, setValue} = useForm();
    const onSubmit = (data) =>[];
=======
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TextInput, Button, Alert, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

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
        // source={require('./assets/muerdeaki.jpg')}
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
>>>>>>> Stashed changes
};
