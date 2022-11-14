import React from 'react';
import { Icon } from "@rneui/themed";
import { View, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
    footerView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        backgroundColor: '#e2e2e2'
    },

    image: {
        width: 75,
        height: 50,
        margin: 10
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25
    }
})

const FooterComponent = () => {

    const navigation = useNavigation();


    return (

        <View style={styles.footerView}>

            <Pressable onPress={() => navigation.navigate('Home')}>
                <Icon
                    raised
                    name='home'
                    type='font-awesome'
                    color='#c51e1e'
                />
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Prospections')}>
                <Icon
                    raised
                    name='file-text-o'
                    type='font-awesome'
                    color='#c51e1e'
                />
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Agenda')}>
                <Icon
                    raised
                    name='calendar'
                    type='font-awesome'
                    color='#c51e1e'
                />
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Document')}>
                <Icon
                    raised
                    name='folder-o'
                    type='font-awesome'
                    color='#c51e1e'
                />
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Login')}>
                <Icon
                    raised
                    name='sign-out'
                    type='font-awesome'
                    color='#c51e1e'
                />
            </Pressable>


        </View>
    );

}


export default FooterComponent;