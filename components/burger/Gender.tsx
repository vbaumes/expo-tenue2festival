import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { set_gender } from '../../store/linkToSliceReducer';

export type Props = {
    name: string
};

const Gender: React.FC<Props> = ({name}) => {
  const dispatch = useDispatch();
  let genderStyle = useSelector((state: RootState) => {
    return (state.linkTo.gender === name) ? styles.isSelected : styles.notSelected;
  })
  
  return (
    <TouchableOpacity style={genderStyle} onPress={() => dispatch(set_gender(name))}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  notSelected: {
    backgroundColor: 'blue',
    height: 75,
    width: 200,
    margin: 'auto',
    borderColor: 'black',
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  isSelected: {
    backgroundColor: 'green',
    height: 75,
    width: 200,
    margin: 'auto',
    borderColor: 'black',
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Gender;