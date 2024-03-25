import { View, StyleSheet, Text } from 'react-native';


const HomeScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Niveles</Text>
        {/* Otros elementos y componentes aquí */}
        <Text style={styles.title}>Nivel de ingles</Text>
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