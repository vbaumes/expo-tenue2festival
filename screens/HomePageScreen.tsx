import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import SearchBar from '../components/SearchBar';

export default function HomePageScreen({ navigation }: RootTabScreenProps<'HomePage'>) {
  const [term, setTerm] = useState('');

  const handleSubmit = () => {
    console.log(term);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>Logo</Text>
        </View>
        <SearchBar term={term} onTermChange={(newTerm: React.SetStateAction<string>) => {setTerm(newTerm)}} onTermSubmit={handleSubmit} />
      </View>
      <View style={styles.content}>
        <Text>Contenu</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  content: {
    flex: 10,
    justifyContent:'center',
    alignItems: 'center'
  },
  logoContainer: {
    flex: 1,
    paddingRight: 10,
  },
  logo: {
    backgroundColor: 'blue',
    height: 40,
    width: 40,
  }
});
