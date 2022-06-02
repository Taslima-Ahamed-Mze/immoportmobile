import React from 'react';
import { View, Button,Text, ScrollView} from 'react-native';
import HeaderComponent from '../Components/Header';
import FooterComponent from '../Components/Footer';

const CalendarScreen = ({ navigation }: any) => {

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