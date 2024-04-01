import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import PagerView from 'react-native-pager-view';

// npx expo install react-native-pager-view
const images = [
  { uri: 'https://www.formatmallorca.com/wp-content/uploads/2021/01/curso-ingles-a1.jpg' },
  { uri: 'https://www.formatmallorca.com/wp-content/uploads/2021/01/curso-ingles-a2.jpg' },
  { uri: 'https://facialix.com/wp-content/uploads/2023/11/curso-gratis-ingles-B2.jpg' }
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function CarouselScreen() {
  const ref = useRef();
  const [imgActive, setimgActive] = useState(0);

  onchange = (nativeEvent) => {
    if(nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if(slide != imgActive) {
        setimgActive(slide);
      }
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <PagerView 
        style={styles.pager} 
        ref={ref}
        initialPage={0}
      >
        <View key="1" style={styles.wrapDot}>
          <Image
            resizeMode='stretch'
            style={styles.wrap}
            source={{uri: 'https://www.formatmallorca.com/wp-content/uploads/2021/01/curso-ingles-a1.jpg'}}
            />
            <Text style={styles.dotActive}> ● <Text style={styles.dot}>● <Text style={styles.dot}>●</Text></Text></Text>
        </View>
        <View key="2">
          <Image
            resizeMode='stretch'
            style={styles.wrap}
            source={{uri: 'https://www.formatmallorca.com/wp-content/uploads/2021/01/curso-ingles-a2.jpg'}}
            />
            <Text style={styles.dot}> ● <Text style={styles.dotActive}>● <Text style={styles.dot}>●</Text></Text></Text>
        </View>
        <View key="3">
          <Image
            resizeMode='stretch'
            style={styles.wrap}
            source={{uri: 'https://facialix.com/wp-content/uploads/2023/11/curso-gratis-ingles-B2.jpg'}}
            />
            <Text style={styles.dot}> ● <Text style={styles.dot}>● <Text style={styles.dotActive}>●</Text></Text></Text>
        </View>
      </PagerView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pager: {
    flex: 1,
    alignSelf: "stretch",
    bottom: -35
  },
  wrap:{
    width: WIDTH,
    height: HEIGHT * 0.25,
    resizeMode: 'cover'
  },
  wrapDot:{
    position:'absolute',
    bottom:0,
    alignSelf: 'center'
  },
  dotActive:{
    margin:3,
    color: 'red',
    alignSelf: 'center'
  },
  dot:{
    margin: 3,
    color: 'black',
    alignSelf: 'center'
  }
});
