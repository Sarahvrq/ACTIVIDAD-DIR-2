import {Flight, Flight_M} from "./types.ts";


export const ModeltoFlight = (FlightM: Flight_M): Flight => {
    return {
        id: FlightM._id!.toString(), //pilas w this sintaxis
        origen: FlightM.origen,
        destino: FlightM.destino,
        TimePlace: FlightM.TimePlace,

    };

};


/*watch out for the sintaxis errors:
    -export CONSTANT name = (variables/objects we're using):  Object we're processing => { 
        return {
            inside variables of objects w proper conversions
        }
    }

    PLS DEMASIADO PILAS WHERE WE PUT THE =, : and the =>. IMPORTANT FUNCTION SINTAXIS, SHOULD BE ENGRAINED IN YOUR HEAD
    */