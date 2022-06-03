import { Card, CheckBox } from '@rneui/base';
import React, { useEffect, useState } from 'react';
import { Alert, BackHandler, Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { MMKVLoader } from 'react-native-mmkv-storage';
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
    },

    buttonAction: {
        borderRadius: 20,
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 20,
        marginTop: 10,
        padding: 10,
        width: 200,
    }
})

const ProspectionFormScreen = ({ }) => {

    const [viewType, setViewType] = useState(1);

    const backAction = () => {

        if (viewType > 1) {
            setViewType(viewType - 1)
            return true
        }
        return false
    };

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);

        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, []);

    const first = () => {
        setViewType(1);
    };
    const second = () => {
        setViewType(2);
    };
    const third = () => {
        setViewType(3);
    };

    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);

    const [token, setToken] = React.useState<string | null>()

    const [name, setName] = useState<string | undefined>()
    const [price, setPrice] = useState<string | undefined>()
    const [address, setAddress] = useState<string | undefined>()
    const [addition_address, setAdditionAddress] = useState<string | undefined>()
    const [zipcode, setZipcode] = useState<string | undefined>()
    const [city, setCity] = useState<string | undefined>()
    const [description, setDescription] = useState<string | undefined>()
    const [surface, setSurface] = useState<string | undefined>()
    const [floor, setFloor] = useState<string | undefined>()
    const [is_furnished, setIsFurnished] = useState(false)
    const [is_available, setIsAvailable] = useState(false)
    const [name_property_type, setNamePropertyType] = useState<string | undefined>()

    const [formError, setFormError] = React.useState<string | null>(null)
    const [inputError, setInputError] = useState<Property | null>(null)

    const MMKV = new MMKVLoader().initialize()

    const data = [name, price, address, addition_address, zipcode, city, description, surface, floor]
    console.log(data)

    React.useEffect(() => {
        { handleSubmit }
    }, [token])

    const handleSubmit = () => {
        if (
            typeof token == "string" &&
            typeof name == "string" &&
            typeof price == "string" &&
            typeof address == "string" &&
            typeof addition_address == "string" &&
            typeof zipcode == "string" &&
            typeof city == "string" &&
            typeof description == "string" &&
            typeof surface == "string" &&
            typeof floor == "string") {
            // typeof is_furnished == "boolean" &&
            // typeof is_available == "boolean" ) {
            console.log(token)
            createProperty(token, name, parseInt(price), address, addition_address, zipcode, city, description, parseInt(surface), parseInt(floor))

                .then((response) => {
                    console.log("okkk")
                    if (response.status == 201) {
                        console.log(response)
                        Alert.alert('enregistré!')
                    } else if (response.status == 409) {
                        console.log(response.data.message)
                    } else if (response.status == 422) {
                        const { name, price, address, addition_address, zipcode, city, description, surface, floor }: Property = response.data
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
                            // is_furnished: is_furnished,
                            // is_available: is_available,
                            // name_property_type: name_property_type
                        }

                        setInputError(propertyInterface)
                        console.log(response.data.message)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            setFormError("Le formulaire ne peut être vide!")
            console.log(formError)
            MMKV.getStringAsync("access_token").then(token => {
                if (typeof token == "string") {
                    setToken(token)
                }
            })
        }
    }

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <ScrollView>

                <View style={{ padding: 20, backgroundColor: "white" }}>

                    {/* 1st step */}
                    {viewType === 1 &&
                        <View>
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

                            <Pressable
                                style={styles.buttonAction}
                                onPress={second}>
                                <Text style={styles.label}>Suivant</Text>
                            </Pressable>
                        </View>
                    }

                    {/* 2nd step */}
                    {viewType === 2 &&
                        <View>
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

                            <Pressable
                                style={styles.buttonAction}
                                onPress={third}>
                                <Text style={styles.label}>Suivant</Text>
                            </Pressable>

                            <Pressable
                                style={styles.buttonAction}
                                onPress={first}>
                                <Text style={styles.label}>Précédent</Text>
                            </Pressable>

                        </View>
                    }

                    {/* 3rd step */}
                    {viewType === 3 &&
                        <View>
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
                                {/* <Text style={styles.inputError}>{inputError?.is_furnished}</Text> */}

                                <CheckBox
                                    title="Bien disponible"
                                    checked={is_available}
                                    onPress={() => setIsAvailable(!is_available)}
                                    checkedColor="#c51e1e" />
                                {/* <Text style={styles.inputError}>{inputError?.is_available}</Text> */}
                            </View>

                            <Text style={styles.formError}>{formError}</Text>

                            <Pressable
                                style={{ backgroundColor: "#c51e1e", marginBottom: 20, padding: 10, borderRadius: 20 }}
                                onPress={handleSubmit}>
                                <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>Enregister le bien</Text>
                            </Pressable>

                            <Pressable
                                style={styles.buttonAction}
                                onPress={second}>
                                <Text style={styles.label}>Précédent</Text>
                            </Pressable>

                            <Pressable
                                style={styles.buttonAction}
                                onPress={first}>
                                <Text style={styles.label}>Revenir au début</Text>
                            </Pressable>
                        </View>
                    }

                </View>
            </ScrollView>
            <View>
                <FooterComponent />
            </View>
        </View >
    )
}

export default ProspectionFormScreen;