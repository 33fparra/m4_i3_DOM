//invoco las clases

import { Proveedor } from './assets/js/Proveedor.js'; 
import { TipoProveedor } from './assets/js/Tipo_proveedor.js';
import { Articulo } from './assets/js/Articulo.js';

//creo los objetos proveedor, articulo y tipo_proveedor
const articulo1 = new Articulo('Articulo 1', 'proveedor1@ejemplo.com', 123456789);
const proveedor1= new Proveedor('Proveedor 1', articulo1, 100);
const tipoProveedor = new TipoProveedor('Proveedor 2', articulo1, 200, true, 'Pais1');
//se supone que pais es boolean asi que debiera fallar esto

// ejecuto los 
console.log(proveedor1.getInfoProveedor())
console.log(tipoProveedor.getInfoProveedor());