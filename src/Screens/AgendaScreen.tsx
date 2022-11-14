import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native';
import HeaderComponent from '../Components/Header';
import FooterComponent from '../Components/Footer';
import RDV from '../Interfaces/Rdv';
import { getEmployeeRdv } from '../Api/Rdv';
import { MMKVLoader } from 'react-native-mmkv-storage';
import { Card } from '@rneui/themed';
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

            <ScrollView>
                <HeaderComponent />

                {
                    dataRdv != null && dataRdv?.map(item => (
                        <Card
                            containerStyle={{
                                borderColor: '#f13d3d',
                                borderWidth: 0.5,
                                borderStyle: "solid",
                                borderRadius: 5,
                                backgroundColor: 'white'
                            }}
                        >
                            <View>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>{format(parseISO(item.beginning), "dd-MM-yyyy")}</Text>
                                <Text style={{ color: 'black' }}>{item.firstname} {item.lastname} - {item.phone}</Text>
                                <Text style={{ color: 'black' }}>{item.address}, {item.city} {item.zipcode}</Text>
                                <Text style={{ color: 'black' }}>{item.label}</Text>
                            </View>
                        </Card>
                    ))
                }
            </ScrollView>

            <View>
                <FooterComponent />
            </View>
        </View>
    )
}
export default AgendaScreen;