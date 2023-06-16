export class Proveedor {
    constructor(nombre, articulo, precio) {
      this.nombre = nombre;
      this.articulo = articulo;
      this.precio = precio;
    }
  
    get nombre() {
      return this._nombre;
    }//pero hice una actualizacion, subo lo que tengo ahora ya pos

    

    //5. Generar el método getInfoProveedor() y heredarlo a las clases inferiores por medio del método extends 

    getInfoProveedor() {
      return `Proveedor: ${this.nombre}, Teléfono: ${this.articulo.telefono}`;
    }
  }