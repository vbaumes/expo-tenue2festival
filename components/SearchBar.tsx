import React, { useState } from 'react';
import {TextInput, StyleSheet} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { set_term } from '../store/linkToSliceReducer';

const SearchBar: React.FC = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSubmit = () => {
    dispatch(set_term(term));
    navigation.navigate('PLPScreen');
  }
  return (      
      <TextInput
        autoCapitalize="none"
        placeholder="Chercher"
        style={styles.inputStyle}
        onChangeText={(newTerm) => setTerm(newTerm)}
        onEndEditing={handleSubmit}
      />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: '#F0EEEE',
    borderRadius: 5,
    paddingLeft: 10,
    width: 100,
    marginLeft: 15,
  }
});

export default SearchBar;

