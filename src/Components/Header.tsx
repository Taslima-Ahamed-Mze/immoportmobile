import React from 'react';
import { Header } from "@rneui/themed";
import { Image, Button, View, Text } from 'react-native';


const Avatar = ()=>{
    return (
        <Image
            style={{ width: 75, height: 50 }}
            source={require('../../Assets/images/profil.png')}
        />
    );
}
const HeaderComponent = ()=>{

    return(
        <Header
            placement="center"
            backgroundColor='#e2e2e2'
            leftComponent={<Avatar />}
            centerComponent={{ text: 'Sonia Perraud', style: { color: '#000000', fontWeight: 'bold', fontSize: 30} }}
            
        />
    );

}


export default HeaderComponent;