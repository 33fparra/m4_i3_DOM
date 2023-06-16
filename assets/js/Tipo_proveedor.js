import { Proveedor } from './Proveedor.js';
// aca uso el extends
export class TipoProveedor extends Proveedor {
  constructor(nombre, articulo, precio, internacional, pais) {
    super(nombre, articulo, precio);
    this.internacional = internacional;
    this.pais = pais;
  }

  //aca deberia traer el getInfoProveedor
  getInfoProveedor(){
  let tipoProveedor - "Nacional"; 
  if (this.internacional){
    tipoProveedor = 'Internacional';
  }  
  return this.nombre + ' - Telefono: ' + this.articulo.telefono + ' - Pais: ' + this.pais + ' - Tipo: ' + tipoProveedor;
}
}