import React from 'react';
import { Header,Card, Icon } from "@rneui/themed";
import { Image, Button, View, Text, ScrollView ,StyleSheet} from 'react-native';
import AuthContext from '../Contexts/AuthContext';

import HeaderComponent from '../Components/Header';
import CardDashboard from '../Components/CardDashboard';
import FooterComponent from '../Components/Footer';


const styles = StyleSheet.create({
    cardComponent:{
        display: 'flex', 
        flexDirection:'row', 
        justifyContent:'space-between'
    },
    text: {
        color: "black",
        fontSize: 16

    }
})

const ComponentProspect = ()=>{
    return (
        <Card containerStyle={{borderColor:'#e2e2e2',backgroundColor:'#e2e2e2'}}>
            <View style={styles.cardComponent} >
                <Text style={styles.text}>Prospections</Text>
                <Icon
                    name='delete'
                    color='#ef3a5d' 
                />
            </View>
        </Card>
    );
}



const Prospections = () => {

    return(

        <View style={{ flex: 1,padding:10}}>
            <HeaderComponent />
            <ScrollView>
                <ComponentProspect />
                <ComponentProspect />
                <ComponentProspect />
                <ComponentProspect />
                <ComponentProspect />
                <ComponentProspect />
                <ComponentProspect />
                <ComponentProspect />
                <ComponentProspect />
                <ComponentProspect />
                <ComponentProspect />
                <ComponentProspect />
                <ComponentProspect />
                <ComponentProspect />

                <ComponentProspect />

            </ScrollView>
            <View>
                <FooterComponent />
            </View>
      </View>
        
       
    );


}
export default Prospections;