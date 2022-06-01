import customAxios from "./BaseUrl"
import { MMKVLoader } from "react-native-mmkv-storage"

const MMKV = new MMKVLoader().withEncryption()
.encryptWithCustomKey("kjdhsvcjhqdsjvhdjsgxfcgh", true, "myToken")
.initialize()

export const login = async (matricule: number, password: string) => {
    return customAxios.get('authentification/employee', {
        params: {
            matricule,
            password
        }

    }).then((response) => {
        if (response.data) {
            MMKV.setStringAsync("access_token",response.data.access_token)
        }
        return response
    }).catch(error => {
        return error.response
    })
}

export const getProfile = async (token: string) => {
    return customAxios.get("espaceemploye/dashboard", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
            return response.data.employee
        })
        .catch((error) => {
            console.error("Error", error)
        })
}
