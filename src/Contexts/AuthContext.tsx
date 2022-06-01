import React, { createContext, useState } from "react"
import { MMKVLoader } from "react-native-mmkv-storage";
import Children from "../Interfaces/Children";
import LoggedEmployee from "../Interfaces/LoggedEmployee";

const AuthContext = createContext<LoggedEmployee>({
    id_agency: undefined,
    lastname: undefined,
    firstname: undefined,
    mail: undefined,
    phone: undefined,
    matricule: undefined,
    isLoggedIn: false,
    login: () => { },
    logout: () => { },

})

export const AuthProvider = ({ children }: Children) => {
    const MMKV = new MMKVLoader().initialize()
    const [id_agency, setIdAgency] = useState<undefined>(undefined)
    const [lastname, setLastname] = useState<undefined>(undefined)
    const [firstname, setFirstname] = useState<undefined>(undefined)
    const [mail, setMail] = useState<undefined>(undefined)
    const [phone, setPhone] = useState<undefined>(undefined)
    const [matricule, setMatricule] = useState<undefined>(undefined)
    const [isLoggedIn, setLoggedIn] = useState(() => {
        const token = MMKV.getStringAsync("access_token")

        console.log("token: " + token)
        return token != null
    })

    const login = () => {
        setLoggedIn(true);
    }

    const logout = () => {
        setIdAgency(undefined)
        setLastname(undefined)
        setFirstname(undefined)
        setMail(undefined)
        setPhone(undefined)
        setMatricule(undefined)
        setLoggedIn(false)
    }

    return (
        <AuthContext.Provider value={{ id_agency, lastname, firstname, mail, phone, matricule, isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;