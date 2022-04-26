import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export type Props = {
  term: string;
  onTermChange: any;
  onTermSubmit: any;
};

const SearchBar: React.FC<Props> = ({term, onTermChange, onTermSubmit}) => {
  return (
      <TextInput
        autoCapitalize="none"
        placeholder="Search"
        value={term}
        style={styles.inputStyle}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: '#F0EEEE',
    borderRadius: 5,
    paddingLeft: 10,
  },
});

export default SearchBar;
