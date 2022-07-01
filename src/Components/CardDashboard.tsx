import React from 'react';
import { Card, Icon } from "@rneui/themed";
import { View, Text, StyleSheet, Alert, Pressable } from 'react-native';


const styles = StyleSheet.create({
    cardView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    image: {
        width: 75,
        height: 50
    },
    text: {
        color: 'black',
        fontWeight: '100',
        fontSize: 22,
        marginLeft: 20,
        textTransform: 'uppercase',
    }
})


const CardDashboard = (cardContent: any) => {
    return (

        <Card borderRadius={18} containerStyle={{ elevation: 0, borderColor: '#c51e1e', marginTop: 40}}>
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