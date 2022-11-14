import React from 'react';
import { View, Pressable, ScrollView } from 'react-native';
import AuthContext from '../Contexts/AuthContext';
import HeaderComponent from '../Components/Header';
import CardDashboard from '../Components/CardDashboard';

const name = {
    note: 'file-text-o',
    agenda: 'calendar',
    doc: 'folder-o',
    logout: 'sign-out'
}

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

            <View style={{ padding: 10, backgroundColor: 'white' }}>
                <HeaderComponent />
                <ScrollView style={{ height: 1000 }}>

                    <Pressable onPress={() => navigation.navigate('Prospections')}>
                        <CardDashboard title='Prospections' name={name.note}>
                        </CardDashboard>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Agenda')}>
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