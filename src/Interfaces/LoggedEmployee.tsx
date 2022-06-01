interface LoggedEmployee {
    id_agency: number | undefined,
    lastname: string | undefined,
    firstname: string | undefined,
    mail: string | undefined,
    phone: number | undefined,
    matricule: number | undefined,
    isLoggedIn: boolean | null,
    login: () => void;
    logout: () => void;
}

export default LoggedEmployee