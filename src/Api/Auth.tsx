import customAxios from "./BaseUrl"
import { MMKVLoader } from "react-native-mmkv-storage"

// const MMKV = new MMKVLoader()
//     // .withEncryption()
//     // .encryptWithCustomKey("kjdhsvcjhqdsjvhdjsgxfcgh", true, "myToken")
//     .initialize()

const MMKV = new MMKVLoader().withEncryption()
    .encryptWithCustomKey("kjdhsvcjhqdsjvhdjsgxfcgh", true, "myToken")
    .initialize()

export const login = async (matricule: number, password: string) => {
    // const [token, setToken] = useMMKVStorage<string | null>("token", MMKV, null)
    return customAxios.get('authentification/employee', {
        params: {
            matricule,
            password
        }

    }).then((response) => {
        if (response.data) {
            MMKV.setStringAsync("access_token", response.data.access_token)
            //     setToken(response.data.access_token)
        }
        return response
    }).catch(error => {
        return error.response
    })
}

export const logoutProfile = () => {
    // const [token, setToken] = useMMKVStorage("access_token", MMKV, null)
    // setToken(null)
    MMKV.removeItem("access_token")
    // MMKV.clearStore()
}

export const getProfile = async (token: string) => {
    return customAxios.get("employee/dashboard", {
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
