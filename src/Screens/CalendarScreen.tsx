import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import { LocaleConfig } from 'react-native-calendars';
import React, { useState, useEffect } from 'react'
import { View, Button, Text, ScrollView } from 'react-native';
import HeaderComponent from '../Components/Header';
import FooterComponent from '../Components/Footer';


const CalendarScreen = ({ navigation }: any) => {

    //Setting the localization to France standards
    LocaleConfig.locales['fr'] = {
        monthNames: [
            'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet',
            'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
        ],
        shortMonthNames: [
            'Jan.', 'Fév.', 'Mars', 'Avril', 'Mai', 'Juin',
            'Jui.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'
        ],
        dayNames: [
            'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'
        ],
        dayNamesShort: [
            'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.', 'Dim.'
        ],
        today: 'Aujourd\'hui'
    };
    LocaleConfig.defaultLocale = 'fr';

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <ScrollView>
                <HeaderComponent />
                <Calendar
                /** DATE PARAMS **/
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={day => {
                        console.log('selected day', day);
                    }}
                    // Handler which gets executed on day long press. Default = undefined
                    onDayLongPress={day => {
                        console.log('selected day', day);
                    }}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={'2022-01-01'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    maxDate={'2099-12-31'}

                /** MARKED DATES PARAMS **/
                    // Collection of dates that have to be marked. Default = {}
                    markedDates={{
                        '2022-06-26': {selected: true, marked: true, selectedColor: 'red'}
                    }}

                /** ARROW PARAMS **/
                    // Disable left arrow. Default = false
                    disableArrowLeft={false}
                    // Disable right arrow. Default = false
                    disableArrowRight={false}
                />
            </ScrollView>
            <View>
                <FooterComponent />
            </View>
        </View>
    )
}
export default CalendarScreen;