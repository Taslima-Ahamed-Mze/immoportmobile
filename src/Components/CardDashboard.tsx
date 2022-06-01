import React from 'react';
import { Header,Card } from "@rneui/themed";
import { Image, Button, View, Text, StyleSheet, Alert ,Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
    cardView: {
        display: 'flex', 
        flexDirection:'row',
        justifyContent: 'center', 
        alignItems: 'center',
        margin:30
    },
    
    image: {
        width: 75, 
        height: 50
    },
    text:{
        color:'black',
        fontWeight: 'bold', 
        fontSize: 25
    }
})


/* function cardClick(){
    const navigation = useNavigation();

    navigation.navigate('LoginScreen')
    console.log(navigation);
    

} */

const CardDashboard = (cardContent:any)=>{
    const navigation = useNavigation();
    return (
        <Pressable onPress={()=>navigation.navigate('ProspectionScreen')}>

            <Card  borderRadius={18} containerStyle={{elevation:0, borderColor:'#ef3a5d',height:150}}>    
                <View style={styles.cardView} >
                    <Image
                        style={styles.image}
                        source={cardContent.image}
                    />
                    <Text  style={styles.text}>{cardContent.title}</Text>
                </View>    
            </Card>
        </Pressable>
    );
}

export default CardDashboard;