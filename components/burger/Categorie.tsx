import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export type Props = {
    name: string,
    goTo: Function
};

const Categorie: React.FC<Props> = ({name, goTo}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => goTo(name)}>
        <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
      height: 75,
      width: 300,
      margin: 10,
      backgroundColor: 'blue',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
  }
});

export default Categorie;