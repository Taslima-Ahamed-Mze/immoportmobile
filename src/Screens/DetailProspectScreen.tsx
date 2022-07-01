import React, { useEffect, useState } from 'react';
import { Header, Card, Icon } from "@rneui/themed";
import { Image, Button, View, Text, ScrollView, StyleSheet, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native';
import AuthContext from '../Contexts/AuthContext';
import { MMKVLoader } from 'react-native-mmkv-storage';

import HeaderComponent from '../Components/Header';
import CardDashboard from '../Components/CardDashboard';
import FooterComponent from '../Components/Footer';
import { color } from '@rneui/base';
import Property from '../Interfaces/Property';
import { getEmployeeProperties } from '../Api/Property';

const styles = StyleSheet.create({
    cardComponent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: "black",
        fontSize: 16

    },
    circle: {
        width: 44,
        height: 44,
        borderRadius: 44 / 2,
        color: 'red'
    }
})




const DetailProspect = ({ navigation }: any) => {

    const MMKV = new MMKVLoader().initialize()

    const [dataProperty, setDataProperty] = useState<Array<Property> | null>(null)
    const [token, setToken] = useState<string | null>()
    const user = React.useContext(AuthContext)

    const id_employee = user.id;


    useEffect(() => {

        if (token != null) {
            getEmployeeProperties(id_employee, token)
                .then(response => {
                    setDataProperty(response)


                }).catch((error) => {
                    console.log(error, 'catch screen');
                });
        } else {
            console.log('token is null')
            MMKV.getStringAsync("access_token").then(token => {
                if (typeof token == "string") {
                    setToken(token)
                }
            })

        }

    }, [token])

    return (

        <View style={{ flex: 1, padding: 10 }}>
            <HeaderComponent />
            
            
            <FooterComponent />
            
        </View>


    );


}
export default DetailProspect;