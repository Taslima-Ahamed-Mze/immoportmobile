import PropertyType from "../Interfaces/PropertyFeatures";
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
    is_furnished: boolean,
    is_available: boolean,
    id_property_type: number,
    id_property_category: number
) => {
    const data = {
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
        id_property_type,
        id_property_category
    }
    return customAxios.post("property/new", data, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
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

export const getPropertyTypes = async () => {
    return customAxios.get('property/type', {
    })
        .then((response) => {
            return response.data.property_type
        })
        .catch((error) => {
            return error.response
        })
}

export const getPropertyCategories = async () => {
    return customAxios.get('property/category', {
    })
        .then((response) => {
            return response.data.property_category
        })
        .catch((error) => {
            return error.response
        })
}

export const getPropertyHeaters = async () => {
    return customAxios.get('property/heater', {
    })
        .then((response) => {
            return response.data.heater
        })
        .catch((error) => {
            return error.response
        })
}

export const getPropertyHygienes = async () => {
    return customAxios.get('property/hygiene', {
    })
        .then((response) => {
            return response.data.hygiene
        })
        .catch((error) => {
            return error.response
        })
}

export const getPropertyKitchens = async () => {
    return customAxios.get('property/kitchen', {
    })
        .then((response) => {
            return response.data.kitchen
        })
        .catch((error) => {
            return error.response
        })
}

export const getPropertyOutdoors = async () => {
    return customAxios.get('property/outdoor', {
    })
        .then((response) => {
            return response.data.outdoor
        })
        .catch((error) => {
            return error.response
        })
}

export const getPropertyAnnexes = async () => {
    return customAxios.get('property/annexe', {
    })
        .then((response) => {
            return response.data.annexe
        })
        .catch((error) => {
            return error.response
        })
}

export const getPropertyRoomTypes = async () => {
    return customAxios.get('property/room-type', {
    })
        .then((response) => {
            return response.data.room_type
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