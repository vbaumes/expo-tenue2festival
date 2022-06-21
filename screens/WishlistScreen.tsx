import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import ProductWishlist from '../components/products/ProductWishlist';
import { Text, View } from '../components/Themed';
import { RootState } from '../store';

export default function WishlistScreen() {
  let wishlist = useSelector((state: RootState) => state.wishlist.products);
  const [child, setChild] = useState(<Text>Ajouter un article  votre wishlist!</Text>);

  useEffect(() => {
    const isEmpty = <Text>Ajouter des produits à votre wishlist</Text>
    const isNotEmpty = <FlatList
                          horizontal
                          contentContainerStyle={styles.productsContainer}
                          data={wishlist}
                          renderItem={({ item }) => <ProductWishlist
                            id={item["id"]}
                            title={item["title"]} 
                            price={item["price"]} 
                            shortDescription={item["shortDescription"]} 
                            handleSubmit={() => console.log('a')}
                          />}
                        />;

    if (wishlist.length > 0) {
      setChild(isNotEmpty);
    } else {
      setChild(isEmpty);
    }
  }, [wishlist]);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Votre Wishlist :</Text>
      {child}
    </View>
  );
}

const styles = StyleSheet.create({
  productsContainer: {
    width: 400
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30
  }
});
