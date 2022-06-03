import React, { createContext, useContext, useState } from "react"
import { MMKVLoader } from "react-native-mmkv-storage";
import { logoutProfile } from "../Api/Auth";
import Children from "../Interfaces/Children";
import LoggedEmployee from "../Interfaces/LoggedEmployee";

const AuthContext = createContext<LoggedEmployee>({} as LoggedEmployee)

export const AuthProvider = ({ children }: Children) => {
    const MMKV = new MMKVLoader().initialize()
    const [id_agency, setIdAgency] = useState<undefined>(undefined)
    const [lastname, setLastname] = useState<string |undefined>(undefined)
    const [firstname, setFirstname] = useState<undefined>(undefined)
    const [mail, setMail] = useState<undefined>(undefined)
    const [phone, setPhone] = useState<undefined>(undefined)
    const [matricule, setMatricule] = useState<undefined>(undefined)
    const [isLoggedIn, setLoggedIn] = useState(() => {
        const token = MMKV.getStringAsync("access_token")
        return token != null
    })

    const login = () => {
        setIdAgency(id_agency)
        setLastname(lastname)
        setFirstname(firstname)
        setMail(mail)
        setPhone(phone)
        setMatricule(matricule)
        setLoggedIn(true);
    }

    const logouttoto = () => {
        logoutProfile()
        setIdAgency(undefined)
        setLastname("tototototototo")
        setFirstname(undefined)
        setMail(undefined)
        setPhone(undefined)
        setMatricule(undefined)
        setLoggedIn(false)
    }
    const toto = {
        id_agency : id_agency,
        lastname :lastname,
        firstname :firstname,
        mail : mail,
        phone : phone,
        matricule :matricule,
        isLoggedIn : isLoggedIn,
        login : login,
        logout : logouttoto
    }
    return (
        <AuthContext.Provider value={toto}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    return useContext(AuthContext)
}
export default AuthContext;