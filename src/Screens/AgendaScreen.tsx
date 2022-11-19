import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TouchableOpacity, TouchableHighlight, Dimensions } from 'react-native';
import HeaderComponent from '../Components/Header';
import FooterComponent from '../Components/Footer';
import RDV from '../Interfaces/Rdv';
import { getEmployeeRdv } from '../Api/Rdv';
import { MMKVLoader } from 'react-native-mmkv-storage';
import { Card, Icon } from '@rneui/themed';
import { format, parseISO } from 'date-fns';

const AgendaScreen = ({ navigation }: any) => {
    const MMKV = new MMKVLoader().initialize()

    const [dataRdv, setDataRdv] = useState<Array<RDV> | null>(null)
    const [token, setToken] = useState<string | null>()

    useEffect(() => {

        if (token != null) {
            getEmployeeRdv(token)
                .then(response => {
                    setDataRdv(response)
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
        <View style={{ flex: 1, padding: 10 }}>
            <HeaderComponent />
            <Text style={{ color: '#f13d3d', fontFamily: 'HomemadeApple-Regular', marginTop: 15, textAlign: 'center', fontSize: 20 }}>Mes rdv</Text>
            <ScrollView>
                <TouchableHighlight
                    style={{
                        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                        width: 50,
                        height: 50,
                        backgroundColor: '#e2e2e2',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 330,
                    }}
                    underlayColor='#ccc'
                >
                    <Icon
                        name='add'
                        color='#ef3a5d'
                        size={40}
                    />
                </TouchableHighlight>
                {
                    dataRdv != null && dataRdv?.map((item, key) => (
                        <View
                            key={key}
                        >
                            <Card
                                containerStyle={{
                                    borderColor: '#f13d3d',
                                    borderWidth: 0.5,
                                    borderStyle: "solid",
                                    borderRadius: 5,
                                    backgroundColor: 'white'
                                }}
                            >
                                <Card.Title style={{ color: 'black', fontWeight: 'bold' }}>{format(parseISO(item.beginning), "dd-MM-yyyy HH:mm")} | {item.label}
                                </Card.Title>
                                <Card.Divider />
                                <View>
                                    <Text style={{ color: 'black' }}>{item.firstname} {item.lastname} - {item.phone}</Text>
                                    <Text style={{ color: 'black' }}>{item.address}, {item.city} {item.zipcode}</Text>
                                </View>
                            </Card>
                        </View>
                    ))
                }
            </ScrollView >

            <View>
                <FooterComponent />
            </View>
        </View >
    )
}
export default AgendaScreen;