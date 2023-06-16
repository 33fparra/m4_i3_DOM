import { Proveedor } from './Proveedor.js';
// aca uso el extends
export class TipoProveedor extends Proveedor {
  constructor(nombre, articulo, precio, internacional, pais) {
    super(nombre, articulo, precio);
    this.internacional = internacional;
    this.pais = pais;
  }
  //aca deberia traer el getInfoProveedor

  getInternacional() {
    return this.internacional;
  }

  setInternacional(internacional) {
    this.internacional = internacional;
  }

  getPais() {
    return this.pais;
  }

  setPais(pais) {
    this.pais = pais;
  }
  
  getInfoProveedor(){
  let tipoProveedor = "Nacional"; 
  if (this.internacional){
    tipoProveedor = 'Internacional';
  }  
  return this.nombre + ' - Telefono: ' + this.articulo.telefono + ' - Pais: ' + this.pais + ' - Tipo: ' + tipoProveedor;
}
}