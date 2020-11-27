import fideosCodo from "@assets/productos/lenysol-fideos-codito.jpg";
import fideosRigaton from "@assets/productos/lenysol-fideos-rigaton.jpg";
import fideosSpaguetti from "@assets/productos/lenysol-fideos-spagheti.jpg";
import {
  default as fideosCanuto,
  default as fideosTornillo,
} from "@assets/productos/lenysol-fideos-tornillo.jpg";

export const fideosData = [
  {
    id: 1,
    companyId: 1,
    brand: "FIDEOS CORTO",
    name: "LENYSOL SOPA CARACOL ",
    image: fideosCanuto,
    price: 100,
    discount: 10,
  },
  {
    id: 2,
    companyId: 1,
    brand: "FIDEOS CORTO",
    name: "LENYSOL SOPA CODO",
    image: fideosCodo,
    price: 100,
    discount: 10,
  },
  {
    id: 3,
    companyId: 1,
    brand: "FIDEOS CORTO",
    name: "LENYSOL SOPA RIGATON",
    image: fideosRigaton,
    price: 100,
    discount: 10,
  },
  {
    id: 4,
    companyId: 1,
    brand: "FIDEOS CORTO",
    name: "LENYSOL SOPA TORNILLO",
    image: fideosTornillo,
    price: 100,
    discount: 10,
  },
  {
    id: 5,
    companyId: 1,
    brand: "FIDEOS LARGO",
    name: "LENYSOL SPAGUETTI",
    image: fideosSpaguetti,
    price: 100,
    discount: 10,
  },
];
