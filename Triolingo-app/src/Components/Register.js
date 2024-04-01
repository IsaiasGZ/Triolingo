import { useEffect, useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, Image } from 'react-native';
import axios from 'axios';


const RegisterScreen = () => {
  const [Email, setEmail] = useState('');
  const [Nombre, setNombre] = useState('');
  const [Edad, setEdad] = useState('');
  const [Contrasena, setContrasena] = useState('');
  const [Confcontrasena, setConfcontrasena] = useState('');
  const [Nickname, setNickname] = useState('');

  const handleRegister = () => {
    // Ya se guardan los datos en la BD
    //valida que la contrasena sea la misma, ademas que sea mayor a 6 caracteres
    //lo mismo con el nombre y username
    if(Nombre.length > 6){
      if(Contrasena == Confcontrasena && Contrasena.length > 6){
        const userData = {
          name: Nombre,
          age: Edad,
          email: Email,
          contra: Contrasena,
          username: Nickname,
        };
        console.log(userData);
        axios({
          method: 'POST',
          url: 'http://192.168.0.120:9000/api/register',
          data: userData,
        })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    
        Alert.alert('Registro exitoso: Favor de Iniciar Sesion con su correo y contrasena');
        
      }
      else{
        Alert.alert('Contraseña demasiado corta o contraseñas no coinciden');
        console.log('====================================');
        console.log("contra mala");
        console.log('====================================');
      }
      
    }
    else{
      Alert.alert('Usuario demasiado corto');
      console.log('====================================');
      console.log("username corto");
      console.log('====================================');
    }
  };


  return (

    <View style={styles.container}>
      <Image
        source={require('../../assets/splash.png')}
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
        placeholder="Nicname"
        onChangeText={text => setNickname(text)}
        value={Nickname}
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
       
       <TextInput
        style={styles.input}
        placeholder="Confirmar contraseña"
        onChangeText={text => setConfcontrasena(text)}
        value={Confcontrasena}
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
});

export default RegisterScreen;