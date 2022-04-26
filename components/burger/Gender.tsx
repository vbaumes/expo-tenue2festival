import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export type Props = {
    name: string,
    putGender: Function
};

const Gender: React.FC<Props> = ({name, putGender}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => putGender(name)}>
        <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    height: 75,
    width: 180,
    margin: 'auto',
    borderColor: 'black',
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Gender;