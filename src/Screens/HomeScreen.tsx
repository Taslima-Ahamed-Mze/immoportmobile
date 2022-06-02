import { CommonActions } from '@react-navigation/native';
import React from 'react';
import { View, Button, Text, StyleSheet,Pressable } from 'react-native';


import HeaderComponent from '../Components/Header';
import CardDashboard from '../Components/CardDashboard';

const styles = StyleSheet.create({
    text: {
        color: "black"
    }
})

const images = {
    note : require('../../Assets/images/note.png'),
    agenda : require('../../Assets/images/agenda.png'),
    doc : require('../../Assets/images/docs.png'),
    logout : require('../../Assets/images/logout.png'),

};
const HomeScreen = ({ navigation }: any) => {
    

    return (
        <View>
            
          <View style={{padding:10}}>
                <HeaderComponent />
                <Pressable onPress={()=>navigation.navigate('Prospections')}>
                    <CardDashboard  title='Prospections' image={images.note} />
                </Pressable>
                <Pressable onPress={()=>navigation.navigate('Calendar')}>
                    <CardDashboard  title='Agenda' image={images.agenda}/>
                </Pressable>
                <CardDashboard title='Documents' image={images.doc}/>
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <CardDashboard  title='Déconnexion' image={images.logout}/>
                </Pressable>


            </View>
        </View>
    )
}
export default HomeScreen;