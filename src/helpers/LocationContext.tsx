import React from "react";
import locationOne from "@assets/puntos-de-venta/001.jpg";
import locationTwo from "@assets/puntos-de-venta/002.jpg";

export interface ILocationContextDefault {
  name: string;
  address: string;
  key: string;
  businessHours: string;
  image: string;
}

export const LocationContextDefault: ILocationContextDefault[] = [
  {
    name: "Dely Sucursal",
    address: "Av. la Cultura Nro. 701, Santa Anita, Lima, Perú.",
    key: "address",
    businessHours: "8:30am a 8:00pm",
    image: locationOne,
  },
  {
    name: "Dely Sucursal",
    address: "Pasaje A- Puesto 41",
    key: "branch-office",
    businessHours: "8:30am a 8:00pm",
    image: locationOne,
  },
  {
    name: "Dely Sucursal",
    address: "Pasaje San Francisco- Puesto 43",
    key: "branch-office",
    businessHours: "8:30am a 8:00pm",
    image: locationTwo,
  },
];

const LocationsContext = React.createContext<ILocationContextDefault[]>([]);
LocationsContext.displayName = "Locations";
export default LocationsContext;
