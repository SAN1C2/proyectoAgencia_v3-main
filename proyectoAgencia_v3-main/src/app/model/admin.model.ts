//Paquetes
export interface Packet {
    idPacket: number;
    imge:string;
    nombreDestino: string;
    descripcion:string;
    tiempo: string;
    precioDestino: number;
}

export interface Paquete {
    id: string;
    imge:string ;
    tour:string ;
    descripcion:string ;
    precio:number ;
}

//Login
export interface Login {
    id: string;
    user: string;
    password: string;
}