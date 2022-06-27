import PropertyType from "../Interfaces/PropertyType";
import customAxios from "./BaseUrl";

export const createProperty = async (
    token: string,
    name: string,
    price: string,
    address: string,
    addition_address: string,
    zipcode: string,
    city: string,
    description: string,
    surface: string,
    floor: string,
    isFurnished: boolean,
    isAvailable: boolean,
    name_property_type: PropertyType,
) => {
    return customAxios.post("property", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        name,
        price,
        address,
        addition_address,
        zipcode,
        city,
        description,
        surface,
        floor,
        isFurnished,
        isAvailable,
        name_property_type,     
    })
        .then((response) => {
            console.log("RESP " + response)

            return response
        })
        .catch((error) => {
            console.log("resp error: " + error)

            return error.response
        })
}

export const getEmployeeProperties = async () => {
    return customAxios.get('property', {
    })
        .then((response) => {
            return response.data.property;
        })
        .catch(error => {
            return error.response.data
        })
}

export const getSingleProperty = async (id: number) => {
    return customAxios.get('property/' + id)
        .then((response) => {
            return response.data.property;

        })
        .catch(error => {
            return error.response.data

        })
}