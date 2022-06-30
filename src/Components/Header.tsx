import React from 'react';
import { Header, Icon } from "@rneui/themed";
import { Image, Button, View, Text } from 'react-native';

import { MMKVLoader } from 'react-native-mmkv-storage';
import { getProfile } from '../Api/Auth';
import AuthContext from '../Contexts/AuthContext';
import Employee from '../Interfaces/Employee';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserAlt, faUserAstronaut, faUserCircle, faUserClock, faUserCog, faUserGear, faUserGroup, faUserLargeSlash, faUserMd, faUsersRays, faUserTimes } from '@fortawesome/free-solid-svg-icons';


const Avatar = () => {
    return (
        <FontAwesomeIcon icon={faUserCircle} color="#c51e1e" size={40}  />
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
            leftComponent={<Avatar />}
            centerComponent={{ text: user.firstname + ' ' + user.lastname, style: { color: '#000000', fontWeight: 'bold', fontSize: 22 } }}

        />
    );

}

export default HeaderComponent;