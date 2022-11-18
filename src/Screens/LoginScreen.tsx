import React from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    Pressable,
    Image,
} from 'react-native'
import { login } from '../Api/Auth'
import Login from '../Interfaces/Login'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'white',
        paddingVertical: 120,
    },
    image: {
        width: 150,
        height: 150,
        alignSelf: "center",
        marginBottom: 30
    },
    button: {
        backgroundColor: '#f13d3d',
        padding: 10,
        flexDirection: 'row',
        borderRadius: 25,
        width: 250,
        alignSelf: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderRadius: 10,
        borderWidth: 0.5,
        color: "black"
    },
    label: {
        color: "black",
        fontWeight: "bold",
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 4
    },
    text: {
        color: "white",
        fontSize: 18,
        textTransform: 'uppercase',
        marginLeft: 55
    },
    inputError: {
        fontWeight: "bold",
        color: "red",
        marginBottom: 20
    },
    formError: {
        fontWeight: "bold",
        color: "red",
        marginBottom: 20
    }
})

const LoginScreen = ({ navigation }: any) => {

    const [formError, setFormError] = React.useState<string | null>(null)
    const [inputError, setInputError] = React.useState<Login | null>(null)

    const [matricule, setMatricule] = React.useState<string | undefined>()
    const [password, setPassword] = React.useState<string | undefined>()

    const handleSubmit = () => {
        if (typeof matricule == "string" && typeof password == "string") {
            login(parseInt(matricule), password)
                .then((response) => {
                    if (response.status == 200) {
                        navigation.navigate('Home')
                    } else if (response.status == 401) {
                        console.log("401 msg " + response.data.message)
                        setFormError(response.data.message)
                    } else if (response.status == 422) {
                        const { matricule, password }: Login = response.data
                        const loginInterface: Login = {
                            matricule: matricule,
                            password: password,
                        }
                        setInputError(loginInterface)
                        setFormError(response.data.message)
                    }
                })
                .catch((error) => {
                    setFormError(error)
                })
        } else {
            setFormError("Tous les champs sont obligatoires")
        }
    }

    return (
        <View style={styles.container}>

            <Image
                style={styles.image}
                source={require('../assets/images/logo.png')}
            />
            <Text style={styles.label}>Matricule</Text>
            <TextInput
                style={styles.input}
                onChangeText={(matricule) => setMatricule(matricule)}
                keyboardType="number-pad"
            />
            <Text style={styles.inputError}>{inputError?.matricule}</Text>

            <Text style={styles.label}>Mot de passe</Text>
            <TextInput
                style={styles.input}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={true}
            />
            <Text style={styles.inputError}>{inputError?.password}</Text>

            <Text style={styles.formError}>{formError}</Text>
            <Pressable onPress={handleSubmit}>
                <View style={styles.button}>
                    <Text style={styles.text}>Connexion</Text>
                </View>
            </Pressable>
        </View>

    )
}
export default LoginScreen