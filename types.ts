import { OptionalId } from "mongodb";

//normal
export type Flight = {
    id: string; 
    origen: string;
    destino: string;
    TimePlace: string;
}

//models
export type Flight_M = OptionalId <{
    origen: string;
    destino: string;
    TimePlace: string;
}>;