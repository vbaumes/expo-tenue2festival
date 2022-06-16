import React, { useReducer, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, KeyboardAvoidingView, FlatList, TouchableOpacity, View } from 'react-native';
import { Text } from '../components/Themed';
import * as Yup from "yup";
import MyTextInput from '../components/common/MyTextInput';
import OptinReducer from '../reducers/OptinReducer';
import MyGradientText from '../components/common/MyGradientText';

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
        <SafeAreaProvider>
        <KeyboardAvoidingView style={styles.container}>
            <FlatList
                contentContainerStyle={styles.flatList}
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
                    <MyGradientText style={styles.submitButton} text="S'inscrire à la newsletter"/>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flatList: {
        marginHorizontal: 30,
        paddingHorizontal: 10,
        marginTop: 20
    }, 
    errorMsg: {
        color: 'red'
    },
    submitContainer: {
        marginTop: 10
    },
    submitButton: {
        borderColor: 'black',
        borderWidth: 1,
        textAlign: 'center',
        color: 'white',
        padding: 5,
        fontSize: 15,
        width: 300,
    }
});


