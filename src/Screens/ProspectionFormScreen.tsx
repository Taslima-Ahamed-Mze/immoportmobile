import { Card, CheckBox } from '@rneui/base';
import React, { useState } from 'react';
import { Alert, Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { createProperty } from '../Api/Property';
import FooterComponent from '../Components/Footer';
import Property from '../Interfaces/Property';

const styles = StyleSheet.create({
    label: {
        color: "#c51e1e",
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center",
        letterSpacing: 4,
        textTransform: 'uppercase',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 0.5,
        padding: 10,
        color: "black",
    },
    inputError: {
        fontWeight: "bold",
        color: "red",
        marginBottom: 20
    },

    button: {
        borderColor: "red",
    },

    formError: {
        fontWeight: "bold",
        color: "red",
        marginTop: 20
    }
})

const ProspectionFormScreen = ({ }) => {
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);


    const [name, setName] = useState<string | undefined>()
    const [price, setPrice] = useState<number | undefined>()
    const [address, setAddress] = useState<string | undefined>()
    const [addition_address, setAdditionAddress] = useState<string | undefined>()
    const [zipcode, setZipcode] = useState<string | undefined>()
    const [city, setCity] = useState<string | undefined>()
    const [description, setDescription] = useState<string | undefined>()
    const [surface, setSurface] = useState<number | undefined>()
    const [floor, setFloor] = useState<number | undefined>()
    const [is_furnished, setIsFurnished] = useState(false)
    const [is_available, setIsAvailable] = useState(false)
    const [name_property_type, setNamePropertyType] = useState<string | undefined>()

    const [formError, setFormError] = React.useState<string | null>(null)
    const [inputError, setInputError] = useState<Property | null>(null)

    const handleSubmit = () => {

        // const data = [name, price, address, addition_address, zipcode, city, description, surface, floor]

        // console.log(data)

        if (typeof name == "string" &&
            typeof price == "number" &&
            typeof address == "string" &&
            typeof addition_address == "string" &&
            typeof zipcode == "string" &&
            typeof city == "string" &&
            typeof description == "string" &&
            typeof surface == "number" &&
            typeof floor == "number" &&
            typeof is_furnished == "boolean" &&
            typeof is_available == "boolean" &&
            typeof name_property_type == "string") {
            createProperty(name, price, address, addition_address, zipcode, city, description, surface, floor, is_furnished, is_available, name_property_type)
                .then((response) => {
                    if (response.status == 201) {
                        Alert.alert('enregistré!')
                    } else if (response.status == 409) {
                        console.log(response.data.message)
                    } else if (response.status == 422) {
                        const { name, price, address, addition_address, zipcode, city, description, surface, floor, is_furnished, is_available, name_property_type }: Property = response.data
                        const propertyInterface: Property = {
                            name: name,
                            price: price,
                            address: address,
                            addition_address: addition_address,
                            zipcode: zipcode,
                            city: city,
                            description: description,
                            surface: surface,
                            floor: floor,
                            is_furnished: is_furnished,
                            is_available: is_available,
                            name_property_type: name_property_type
                        }
                        console.log(propertyInterface)

                        setInputError(propertyInterface)
                        console.log(response.data.message)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            setFormError("Le formulaire ne peut être vide!")
        }


    }

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <ScrollView>

                <View style={{ padding: 20, backgroundColor: "white" }}>
                    <Text style={styles.label}>Type de bien</Text>

                    <CheckBox
                        title="Maison"
                        checked={check1}
                        onPress={() => setCheck1(!check1)}
                        checkedColor="#c51e1e"
                    />
                    <CheckBox
                        title="Appartement"
                        checked={check2}
                        onPress={() => setCheck2(!check2)}
                        checkedColor="#c51e1e"
                    />
                    <CheckBox
                        title="Studio"
                        checked={check3}
                        onPress={() => setCheck3(!check3)}
                        checkedColor="#c51e1e"
                    />
                    <CheckBox
                        title="Terrain"
                        checked={check4}
                        onPress={() => setCheck4(!check4)}
                        checkedColor="#c51e1e"
                    />



                    <Text style={styles.label}>État du bien</Text>
                    <CheckBox
                        title="Neuf"
                        checkedColor="#c51e1e" checked={false} />
                    <CheckBox
                        title="Ancien"
                        checkedColor="#c51e1e" checked={false} />
                    <CheckBox
                        title="Luxe"
                        checkedColor="#c51e1e" checked={false} />


                    <Text style={styles.label}>Nom</Text>
                    <TextInput
                        onChangeText={(name) => setName(name)}
                        style={styles.input} />
                    <Text style={styles.inputError}>{inputError?.name}</Text>

                    <Text style={styles.label}>Adresse</Text>
                    <TextInput
                        onChangeText={(address) => setAddress(address)}
                        style={styles.input} />
                    <Text style={styles.inputError}>{inputError?.address}</Text>

                    <Text style={styles.label}>Adresse2</Text>
                    <TextInput
                        onChangeText={(addition_address) => setAdditionAddress(addition_address)}
                        style={styles.input} />
                    <Text style={styles.inputError}>{inputError?.addition_address}</Text>

                    <Text style={styles.label}>Code postal</Text>
                    <TextInput
                        onChangeText={(zipcode) => setZipcode(zipcode)}
                        style={styles.input} />
                    <Text style={styles.inputError}>{inputError?.zipcode}</Text>

                    <Text style={styles.label}>Ville</Text>
                    <TextInput
                        onChangeText={(city) => setCity(city)}
                        style={styles.input} />
                    <Text style={styles.inputError}>{inputError?.city}</Text>

                    <Text style={styles.label}>Description</Text>
                    <TextInput
                        onChangeText={(description) => setDescription(description)}
                        style={styles.input} />
                    <Text style={styles.inputError}>{inputError?.description}</Text>

                    <Text style={styles.label}>Prix</Text>
                    <TextInput
                        onChangeText={(price) => setPrice(price)}
                        keyboardType="numeric"
                        style={styles.input}>
                        €
                    </TextInput>
                    <Text style={styles.inputError}>{inputError?.price}</Text>

                    <Text style={styles.label}>Surface</Text>
                    <TextInput
                        onChangeText={(surface) => setSurface(surface)}
                        keyboardType="numeric"
                        style={styles.input}>
                        m²
                    </TextInput>
                    <Text style={styles.inputError}>{inputError?.surface}</Text>

                    <Text style={styles.label}>Étage</Text>
                    <TextInput
                        onChangeText={(floor) => setFloor(floor)}
                        style={styles.input} />
                    <Text style={styles.inputError}>{inputError?.floor}</Text>


                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                        <CheckBox
                            title="Bien meublé"
                            checked={is_furnished}
                            onPress={() => setIsFurnished(!is_furnished)}
                            checkedColor="#c51e1e" />
                        <Text style={styles.inputError}>{inputError?.is_furnished}</Text>

                        <CheckBox
                            title="Bien disponible"
                            checked={is_available}
                            onPress={() => setIsAvailable(!is_available)}
                            checkedColor="#c51e1e" />
                        <Text style={styles.inputError}>{inputError?.is_available}</Text>
                    </View>
                </View>

                <Text style={styles.formError}>{formError}</Text>

                <Button
                    title="Enregister le bien"
                    color="red"
                    onPress={handleSubmit}
                />
                {/* <Button
                    title="Suivant"
                    onPress={() => navigation.push('Prospect')}
                /> */}
            </ScrollView>
            <View>
                <FooterComponent />
            </View>
        </View >
    )
}


export default ProspectionFormScreen;