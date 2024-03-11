import { useEffect, useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, Image } from 'react-native';
import axios from 'axios';


const RegisterScreen = () => {
  return (

    <View style={styles.container}>
      <Image
        // source={require('./assets/muerdeaki.jpg')}
        style={styles.image}
      />


      <Text style={styles.title}>Home</Text>
      
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
  }
});

export default RegisterScreen;