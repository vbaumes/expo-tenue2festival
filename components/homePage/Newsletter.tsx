import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { View, Text } from '../Themed';

const Newsletter: React.FC = ({}) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const onTermChange = (term: string) => {
    setEmail(term);
  }
  return (
    <View style={styles.container}>
      <LinearGradient
      colors={["#7613A5", "#C71BBC", "#BC8917"]}
      end={{ x: .8, y: 1 }}
          >
        <Text style={[styles.text, styles.title, { opacity: 1 }]}>Abonne-toi  notre newsletter !</Text>
        <Text style={[styles.text, { opacity: 1 }]}>Reçois en avant-première les dernières tendances, les dernières news sur les festivals, promotions et bien plus encore!</Text>
        <LinearGradient
          colors={["#7613A5", "#C71BBC", "#BC8917"]}
          end={{ x: .8, y: 1 }}
          style={styles.inputContainer}
        >
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputStyle}
            onChangeText={onTermChange}
            textContentType="emailAddress"
          />
            <TouchableOpacity
            onPress={() => {
              console.log(email);
              navigation.navigate('OptinForm');
            }}>
              <Text style={[styles.inputText, { opacity: 1 }]}>Soumettre</Text>
            </TouchableOpacity>
        </LinearGradient>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({ 
    container: {
        width: '95%',
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 10
    },
    inputContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10
    },
    text: {
        color: 'white',
        padding: 10, 
        textAlign: 'center'
    },
    title: {
      fontSize: 20
    },
    inputStyle: {
        backgroundColor: 'white',
        width: 150,
        borderColor: 'black',
        borderWidth: 1,
        height: 40
    },
    inputText: {
      color: 'black',
      padding: 10,
      backgroundColor: 'white',
      height: 40,
      marginLeft: 10,
      borderColor: 'black',
      borderWidth: 1,
      fontSize: 15
    }
});

export default Newsletter;