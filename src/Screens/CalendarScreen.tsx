import * as React from 'react';
import { View, Button,Text, ScrollView} from 'react-native';
import {useState, useEffect} from 'React';
import HeaderComponent from '../Components/Header';
import FooterComponent from '../Components/Footer'; 

const CalendarScreen = ({ navigation }: any) => {

    //String array storing the names of the months 
    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
                    'Juillet', 'Août', 'Septembre', 'Novembre', 'Décembre'];

    //String array storing the names of the days in a week
    const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam','Dim'];

    //String array storing the number of days for each months
    const numberMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

   const [date, setDate] = useState();


    return (
        <View style={{ flex: 1,padding:10}}>
            <ScrollView>
                <HeaderComponent />
            </ScrollView>
            <View>
                <FooterComponent />
            </View>
        </View>
        
    )
}
export default CalendarScreen;