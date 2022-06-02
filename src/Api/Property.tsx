import customAxios from "./BaseUrl";


export const getEmployeeProperties= async () => {
    return customAxios.get('property', {
    })
        .then((response) => {
            return response.data.property;
        })
        .catch(error => {
            return error.response.data
        })
}

export const getSingleProperty= async (id:number) => {
    return customAxios.get('property/'+id)
        .then((response) => {
            return response.data.property;
            
        })
        .catch(error => {
            return error.response.data

        })
}