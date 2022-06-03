import customAxios from "./BaseUrl";

export const createProperty = async (
    name: string,
    price: number,
    address: string,
    addition_address: string,
    zipcode: string,
    city: string,
    description: string,
    surface: number,
    floor: number,
    is_furnished: boolean,
    is_available: boolean,
    name_property_type: string
) => {
    return customAxios.post("property/create", {
        name,
        price,
        address,
        addition_address,
        zipcode,
        city,
        description,
        surface,
        floor,
        is_furnished,
        is_available,
        name_property_type
    })
        .then((response) => {
            return response
        })
        .catch((error) => {
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