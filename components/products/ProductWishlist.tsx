import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from '../Themed';
const formatNumber = require('../../utils/format');
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { set_products } from '../../store/wishlistSliceReducer';

type ProductWishlistType = {
    id: Number,
    title: string,
    price: Number,
    shortDescription: string,
    handleSubmit: Function
}

const ProductWishlist: React.FC<ProductWishlistType> = ({id, title, price, shortDescription, handleSubmit}) => {
    let wishlist = useSelector((state: RootState) => state.wishlist.products);
    const dispatch = useDispatch();
    const removeFromWishlist = (id) => {
        const result = wishlist.filter((el) => el.id !== id);
        if (result.length > 0) {
          dispatch(set_products(result));
        } else {
          dispatch(set_products([]));
        }
    }
    
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => handleSubmit(id)}>
            <View style={styles.image}>
              <Text style={styles.text}>Image</Text>
              <TouchableOpacity onPress={() => removeFromWishlist(id)}>
                <AntDesign name="close" size={20} color="black" />
              </TouchableOpacity>
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 10
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

export default ProductWishlist;