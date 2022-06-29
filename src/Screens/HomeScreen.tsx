import { CommonActions } from '@react-navigation/native';
import React from 'react';
import { View, Button, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { MMKVLoader } from 'react-native-mmkv-storage';
import { getProfile } from '../Api/Auth';
import AuthContext from '../Contexts/AuthContext';


import HeaderComponent from '../Components/Header';
import CardDashboard from '../Components/CardDashboard';

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
                        <CardDashboard title='Prospections' image={images.note} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Calendar')}>
                        <CardDashboard title='Agenda' image={images.agenda} />
                    </Pressable>
                    <CardDashboard title='Documents' image={images.doc} />
                    <Pressable onPress={handleLogout}>
                        <CardDashboard title='Déconnexion' image={images.logout} />
                    </Pressable>
                </ScrollView>

            </View>
        </View>
    )
}
export default HomeScreen;