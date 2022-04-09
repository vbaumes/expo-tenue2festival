import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Header from '../components/homePage/Header';

export default function HomePageScreen({ navigation }: RootTabScreenProps<'HomePage'>) {

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text>Contenu</Text>
      </View>
    </View>
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
  }
});
