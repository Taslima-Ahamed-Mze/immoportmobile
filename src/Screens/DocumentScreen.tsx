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
                <Text style={{ color: '#f13d3d', fontFamily: 'HomemadeApple-Regular', marginTop: 15, textAlign: 'center', fontSize: 20 }}>Mes documents</Text>
            </ScrollView>
            <View>
                <FooterComponent />
            </View>
        </View>
    )
}
export default DocumentScreen;