import { Collection, ObjectId } from "mongodb";
import { Flight, Flight_M } from "./types.ts";
import { ModeltoFlight } from "./util.ts";

export const resolvers = {

/*getFlights, tiene los argumentos opcionales origen y destino. Si ambos argumentos están presentes 
devuelve todos los vuelos con dicho origen y destino, si solo un argumento está presente, 
por ejemplo el origen, devuelve todos los vuelos con ese origen, si ningún argumento está 
presente devuelve todos los vuelos (incluyendo sus ids)*/

    Query: {
       getFlights: async (
            _:unknown,
            {origen, destino}: { origen: string, destino: string },
            context: { FlightsCollection: Collection<Flight_M> },
        ): Promise<Flight[]> => {

            if(origen && destino){

          (const flightsModel = await context.FlightsCollection.find().toArray();
          return flightsModel.map((flightsModel) =>
            ModeltoFlight(flightsModel))
        } e
          );
    },

}














