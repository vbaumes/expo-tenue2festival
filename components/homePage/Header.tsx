import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '../Themed';
import SearchBar from './SearchBar';


const Header: React.FC = ({}) => {
    const [term, setTerm] = useState('');

    const handleSubmit = () => {
    console.log(term);
    }
  return (
    <View style={styles.header}>
    <View style={styles.logoContainer}>
      <Text style={styles.logo}>Logo</Text>
    </View>
    <View style={styles.searchBarContainer}>
      <SearchBar term={term} onTermChange={(newTerm: React.SetStateAction<string>) => {setTerm(newTerm)}} onTermSubmit={handleSubmit} />
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
    header: {
        paddingTop: 20,
        paddingHorizontal: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },
    logoContainer: {
      flex: 1,
      paddingRight: 10,
    },
    searchBarContainer: {
      flex: 1.5
    },
    logo: {
      backgroundColor: 'blue',
      height: 40,
      width: 40,
    }
});

export default Header;