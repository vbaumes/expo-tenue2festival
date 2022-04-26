import React, { useReducer, useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, FlatList, TouchableOpacity, View } from 'react-native';
import { Text } from '../components/Themed';
import * as Yup from "yup";
import MyTextInput from '../components/common/MyTextInput';
import OptinReducer from '../reducers/OptinReducer';

export default function OptinFormScreen() {
    const OPTIN_FORM = [
        { name: "Nom", type: "setLastname", textContentType: "name" },
        { name: "Prénom", type: "setFirstname", textContentType: "name" },
        { name: "E-mail", type: "setEmail", textContentType: "emailAddress" }
    ];
    const [state, dispatch] = useReducer(OptinReducer, {
        lastname: '',
        firstname: '',
        email: ''
    });
    const [errorMsg, setErrorMsg] = useState([]);

    const schema = Yup.object().shape({
        name: Yup.string().required("Vous devez inscrire votre nom."),
        prenom: Yup.string().required("Vous devez inscrire votre prénom."),
        email: Yup.string().min(6, "Votre email doit faire au moins six caractères de long.").email("E-mail invalide").required("Vous devez inscrire votre e-mail.")
    });

    const submit = async () => {
        setErrorMsg([]);
        schema.validate(state).catch(function (err) {
            setErrorMsg(err.errors);
        });
      };

    return (
      <KeyboardAvoidingView style={styles.container}>
          <FlatList
            style={styles.flatList}
            data={OPTIN_FORM}
            keyExtractor={(item, index) => item.name + index}
            renderItem={({ item }) => {
            return (
                <MyTextInput
                term={item.name}
                onTermChange={(newTerm: React.SetStateAction<string>) =>
                    dispatch({ type: item.type, payload: newTerm })
                }
                onTermSubmit={() => {}}
                // @ts-ignore
                textContentType={item.textContentType}
                />
            );
            }}
        />
        {errorMsg.length < 0 ? null : <FlatList
                data={errorMsg}
                keyExtractor={(index) => index}
                renderItem={({item}) => { 
                    return <Text style={styles.errorMsg}>{item}</Text>}}
        />}
        <View style={styles.submitContainer}>
            <TouchableOpacity onPress={submit}>
            <Text style={styles.submitButton}>S'inscrire  la newsletter</Text>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flatList: {
        backgroundColor: 'blue',
        marginHorizontal: 30,
        paddingHorizontal: 10
    }, 
    errorMsg: {
        color: 'red'
    },
    submitContainer: {
        backgroundColor: 'yellow'
    },
    submitButton: {
        backgroundColor: 'yellow'
    }
});


