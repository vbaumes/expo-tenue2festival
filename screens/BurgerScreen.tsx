import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import Categorie from '../components/burger/Categorie';
import Gender from '../components/burger/Gender';

export default function BurgerScreen() {
  const [categories, setCategories] = useState([]);
  const [gender, setGender] = useState([]);

  useEffect(() => {
    const asyncFunction = async () => {
      fetch('http://192.168.38.1:8000/api/categories')
          .then(data => data.json())
          .then(result => setCategories(result['hydra:member']))
          .catch(e => console.log(e));
        
      fetch('http://192.168.38.1:8000/api/genders')
          .then(data => data.json())
          .then(result => {
            result['hydra:member'].pop();
            setGender(result['hydra:member'])
          })
          .catch(e => console.log(e));
    }
    asyncFunction();
  }, [])
  
  return (
    <View style={styles.container}>
      <FlatList
          horizontal
          contentContainerStyle={styles.genderContainer}
          data={gender}
          keyExtractor={(item) => 'gender_' + item["id"]}
          renderItem={({ item }) => {
            return (
              <Gender name={item["name"]} />
            );
          }}
        />
      <FlatList
          data={categories}
          keyExtractor={(item) => 'category_' + item["id"]}
          renderItem={({ item }) => {
            return (
              <Categorie name={item["name"]} />
            );
          }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  genderContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  }
});
