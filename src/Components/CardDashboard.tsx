import React from 'react';
import { Card, Icon } from "@rneui/themed";
import { View, Text, StyleSheet, Alert, Pressable } from 'react-native';


const styles = StyleSheet.create({
    cardView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 30
    },

    image: {
        width: 75,
        height: 50
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 20
    }
})


const CardDashboard = (cardContent: any) => {
    return (

        <Card borderRadius={18} containerStyle={{ elevation: 0, borderColor: '#c51e1e', height: 150 }}>
            <View style={styles.cardView}>
                <Icon
                    raised
                    name={cardContent.name}
                    type='font-awesome'
                    color='#c51e1e'
                />
                <Text style={styles.text}>{cardContent.title}</Text>
            </View>
        </Card>
    );
}

export default CardDashboard;