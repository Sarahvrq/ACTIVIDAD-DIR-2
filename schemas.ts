export const schema = `#graphql //no cerrar los quotations aqui. Remember this sintaxis
//Recuerda in graphql: ! means mandatory, no ! means optional (not like normal ts where the abscense of ? means Mandatory)

type Flight = {
  id: ID!; //this one we're accessing de una las IDs de mongodb
  origen: string!; //we're making everything mandatory
  destino: string!;
  TimePlace: string!;
}

type Query = { //type query allows us to fetch valores
  getFlights(origen: string, destino: string): Flights [Flight!]! //HERE WE'RE MANAGING THE WHOLE MANDATORY THING. 
  getFlight(id: !ID): Flight
}

type Mutation = { //type mutation allows us to do diff types of fetching from the base values
  addFlight(origen: string!, destino: string!, TimePlace: string!): Flight!
}

`;

//pilas aqui con las quotatios
