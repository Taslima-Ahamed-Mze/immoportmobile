import { CommonActions } from '@react-navigation/native';
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { MMKVLoader } from 'react-native-mmkv-storage';
import { getProfile } from '../Api/Auth';
import AuthContext from '../Contexts/AuthContext';

const styles = StyleSheet.create({
    text: {
        color: "black"
    }
})
const HomeScreen = ({ navigation }: any) => {
    const MMKV = new MMKVLoader().initialize()

    const [token, setToken] = React.useState<string | null>()
    // const [dataProfile, setDataProfile] = React.useState<Employee>()
    const user = React.useContext(AuthContext)

    React.useEffect(() => {

        if (typeof token == "string") {
            getProfile(token)
                .then(response => {
                    user.login()
                    console.log(response)
                    user.lastname = response.lastname
                    user.firstname = response.firstname
                    user.id_agency = response.id_agency
                    user.mail = response.mail
                    user.matricule = response.matricule
                    user.phone = response.phone
                    user.isLoggedIn = true

                })
        } else {
            MMKV.getStringAsync("access_token").then(token => {
                if (typeof token == "string") {
                    setToken(token)
                }
            })

        }

    }, [token])

    const handleLogout = () => {
        user.logout
        // logoutProfile()
        // setToken(null)

        // navigation.navigate("Login")
        // console.log("handlelogout")
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });

    }

    return (
        <View>
            {user &&
                <Text style={styles.text}>{user?.firstname} {user?.lastname} - {user?.matricule}</Text>
            }
            <Button
                title="Déconnexion"
                onPress={handleLogout}
            />
        </View>
    )
}
export default HomeScreen;