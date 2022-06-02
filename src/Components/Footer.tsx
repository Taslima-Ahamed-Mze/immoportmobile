import React from 'react';
import { Header } from "@rneui/themed";
import { Image, Button, View, Text, ScrollView, StyleSheet ,Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
    footerView: {
        display: 'flex', 
        flexDirection:'row',
        justifyContent: 'center', 
        alignItems: 'center',
        height:70,
        backgroundColor:'#e2e2e2'
    },
    
    image: {
        width: 75, 
        height: 50,
        margin:10
    },
    text:{
        color:'black',
        fontWeight: 'bold', 
        fontSize: 25
    }
})




const FooterComponent = ()=>{

    const navigation = useNavigation(); 


    return(

        <View style={styles.footerView}>

            <Pressable onPress={()=>navigation.navigate('Prospections')}>
                <Image
                    style={styles.image}
                    source={require('../../Assets/images/note.png')}
                />
            </Pressable>

            <Pressable onPress={()=>navigation.navigate('Calendar')}>
                <Image
                    style={styles.image}
                    source={require('../../Assets/images/agenda.png')}
                />
            </Pressable>
            
            <Pressable onPress={()=>navigation.navigate('Document')}>
                <Image
                    style={styles.image}
                    source={require('../../Assets/images/docs.png')}
                />
            </Pressable>
            
            <Pressable onPress={()=>navigation.navigate('Login')}>
                <Image
                    style={styles.image}
                    source={require('../../Assets/images/logout.png')}
                />
            </Pressable>
           

        </View>
    );

}


export default FooterComponent;