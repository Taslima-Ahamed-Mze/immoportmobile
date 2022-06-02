import React from 'react';
import { Header,Card, Icon } from "@rneui/themed";
import { Image, Button, View, Text, ScrollView ,StyleSheet, Dimensions, TouchableHighlight} from 'react-native';
import AuthContext from '../Contexts/AuthContext';

import HeaderComponent from '../Components/Header';
import CardDashboard from '../Components/CardDashboard';
import FooterComponent from '../Components/Footer';
import { color } from '@rneui/base';


const styles = StyleSheet.create({
    cardComponent:{
        display: 'flex', 
        flexDirection:'row', 
        justifyContent:'space-between'
    },
    text: {
        color: "black",
        fontSize: 16

    },
    circle: {
        width: 44,
        height: 44,
        borderRadius: 44/2,
        color:'red'
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



const Prospections = ({ navigation }: any) => {

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
                

                
                

            </ScrollView>
            <TouchableHighlight
                style = {{
                    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                    width: 50,
                    height: 50,
                    backgroundColor:'#e2e2e2',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft:330,
                    marginBottom:13
                }}
                underlayColor = '#ccc'
                onPress = { () => navigation.navigate('Home') }
            >
                <Icon
                    name='add'
                    color='#ef3a5d' 
                    size={40}
                />
      
            </TouchableHighlight>
            <View>
                <FooterComponent />
            </View>
      </View>
        
       
    );


}
export default Prospections;