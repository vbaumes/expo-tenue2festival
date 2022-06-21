import React from 'react';
import { StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Header from '../components/homePage/Header';
import Newsletter from '../components/homePage/Newsletter';

export default function HomePageScreen({ navigation }: RootTabScreenProps<'HomePage'>) {

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image
            style={styles.image}
            source={require("../assets/images/homepage.jpg")}
          />
        <Newsletter />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    justifyContent: 'center'
  },
  content: {
    flex: 10,
    justifyContent:'center',
    alignItems: 'center'
  },
  image: {
    width: '95%',
    height: '60%'
  }
});
