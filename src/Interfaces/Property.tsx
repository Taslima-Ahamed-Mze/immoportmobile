interface Property {
    id: number
    name: string | undefined
    price: string
    address: string | undefined
    addition_address: string | undefined
    zipcode: string | undefined
    city: string | undefined
    description: string | undefined
    surface: string | undefined
    isFurnished: boolean | undefined
    id_property_type: string | undefined
    id_property_category: string | undefined
    id_kitchen: string | undefined
    id_heater: string | undefined
}

export default Property