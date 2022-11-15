import React from 'react';
import { Header, Image } from "@rneui/themed";
import { MMKVLoader } from 'react-native-mmkv-storage';
import { getProfile } from '../Api/Auth';
import AuthContext from '../Contexts/AuthContext';
import Employee from '../Interfaces/Employee';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: 65,
        height: 65,
        alignSelf: "center",
    },
})

const HeaderComponent = () => {

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
                    user.id = response.id
                })
        } else {
            MMKV.getStringAsync("access_token").then(token => {
                if (typeof token == "string") {
                    setToken(token)
                }
            })
        }

    }, [token])

    return (
        <Header
            placement="center"
            backgroundColor='#e2e2e2'
            elevated
            leftComponent={<Image
                style={styles.image}
                source={require('../../Assets/images/logo.png')}
            />}
            centerComponent={{ text: user.firstname + ' ' + user.lastname, style: { color: '#000000', fontSize: 25, fontFamily: 'HomemadeApple-Regular' } }}
        />
    );

}

export default HeaderComponent;