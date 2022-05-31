import { AsyncStorage } from "react-native";
import customAxios from "./BaseUrl";

export const login = async (idNumber: string, password: string) => {
    return customAxios.get('authentification', {
        params: {
            idNumber,
            password
        }

    }).then((response) => {
        if (response.data) {
            console.log(response)
            AsyncStorage.setItem("access_token", response.data.access_token);
        }
        return response;
    }).catch(error => {
        return error.response;
    });

};
