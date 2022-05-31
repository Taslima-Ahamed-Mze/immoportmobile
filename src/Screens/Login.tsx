import React from 'react';
import {
    StyleSheet,
    View,
    Button,
    Alert,
    TextInput,
} from 'react-native';
import { Input, Image } from "@rneui/themed";
import { login } from '../Api/Auth';

const LoginScreen = ({ navigation }) => {

    const [matricule, setMatricule] = React.useState('')
    const [password, setPassword] = React.useState('')

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 24,
        },

        image: {
            aspectRatio: 1,
            width: '100%',
            textAlign: "center",
            marginTop: 16,
            paddingVertical: 8,
        },
    })

    return (

        <View style={styles.container}>
            <TextInput placeholder='Matricule' onChangeText={(matricule) => setMatricule(matricule)} />
            <TextInput placeholder='Mot de passe' onChangeText={(password) => setPassword(password)} secureTextEntry={true} />
            <Button
                title="Connexion"
                color="red"
            />
        </View>
    );
}
export default LoginScreen;
