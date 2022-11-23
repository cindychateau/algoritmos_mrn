module.exports = class Nodo{
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
        this.next = null;
        this.back = null;
    }
}