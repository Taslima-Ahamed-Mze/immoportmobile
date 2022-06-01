import { CommonActions } from '@react-navigation/native';
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { MMKVLoader } from 'react-native-mmkv-storage';
import { getProfile } from '../Api/Auth';
import AuthContext from '../Contexts/AuthContext';
import Employee from '../Interfaces/Employee';

const styles = StyleSheet.create({
    text: {
        color: "black"
    }
})
const HomeScreen = ({ navigation }: any) => {
    const MMKV = new MMKVLoader().initialize()

    const [token, setToken] = React.useState<string | null>()
    const [dataProfile, setDataProfile] = React.useState<Employee>() // old et new datas
    const user = React.useContext(AuthContext)
    React.useEffect(() => {

        if (token != null) {
            getProfile(token)
                .then(response => {
                    setDataProfile(response)
                    user.login()
                    user.lastname = response.lastname
                    user.firstname = response.firstname
                })
        } else {
            console.log('token is null')
            MMKV.getStringAsync("access_token").then(token => {
                if (typeof token == "string") {
                    setToken(token)
                }
            })

        }

    }, [token])

    return (
        <View>
            <Text style={styles.text}>{dataProfile?.firstname} {dataProfile?.lastname}</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
}
export default HomeScreen;