import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { set_category } from '../../store/linkToSliceReducer';

export type Props = {
    name: string,
};

const Categorie: React.FC<Props> = ({name}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSubmit = (categorie: string) => {
    dispatch(set_category(categorie))
    navigation.navigate('PLPScreen');
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => handleSubmit(name)}>
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
