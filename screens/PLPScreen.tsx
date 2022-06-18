import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from '../components/Themed';
import { RootState } from '../store';
import ProductPLP from '../components/products/ProductPLP';
import { useNavigation } from '@react-navigation/native';
import { set_product } from '../store/linkToSliceReducer';
import { BASE_URL } from "@env";

export default function PLPScreen() {
  const [products, setProducts] = useState([]);
  const [child, setChild] = useState(<Text></Text>);
  let linkTo = useSelector((state: RootState) => state.linkTo);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const asyncFunction = async () => {
      setChild(<Text></Text>);
      let params: string = '';
      
      if (linkTo.term.length > 0) {
        params += `name=${linkTo.term}`;
      } else if (linkTo.gender.length > 0) {
        params = `gender=${linkTo.gender}&categorie=${linkTo.category}`;
      } else {
        params = `categorie=${linkTo.category}`;
      }

      const data = await fetch(`${BASE_URL}products?page=1&gender=unisexe&${params}`);

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
      if(dataJSON && dataJSON.length == 0) {
        setChild(<Text>Nous n'avons pas de produits a vous proposer</Text>);
      }
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
      {child}
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
  },
  title: {
    fontSize: 20
  },
  productsContainer: {
    flex: 1,
    margin: 10
  }
});
