import React from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');

const images = [
  { uri: 'https://www.formatmallorca.com/wp-content/uploads/2021/01/curso-ingles-a1.jpg' },
  { uri: 'https://www.formatmallorca.com/wp-content/uploads/2021/01/curso-ingles-a2.jpg' },
  { uri: 'https://facialix.com/wp-content/uploads/2023/11/curso-gratis-ingles-B2.jpg' }
];

const MyCarousel = () => {
  const navigation = useNavigation(); // Utiliza el hook useNavigation para obtener el objeto de navegación

  const handleImagePress = (index) => {
    // Navegar a una pantalla de detalles pasando el índice de la imagen seleccionada
    navigation.navigate('DetallesImagen', { index });
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => handleImagePress(index)}>
      <View style={styles.imageContainer}>
        <Image source={item} style={styles.image} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width - 50}
        layout="default"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: width - 50,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ajusta el modo de escalado de la imagen
  },
});

export default MyCarousel;