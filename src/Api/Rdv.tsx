import customAxios from "./BaseUrl";

export const getEmployeeRdv = async (token: string) => {
    return customAxios.get('rdv', {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
        .then((response) => {
            return response.data.rdv
        })
        .catch((error) => {
            return error.response
        })
}
