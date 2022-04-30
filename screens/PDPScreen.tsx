import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '../components/Themed';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const PDPScreen: React.FC = () => {
  let product = useSelector((state: RootState) => state.linkTo.product);

  const formatNumber = (number: Number) => {
    const array = number.toString().split('');
    return array.slice(0, -2).join('') + ',' + array.slice(-2, array.length).join('') + '€';
  }

  return (
    <View style={styles.container}>
      <Text>{product.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: 150,
      height: 300,
      marginHorizontal: 10
    }
});

export default PDPScreen;