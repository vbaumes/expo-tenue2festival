import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '../Themed';

type ProductPDPType = {
  id: Number,
  title: string,
  price: Number,
  shortDescription: string
}

const ProductPDP: React.FC<ProductPDPType> = ({id, title, price, shortDescription}) => {
  const formatNumber = (number: Number) => {
    const array = number.toString().split('');
    return array.slice(0, -2).join('') + ',' + array.slice(-2, array.length).join('') + '€';
  }

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
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

export default ProductPDP;