import customAxios from "./BaseUrl";


export const getEmployeeProperties= async (id:number,token:string) => {
    return customAxios.get('property/employee/'+id, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
            console.log(response,'api');
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