import React from 'react';
import { Header,Card } from "@rneui/themed";
import { Image, Button, View, Text } from 'react-native';

import HeaderComponent from '../Components/Header';
import CardDashboard from '../Components/CardDashboard';




const images = {
    note : require('../../Assets/images/note.png'),
    agenda : require('../../Assets/images/agenda.png'),
    doc : require('../../Assets/images/docs.png'),
    logout : require('../../Assets/images/logout.jpg'),

};

const Home = () => {

    return(
        
        <View style={{padding:10}}>
            <HeaderComponent />
            <CardDashboard  title='Prospections' image={images.note} />
            <CardDashboard  title='Agenda' image={images.agenda}/>
            <CardDashboard title='Documents' image={images.doc}/>
            <CardDashboard  title='Déconnexion' image={images.logout}/>


        </View>
    );


}
export default Home;