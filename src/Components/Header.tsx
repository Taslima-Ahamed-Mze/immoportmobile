import React from 'react';
import { Header } from "@rneui/themed";
import { MMKVLoader } from 'react-native-mmkv-storage';
import { getProfile } from '../Api/Auth';
import AuthContext from '../Contexts/AuthContext';
import Employee from '../Interfaces/Employee';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Avatar = () => {
    return (
        <FontAwesomeIcon icon={faUserCircle} color="#c51e1e" size={40} />
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
            elevated
            leftComponent={<Avatar />}
            centerComponent={{ text: user.firstname + ' ' + user.lastname, style: { color: '#000000', fontWeight: '100', fontSize: 30 } }}
        />
    );

}

export default HeaderComponent;