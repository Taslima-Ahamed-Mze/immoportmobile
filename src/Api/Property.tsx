import customAxios from "./BaseUrl";

export const createProperty = async (
   
    name: string,
    price: number,
    address: string,
    addition_address: string,
    zipcode: string,
    city: string,
    description: string,
    surface: string,
    is_furnished: boolean,
    id_property_type: string,
    id_property_category: string,
    id_kitchen: string,
    id_heater: string, 
    token: string,

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
        is_furnished,
        id_property_type,
        id_property_category,
        id_kitchen,
        id_heater
    }
    return customAxios.post("property/new", { property: data }, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
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
    return customAxios.get('property/types', {
    })
        .then((response) => {
            return response.data.property_type
        })
        .catch((error) => {
            return error.response
        })
}

export const getPropertyCategories = async () => {
    return customAxios.get('property/categories', {
    })
        .then((response) => {
            return response.data.property_category
        })
        .catch((error) => {
            return error.response
        })
}

export const getPropertyHeaters = async () => {
    return customAxios.get('property/heaters', {
    })
        .then((response) => {
            return response.data.heater
        })
        .catch((error) => {
            return error.response
        })
}

export const getPropertyKitchens = async () => {
    return customAxios.get('property/kitchens', {
    })
        .then((response) => {
            return response.data.kitchen
        })
        .catch((error) => {
            return error.response
        })
}

export const getPropertyRoomTypes = async () => {
    return customAxios.get('property/room-types', {
    })
        .then((response) => {
            return response.data.room_type
        })
        .catch((error) => {
            return error.response
        })
}

export const getPropertyFeatures = async () => {
    return customAxios.get('property/features', {
    })
        .then((response) => {
            return response.data.feature
        })
        .catch((error) => {
            return error.response
        })
}

export const getEmployeeProperties = async (token: string) => {
    return customAxios.get('employee/my-properties', {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
        .then((response) => {
            return response.data;
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