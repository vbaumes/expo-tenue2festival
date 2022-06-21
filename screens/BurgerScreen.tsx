import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Image } from 'react-native';
import { View } from '../components/Themed';
import Categorie from '../components/burger/Categorie';
import Gender from '../components/burger/Gender';
import { BASE_URL } from "@env";

export default function BurgerScreen() {
  const [categories, setCategories] = useState([]);
  const [gender, setGender] = useState([]);

  useEffect(() => {
    const asyncFunction = async () => {
      console.log(`${BASE_URL}categories`)
      fetch(`${BASE_URL}categories`)
          .then(data => data.json())
          .then(result => setCategories(result['hydra:member']))
          .catch(e => console.log(e));
        
      fetch(`${BASE_URL}genders`)
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
              <Gender name={item["name"]} id={item["id"]}/>
            );
          }}
        />
      <FlatList
          data={categories}
          keyExtractor={(item) => 'category_' + item["id"]}
          renderItem={({ item }) => {
            return (
              <Categorie name={item["name"]} id={item["id"]}/>
            );
          }}
      />
      <Image
        style={styles.img}
        source={require("../assets/images/photo-menu.png")}
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
    marginBottom: 10,
    marginLeft: 5
  },
  img: {
    width: 380,
    marginVertical: 20,
  }
});
