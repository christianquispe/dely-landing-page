import React from "react";

export const LocationContextDefault = [
  {
    name: "Ubication 1",
    address: "Av. Avenida 1 Nro. 1234 Mz. A-1 Lote 00",
    image:
      "https://2.bp.blogspot.com/-q9zrc5Wflrk/VxzAsGoJxsI/AAAAAAAADCQ/okY2js-kqZQ72TaVa2BP7gaDugTPbJNuACKgB/s1600/Get-Current-Location-Google-Maps-Android-API-Tutorial.png",
  },
  {
    name: "Ubication 2",
    address: "Av. Avenida 1 Nro. 1234 Mz. A-1 Lote 00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTX6JXUGtXu0hq4Bhmvvzotp0ZiRVJ1G8u8rA&usqp=CAU",
  },
  {
    name: "Ubication 3",
    address: "Av. Avenida 1 Nro. 1234 Mz. A-1 Lote 00",
    image:
      "https://image.freepik.com/vector-gratis/plano-ubicacion-icono-vector-diseno-plano_39704-211.jpg",
  },
  {
    name: "Ubication 4",
    address: "Av. Avenida 1 Nro. 1234 Mz. A-1 Lote 00",
    image:
      "https://es.wikineos.com/images/thumb/7/79/Topographic_map_example.png/300px-Topographic_map_example.png",
  },
];

const LocationsContext = React.createContext([]);
LocationsContext.displayName = "Locations";
export default LocationsContext;
