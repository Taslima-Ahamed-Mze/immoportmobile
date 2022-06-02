import { Text } from '@rneui/base';
import React from 'react';
import { View, Button,ScrollView} from 'react-native';
import HeaderComponent from '../Components/Header';
import FooterComponent from '../Components/Footer';

const DocumentScreen = ({ navigation }: any) => {

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
export default DocumentScreen;