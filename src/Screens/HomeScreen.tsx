import React from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import AuthContext from '../Contexts/AuthContext';
import HeaderComponent from '../Components/Header';
import CardDashboard from '../Components/CardDashboard';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Icon } from '@rneui/themed';

const styles = StyleSheet.create({
    text: {
        color: "black"
    }
})

const images = {
    note: require('../../Assets/images/note.png'),
    agenda: require('../../Assets/images/agenda.png'),
    doc: require('../../Assets/images/docs.png'),
    logout: require('../../Assets/images/logout.png'),

};

const type = 'font-awesome'
const name = {
    note: 'home',
    agenda: 'calendar',
    doc: 'file',
    logout: 'sign-out'
}
// const name = {
//     note: faHouse as IconProp

// }

const HomeScreen = ({ navigation }: any) => {
    const user = React.useContext(AuthContext)
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

            <View style={{ padding: 10 }}>
                <HeaderComponent />
                <ScrollView>

                    <Pressable onPress={() => navigation.navigate('Prospections')}>
                        <CardDashboard title='Prospections' name={name.note}>
                        </CardDashboard>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Calendar')}>
                        <CardDashboard title='Agenda' name={name.agenda}>
                        </CardDashboard>
                    </Pressable>

                    <CardDashboard title='Documents' name={name.doc}>
                    </CardDashboard>

                    <Pressable onPress={handleLogout}>
                        <CardDashboard title='Déconnexion' name={name.logout}>
                        </CardDashboard>
                    </Pressable>

                </ScrollView>

            </View>
        </View>
    )
}
export default HomeScreen;