interface Property {
    property:{
        name:string | undefined
        price: string 
        address: string | undefined
        addition_address: string | undefined
        zipcode: string | undefined
        city: string | undefined
        description: string | undefined
        surface: string | undefined
        isFurnished: boolean | undefined
    };
    id: number | undefined
}

export default Property