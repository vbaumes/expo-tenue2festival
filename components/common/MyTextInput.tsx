import { TextInput, StyleSheet } from "react-native";
import { View } from "../Themed";

type TextInputProps = {
  term: string;
  onTermChange: any;
  onTermSubmit: any;
  textContentType:
    | "none"
    | "URL"
    | "addressCity"
    | "addressCityAndState"
    | "addressState"
    | "countryName"
    | "creditCardNumber"
    | "emailAddress"
    | "familyName"
    | "fullStreetAddress"
    | "givenName"
    | "jobTitle"
    | "location"
    | "middleName"
    | "name"
    | "namePrefix"
    | "nameSuffix"
    | "nickname"
    | "organizationName"
    | "postalCode"
    | "streetAddressLine1"
    | "streetAddressLine2"
    | "sublocality"
    | "telephoneNumber"
    | "username"
    | "password";
};

export default function MyTextInput({
  term,
  onTermChange,
  onTermSubmit,
  textContentType,
}: TextInputProps) {
  return (
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        textContentType={textContentType}
      />
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#E8E8E8',
    borderRadius: 15,
    width: 300
  }
});