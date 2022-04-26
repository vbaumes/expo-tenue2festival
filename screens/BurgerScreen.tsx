import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { View } from '../components/Themed';
import Categorie from '../components/burger/Categorie';
import Gender from '../components/burger/Gender';

export default function BurgerScreen() {
  const [categories, setCategories] = useState([]);
  const [gender, setGender] = useState([]);

  useEffect(() => {
    const asyncFunction = async () => {
      try {
        const dataCategories = await fetch('http://192.168.43.54:8000/api/categories?page=1');
        const dataCategoriesJson = await dataCategories.json();
        setCategories(dataCategoriesJson['hydra:member']);

        const dataGender = await fetch('http://192.168.43.54:8000/api/genders?page=1');
        const dataGenderJson = await dataGender.json();
        dataGenderJson['hydra:member'].pop()
        setGender(dataGenderJson['hydra:member']);
      } catch(e) {
        console.log(e);
      }
    }
    asyncFunction();
  }, [])

  const handleSubmit = (categorie: string) => {
    console.log(categorie)
  }
  
  const handleGender = (name: string) => {
    console.log(name);
  }

  return (
    <View style={styles.container}>
      <FlatList
          horizontal
          contentContainerStyle={styles.genderContainer}
          data={gender}
          keyExtractor={(item) => 'gender_' + item["id"]}
          renderItem={({ item }) => {
            return (
              <Gender name={item["name"]} putGender={(name: string) => handleGender(name)} />
            );
          }}
        />
      <FlatList
          data={categories}
          keyExtractor={(item) => 'categorie_' + item["id"]}
          renderItem={({ item }) => {
            return (
              <Categorie name={item["name"]} goTo={(categorie: string) => handleSubmit(categorie)}/>
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
    backgroundColor: 'green',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  }
});
