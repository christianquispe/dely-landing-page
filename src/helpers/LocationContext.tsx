import React from "react";

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
    image:
      "https://2.bp.blogspot.com/-q9zrc5Wflrk/VxzAsGoJxsI/AAAAAAAADCQ/okY2js-kqZQ72TaVa2BP7gaDugTPbJNuACKgB/s1600/Get-Current-Location-Google-Maps-Android-API-Tutorial.png",
  },
  {
    name: "Dely Sucursal",
    address: "Pasaje A- Puesto 41",
    key: "branch-office",
    businessHours: "8:30am a 8:00pm",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTX6JXUGtXu0hq4Bhmvvzotp0ZiRVJ1G8u8rA&usqp=CAU",
  },
  {
    name: "Dely Sucursal",
    address: "Pasaje San Francisco- Puesto 43",
    key: "branch-office",
    businessHours: "8:30am a 8:00pm",
    image:
      "https://image.freepik.com/vector-gratis/plano-ubicacion-icono-vector-diseno-plano_39704-211.jpg",
  },
];

const LocationsContext = React.createContext<ILocationContextDefault[]>([]);
LocationsContext.displayName = "Locations";
export default LocationsContext;
