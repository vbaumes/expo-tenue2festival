import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from '../components/Themed';
import { RootState } from '../store';
import ProductPLP from '../components/products/ProductPLP';
import { useNavigation } from '@react-navigation/native';
import { set_product } from '../store/linkToSliceReducer';

export default function PLPScreen() {
  const [products, setProducts] = useState([]);
  let linkTo = useSelector((state: RootState) => state.linkTo);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const asyncFunction = async () => {
      const params = (linkTo.gender.length > 0) ? `gender=${linkTo.gender}&categorie=${linkTo.category}` : `categorie=${linkTo.category}`;
      const data = await fetch(`http://192.168.1.176:8000/api/products?page=1&gender=unisexe&${params}`);

      const dataJSON = await data.json()
        .then(dataJSON => {
          dataJSON['hydra:member']
          let products = new Object();
          for(let i = 0; i < dataJSON['hydra:member'].length; ++i) {
            let id = dataJSON['hydra:member'][i]["id"];
            products[id] = dataJSON['hydra:member'][i]
          }
          return products
        })
        .catch(e => console.log(e));
      setProducts(dataJSON);
    }
    asyncFunction();      
  }, [linkTo])
  
  const goToPDP = (id: any) => {
    dispatch(set_product(products[id]))
    navigation.navigate('PDPScreen');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{linkTo.category}</Text>
      <FlatList
        horizontal
        contentContainerStyle={styles.productsContainer}
        data={Object.values(products)}
        renderItem={({ item }) => <ProductPLP
          id={item["id"]}
          title={item["title"]} 
          price={item["price"]} 
          shortDescription={item["shortDescription"]} 
          handleSubmit={(id: any) => goToPDP(id)}
        />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  title: {
    fontSize: 20
  },
  productsContainer: {
    flex: 1,
    backgroundColor: 'lightblue',
    margin: 10
  }
});
