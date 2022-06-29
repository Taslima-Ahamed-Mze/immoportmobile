import React, { useEffect, useState } from 'react';
import { Header, Card, Icon } from "@rneui/themed";
import { Image, Button, View, Text, ScrollView, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
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




const Prospections = ({ navigation }: any) => {

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
                    console.log(response, 'screen');


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
            <ScrollView>
                <View>
                    {
                        dataProperty != null && dataProperty.map(item => (
                            <View>
                                <Card containerStyle={{ borderColor: '#e2e2e2', backgroundColor: '#e2e2e2' }}>
                                    <View style={styles.cardComponent} >
                                        <Text style={styles.text}>{item.property.name}</Text>
                                        <Icon
                                            name='delete'
                                            color='#ef3a5d'
                                        />
                                    </View>
                                </Card>
                            </View>

                        ))
                    }
                </View>
            </ScrollView>
            <TouchableHighlight
                style={{
                    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                    width: 50,
                    height: 50,
                    backgroundColor: '#e2e2e2',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 330,
                    marginBottom: 13
                }}
                underlayColor='#ccc'
                onPress={() => navigation.navigate('Prospect')}
            >
                <Icon
                    name='add'
                    color='#ef3a5d'
                    size={40}
                />

            </TouchableHighlight>
            <View>
                <FooterComponent />
            </View>
        </View>


    );


}
export default Prospections;