import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { set_category, set_categoryName, set_term } from '../../store/linkToSliceReducer';

export type Props = {
    name: string,
    id: number
};

const Categorie: React.FC<Props> = ({name, id}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSubmit = (id: number, name: string) => {
    dispatch(set_category(id))
    dispatch(set_categoryName(name))
    dispatch(set_term(''));
    navigation.navigate('PLPScreen');
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => handleSubmit(id, name)}>
        <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
      height: 60,
      width: 300,
      margin: 10,
      backgroundColor: '#CECECE',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
  }
});

export default Categorie;
