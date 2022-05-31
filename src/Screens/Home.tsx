import React from 'react';
import { Header,Card } from "@rneui/themed";
import { Image, Button, View, Text } from 'react-native';

import HeaderComponent from '../Components/Header';
import { CardDivider } from '@rneui/base/dist/Card/Card.Divider';

const CardDashboard = ()=>{
    return (
        <Card  borderRadius={20} containerStyle={{elevation:0, borderColor:'#ef3a5d',height:150}}>    
            <View style={{display: 'flex', flexDirection:'row',justifyContent: 'center', alignItems: 'center',margin:30}} >
                <Image
                    style={{ width: 75, height: 50}}
                    source={require('../../Assets/images/note.png')}
                />
                <Text  style={{ color:'black',fontWeight: 'bold', fontSize: 25}}>Prospections</Text>
            </View>    
        </Card>
    );
}



const Home = () => {

    return(
        
        <View style={{padding:10}}>
            <HeaderComponent />
            <CardDashboard />
            <CardDashboard />
            <CardDashboard />
            <CardDashboard />


            

        </View>
    );


}
export default Home;