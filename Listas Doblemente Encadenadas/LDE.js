const Nodo = require('./Nodo');

module.exports = class LDE {
    constructor() {
        this.head = null;
    }
    /*
    LDE-> head = null
    nuevoNodo = Elena nxt: null bck: null
    LDE-> head = Elena

    nuevoNodo = Pablo nxt: null bck: null
    nodoActual = Elena
    Elena.next = Pablo
    Pablo.back = Elena
    LDE-> head = Elena, Pablo

    nuevoNodo = Juana nxt: null bck: null
    nodoActual = Elena
    nodoActual = Pablo
    Pablo.next = Juana
    Juana.back = Pablo
    LDE-> head = Elena, Pablo, Juana
    */
    insertar(nuevoNodo) {
        if(!this.head) { //Head es null?
            this.head = nuevoNodo;
        } else {
            var nodoActual = this.head;
            while(nodoActual.next) { //Mi next NO sea null
                nodoActual = nodoActual.next; //Nos vamos al siguiente nodo
            }
            nodoActual.next = nuevoNodo; 
            nuevoNodo.back = nodoActual;
        }
    }

    imprimir(){
        var nodoActual = this.head;
        while(nodoActual) {
            console.log(nodoActual.nombre);
            nodoActual = nodoActual.next;
        }
    }
    /*
    LDE-> head = 1Elena, 2Pablo, 3Juana

    valor = 2
    nodoActual = Elena
    nodoActual = Pablo
    nodoAnterior = Elena
    nodoSiguiente = Juana
    Elena.next = Juana
    Juana.back = Elena

    Pablo.next = null
    Pablo.back = null
    */
    elimina(valor) {
        var nodoActual = this.head;
        while(nodoActual) {
            if(nodoActual.id === valor) {
                let nodoAnterior = nodoActual.back;
                let nodoSiguiente = nodoActual.next;
                nodoAnterior.next = nodoSiguiente;
                nodoSiguiente.back = nodoAnterior;

                nodoActual.next = null;
                nodoActual.back = null;
            } 

            nodoActual = nodoActual.next;
        }
    }
}