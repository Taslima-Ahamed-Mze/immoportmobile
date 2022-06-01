import React from 'react';
import { View, Button } from 'react-native';

const CalendarScreen = ({ navigation }: any) => {

    return (
        <View>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
}
export default CalendarScreen;