import React from 'react';
import { Header } from "@rneui/themed";
import { Image, Button, View, Text } from 'react-native';

import { MMKVLoader } from 'react-native-mmkv-storage';
import { getProfile } from '../Api/Auth';
import AuthContext from '../Contexts/AuthContext';
import Employee from '../Interfaces/Employee';


const Avatar = () => {
    return (
        <Image
            style={{ width: 75, height: 50 }}
            source={require('../../Assets/images/profil.png')}
        />
    );
}
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
            leftComponent={<Avatar />}
            centerComponent={{ text: dataProfile?.firstname + ' ' + dataProfile?.lastname, style: { color: '#000000', fontWeight: 'bold', fontSize: 22 } }}

        />
    );

}

export default HeaderComponent;