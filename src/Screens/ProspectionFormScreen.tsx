import { CheckBox, Divider, Text } from '@rneui/base';
import React, { useEffect, useState } from 'react';
import { Alert, BackHandler, Pressable, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { MMKVLoader } from 'react-native-mmkv-storage';
import { createProperty, getPropertyCategories, getPropertyFeatures, getPropertyHeaters, getPropertyKitchens, getPropertyRoomTypes, getPropertyTypes } from '../Api/Property';
import FooterComponent from '../Components/Footer';
import Property from '../Interfaces/Property';
import PropertyFeatures from '../Interfaces/PropertyFeatures';

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
    },

    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
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
    const fourth = () => {
        setViewType(4);
    };

    const [token, setToken] = useState<string | null>()
    const [propertyType, setPropertyType] = useState<PropertyFeatures[]>([{ id: 0, name: 'undefined', isChecked: false }])

    const [propertyCategory, setPropertyCategory] = useState<PropertyFeatures[]>([{ id: 0, name: 'undefined', isChecked: false }])
    const [propertyHeater, setPropertyHeater] = useState<PropertyFeatures[]>([{ id: 0, name: 'undefined', isChecked: false }])
    const [propertyKitchen, setPropertyKitchen] = useState<PropertyFeatures[]>([{ id: 0, name: 'undefined', isChecked: false }])
    const [propertyRoomType, setPropertyRoomType] = useState<PropertyFeatures[]>([{ id: 0, name: 'undefined', isChecked: false }])
    const [propertyFeature, setPropertyFeature] = useState<PropertyFeatures[]>([{ id: 0, name: 'undefined', isChecked: false }])
    const [name, setName] = useState<string | undefined>()
    const [price, setPrice] = useState<number>()
    const [address, setAddress] = useState<string | undefined>()
    const [addition_address, setAdditionAddress] = useState<string | undefined>()
    const [zipcode, setZipcode] = useState<string | undefined>()
    const [city, setCity] = useState<string | undefined>()
    const [description, setDescription] = useState<string | undefined>()
    const [surface, setSurface] = useState<string | undefined>()
    const [isFurnished, setIsFurnished] = useState(false)
    const [formError, setFormError] = React.useState<string | null>(null)
    const [inputError, setInputError] = useState<Property | null>(null)

    const MMKV = new MMKVLoader().initialize()

    const data = [token, propertyType[0].id, name, price, address, addition_address, zipcode, city, description, surface, isFurnished]

    /* retrieve all the property informations */
    React.useEffect(() => {
        getPropertyTypes()
            .then(response => {
                setPropertyType(response)
            })

        getPropertyCategories()
            .then(response => {
                setPropertyCategory(response)
            })

        getPropertyHeaters()
            .then(response => {
                setPropertyHeater(response)
            })

        getPropertyKitchens()
            .then(response => {
                setPropertyKitchen(response)
            })

        getPropertyRoomTypes()
            .then(response => {
                setPropertyRoomType(response)
            })

        getPropertyFeatures()
            .then(response => {
                setPropertyFeature(response)
            })

    }, [])

    MMKV.getStringAsync("access_token").then(token => {
        if (typeof token == "string") {
            setToken(token)
        }
    })

    /* send form creation after submit */
    React.useEffect(() => {
        { handleSubmit }
    }, [token])

    const handleSubmit = () => {
        createProperty(name as string, price as number, address as string, addition_address as string, zipcode as string, city as string, description as string, surface as string, isFurnished, propertyType[0].id, propertyCategory[0].id, propertyKitchen[0].id, propertyHeater[0].id, token as string)
            .then((response) => {
                if (response.status == 201) {
                    Alert.alert('enregistré!')
                } else if (response.status == 409) {
                    console.log("409: " + response.data)
                } else if (response.status == 422) {
                    console.log(response.data)
                    const { name, price, address, addition_address, zipcode, city, description, surface }: Property = response
                    console.log("NAME " + price)

                    const propertyInterface: Property = {
                        name: name,
                        price: price,
                        address: address,
                        addition_address: addition_address,
                        zipcode: zipcode,
                        city: city,
                        description: description,
                        surface: surface,
                        isFurnished: isFurnished,
                        id_property_type: propertyType[0].id,
                        id_property_category: propertyCategory[0].id,
                        id_kitchen: propertyKitchen[0].id,
                        id_heater: propertyHeater[0].id,
                        id: undefined
                    }
                    setInputError(propertyInterface)
                }
            })
    }

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <ScrollView>

                <View style={{ padding: 20, backgroundColor: "white" }}>

                    {/* 1st step */}
                    {viewType === 1 &&
                        <View>
                            <Text h1>1</Text>
                            <Text style={styles.label}>Type de bien</Text>
                            <View style={styles.row}>

                                {
                                    propertyType != null && propertyType?.map((checkbox, index) => (
                                        <TouchableOpacity key={index}>
                                            <CheckBox
                                                title={checkbox.name}
                                                checkedColor="#c51e1e"
                                                uncheckedIcon="circle-o"
                                                checkedIcon="dot-circle-o"
                                                key={checkbox.id}
                                                onPress={() => setPropertyType([{ ...checkbox, isChecked: !checkbox.isChecked }])}
                                                checked={checkbox.isChecked}
                                            />
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>

                            <Divider style={{ height: 1, margin: 16, backgroundColor: 'grey' }} />

                            <Text style={styles.label}>Catégorie du bien</Text>
                            <View style={styles.row}>
                                {
                                    propertyCategory != null && propertyCategory?.map((item, key) => (
                                        <TouchableOpacity key={key}>
                                            <CheckBox
                                                title={item.name}
                                                checked={item.isChecked}
                                                checkedColor="#c51e1e"
                                                uncheckedIcon="circle-o"
                                                checkedIcon="dot-circle-o"
                                                key={item.id}
                                                onPress={() => setPropertyCategory([{ ...item, isChecked: !item.isChecked }])}
                                            />
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>

                            <Divider style={{ height: 1, margin: 16, backgroundColor: 'grey' }} />

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
                                onPress={second}>
                                <Text style={styles.label}>Suivant</Text>
                            </Pressable>

                        </View>
                    }

                    {/* 2nd step */}
                    {viewType === 2 &&
                        <View>
                            <Text h1>2</Text>

                            <Text style={styles.label}>Type de cuisine</Text>
                            <View style={styles.row}>
                                {
                                    propertyKitchen != null && propertyKitchen?.map((item, key) => (
                                        <TouchableOpacity key={key}>
                                            <CheckBox
                                                title={item.name}
                                                checkedColor="#c51e1e"
                                                checked={item.isChecked}
                                                key={item.id}
                                                onPress={() => setPropertyKitchen([{ ...item, isChecked: !item.isChecked }])}
                                            />
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>

                            <Divider style={{ height: 1, margin: 16, backgroundColor: 'grey' }} />

                            <Text style={styles.label}>Types de pièces</Text>
                            <View style={styles.row}>
                                {
                                    propertyRoomType?.map((item, key) => (
                                        <CheckBox
                                            title={item.name}
                                            checkedColor="#c51e1e"
                                            checked={item.isChecked}
                                            iconType="material"
                                            checkedIcon="clear"
                                            uncheckedIcon="add"
                                            key={key}
                                            onPress={() => setPropertyRoomType([{ ...item, isChecked: !item.isChecked }])}
                                        />
                                    ))
                                }
                            </View>

                            <Divider style={{ height: 1, margin: 16, backgroundColor: 'grey' }} />

                            <Text style={styles.label}>Type de chauffage</Text>
                            <View style={styles.row}>
                                {
                                    propertyHeater?.map((item, key) => (
                                        <CheckBox
                                            title={item.name}
                                            checkedColor="#c51e1e"
                                            checked={item.isChecked}
                                            key={key}
                                            onPress={() => setPropertyHeater([{ ...item, isChecked: !item.isChecked }])}
                                        />
                                    ))
                                }
                            </View>

                            <Divider style={{ height: 1, margin: 16, backgroundColor: 'grey' }} />

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                                <CheckBox
                                    title="Bien meublé"
                                    checked={isFurnished}
                                    checkedIcon="dot-circle-o"
                                    uncheckedIcon="circle-o"
                                    onPress={() => setIsFurnished(!isFurnished)}
                                    checkedColor="#c51e1e" />
                            </View>

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
                            <Text h1>3</Text>

                            <Text style={styles.label}>Features & Salle d'eau</Text>
                            <View style={styles.row}>
                                {
                                    propertyFeature?.map((item, key) => (
                                        <CheckBox
                                            title={item.name}
                                            checkedColor="#c51e1e"
                                            checked={item.isChecked}
                                            checkedIcon="clear"
                                            uncheckedIcon="add"
                                            iconType="material"
                                            key={key}
                                            onPress={() => setPropertyFeature([{ ...item, isChecked: !item.isChecked }])}
                                        />
                                    ))
                                }
                            </View>

                            <Pressable
                                style={styles.buttonAction}
                                onPress={fourth}>
                                <Text style={styles.label}>Suivant</Text>
                            </Pressable>
                            <Pressable
                                style={styles.buttonAction}
                                onPress={second}>
                                <Text style={styles.label}>Précédent</Text>
                            </Pressable>
                        </View>
                    }

                    {/* 4th step */}
                    {viewType === 4 &&
                        <View>
                            <Text h1>4</Text>

                            <Text style={styles.label}>Surface</Text>
                            <TextInput
                                onChangeText={(surface) => setSurface(surface)}
                                keyboardType="numeric"
                                style={styles.input}>
                                m²
                            </TextInput>
                            <Text style={styles.inputError}>{inputError?.surface}</Text>

                            <Text style={styles.label}>Prix</Text>
                            <TextInput
                                onChangeText={(price) => setPrice(price)}
                                keyboardType="numeric"
                                style={styles.input}>
                                €
                            </TextInput>
                            <Text style={styles.inputError}>{inputError?.price}</Text>

                            <Text style={styles.label}>Description</Text>
                            <TextInput
                                onChangeText={(description) => setDescription(description)}
                                style={styles.input} />
                            <Text style={styles.inputError}>{inputError?.description}</Text>

                            <Text style={styles.formError}>{formError}</Text>

                            <Pressable
                                style={{ backgroundColor: "#c51e1e", marginBottom: 20, padding: 10, borderRadius: 20 }}
                                onPress={handleSubmit}>
                                <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>Enregister le bien</Text>
                            </Pressable>

                            <Pressable
                                style={styles.buttonAction}
                                onPress={third}>
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