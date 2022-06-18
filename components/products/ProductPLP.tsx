import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from '../Themed';
const formatNumber = require('../../utils/format');

type ProductPLPType = {
  id: Number,
  title: string,
  price: Number,
  shortDescription: string,
  handleSubmit: Function
}

const ProductPLP: React.FC<ProductPLPType> = ({id, title, price, shortDescription, handleSubmit}) => {

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
      marginHorizontal: 10,
      borderColor: 'black',
      borderWidth: 1
    },
    image: {
      width: 148,
      height: 200,
    },
    details: {
      display: 'flex', 
      alignItems: 'flex-start', 
      height: 98,
      padding: 5,
      borderTopWidth: 1,
      borderTopColor: 'black'
    },
    text: {
      color: 'blue'
    }
});

export default ProductPLP;