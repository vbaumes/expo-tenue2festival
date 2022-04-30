import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from '../Themed';

type ProductPLPType = {
  id: Number,
  title: string,
  price: Number,
  shortDescription: string,
  handleSubmit: Function
}

const ProductPLP: React.FC<ProductPLPType> = ({id, title, price, shortDescription, handleSubmit}) => {

  const formatNumber = (number: Number) => {
    const array = number.toString().split('');
    return array.slice(0, -2).join('') + ',' + array.slice(-2, array.length).join('') + '€';
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleSubmit(id)}>
        <View style={styles.image}>
          <Text style={styles.text}>Image</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.text}>{formatNumber(price)}</Text>
          <Text style={styles.text}>{shortDescription}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: 150,
      height: 300,
      marginHorizontal: 10
    },
    image: {
      width: 150,
      height: 200,
    },
    details: {
      display: 'flex', 
      alignItems: 'flex-start', 
      height: 100,
      padding: 5,
      backgroundColor: 'green'
    },
    text: {
      color: 'blue'
    }
});

export default ProductPLP;