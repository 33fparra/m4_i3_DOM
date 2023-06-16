export class Articulo {
    constructor(nombre, email, telefono) {
      this.nombre = nombre;
      this.email = email;
      this.telefono = telefono;
    }
    getNombre() {
      return this.nombre;
    }
  
    setNombre(nombre) {
      this.nombre = nombre;
    }
  
    getEmail() {
      return this.email;
    }
  
    setEmail(email) {
      this.email = email;
    }
  
    getTelefono() {
      return this.telefono;
    }
  
    setTelefono(telefono) {
      this.telefono = telefono;
    }
  }
