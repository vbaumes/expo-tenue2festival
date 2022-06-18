import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { View } from '../Themed';
import SearchBar from '../SearchBar';
import { AntDesign } from '@expo/vector-icons';

const Header: React.FC = ({}) => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.icon}
        source={require("../../assets/picto/t2F.png")}
      />
      <View style={styles.searchBarContainer}>
        <AntDesign size={20} name="search1" />
        <SearchBar />
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
      marginTop: 20
    },
    icon: {
      width: 30,
      height: 30
    },
    searchBarContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: 150
    }
});

export default Header;

function set_term(categorie: any): any {
  throw new Error('Function not implemented.');
}
