import { CommonActions } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { MMKVLoader,useMMKVStorage } from 'react-native-mmkv-storage';
import { getProfile, logoutProfile } from '../Api/Auth';
import AuthContext from '../Contexts/AuthContext';
import Employee from '../Interfaces/Employee';

const styles = StyleSheet.create({
    text: {
        color: "black"
    }
})
const HomeScreen = ({ navigation }: any) => {
    const MMKV = new MMKVLoader()
    // .withEncryption()
    // .encryptWithCustomKey("kjdhsvcjhqdsjvhdjsgxfcgh", true, "myToken")
    .initialize()

    const [token, setToken] = React.useState<string | null>()
    // const [token, setToken] = useMMKVStorage<string | null>("token", MMKV, null)
    const [dataProfile, setDataProfile] = React.useState<Employee>() // old et new datas
    const user = React.useContext(AuthContext)

    const handleLogout = () => {
        // user.logout
        // logoutProfile()
        setToken(null)
        
        // console.log("handlelogout")
        // navigation.reset({
        //     index: 0,
        //     routes: [{ name: 'Login' }],
        // });

    }

    React.useEffect(() => {

        if (token != null) {
            getProfile(token)
                .then(response => {
                    setDataProfile(response)
                    user.login()
                    user.lastname = response.lastname
                    user.firstname = response.firstname
                    user.id_agency = response.id_agency
                    user.mail = response.mail
                    user.matricule = response.matricule
                    user.phone = response.phone
                })
        } 
        else {
            console.log("token is null")
            MMKV.getStringAsync("access_token")
                .then(token => {
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
                title="Déconnexion"
                onPress={handleLogout}
            />
        </View>
    )
}
export default HomeScreen;