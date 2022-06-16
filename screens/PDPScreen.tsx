import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from '../components/Themed';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
import { set_products } from '../store/wishlistSliceReducer';
import { AntDesign } from '@expo/vector-icons';
import MyGradientText from '../components/common/MyGradientText';
const formatNumber = require('../utils/format');

const PDPScreen: React.FC = () => {
  const dispatch = useDispatch();
  let wishlist = useSelector((state: RootState) => state.wishlist.products);
  let product = useSelector((state: RootState) => state.linkTo.product);
  const [isInWislist, setIsInWishlist] = useState(false);

  // to parse description html
  let source = {
    html: product.description
  };
  const { width } = useWindowDimensions();

  const addToWishlist = () => {
    if (wishlist.length > 0) {
      let products: Array<Object> = [];
      wishlist.forEach((product) => {
        products.push(product);
      });

      if(products.find((el) => el === product) === undefined) {
        products.push(product);
      }
      dispatch(set_products(products))
    } else {
      dispatch(set_products([product]));
    }
  }

  const removeFromWishlist = () => {
    const result = wishlist.filter((el) => el !== product);
    if (result.length > 0) {
      dispatch(set_products(products));
    } else {
      dispatch(set_products([]));
    }
  }

  const handleHeart = () => {
    if (!isInWislist) {
      addToWishlist();
    } else {
      removeFromWishlist();
    }

    setIsInWishlist(!isInWislist);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.image}>Image</Text>
      <View style={styles.subContainer}>
        <View style={styles.heartAndPrice}>
          <Text style={styles.price}>{formatNumber(product.price)}</Text>
          <TouchableOpacity onPress={() => handleHeart()} >
            <AntDesign name={isInWislist ? 'heart' : 'hearto'} size={20} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{product.title}</Text>
        <View style={styles.buttonContainer} >
          <MyGradientText style={styles.button} text={'Acheter'}/>
        </View>
        <View style={styles.description}>
          <RenderHtml
            contentWidth={width}
            source={source}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 30
    },
    image: {
      width: '100%',
      height: 400,
      backgroundColor: 'blue'
    },
    subContainer: {
      margin: 10
    },
    heartAndPrice: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5
    },
    price: {
      color: '#717171',
      fontWeight: 'bold',
      fontSize: 18
    },
    title: {
      fontSize: 16
    },
    buttonContainer: {
      display: 'flex',
      alignItems: 'center',
      marginVertical: 20,
    },
    button: {
      borderColor: 'black',
      borderWidth: 1,
      width: 150,
      textAlign: 'center',
      color: 'white',
      padding: 5,
      fontSize: 20
    },
    description: {
      marginVertical: 5,
    }
});

export default PDPScreen;