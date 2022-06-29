interface Property {
    name: string | undefined
    price: string 
    address: string | undefined
    addition_address: string | undefined
    zipcode: string | undefined
    city: string | undefined
    description: string | undefined
    surface: string | undefined
    floor: string | undefined
    isFurnished: boolean | undefined
    isAvailable: boolean | undefined
    
   
    id:number | undefined;
    property:{
        name:string | undefined
    };

    
}

export default Property