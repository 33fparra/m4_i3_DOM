export class Proveedor {
    constructor(nombre, articulo, precio) {
      this.nombre = nombre;
      this.articulo = articulo;
      this.precio = precio;
    }
  
    get nombre() {
      return this._nombre;
    }

    set nombre(nombre) {
      this._nombre = nombre;
    }

    get articulo() {
      return this._articulo;
    }

    set articulo(articulo) {
      this._articulo = articulo;
    }

    get precio() {
      return this._precio;
    }

    set precio(precio) {
      this._precio = precio;
    }


    //5. Generar el método getInfoProveedor() y heredarlo a las clases inferiores por medio del método extends 

    getInfoProveedor() {
      return `Proveedor: ${this.nombre}, Teléfono: ${this.articulo.telefono}`;
    }
    
  }