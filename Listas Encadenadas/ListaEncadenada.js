const Nodo = require('./Nodo')

module.exports = class ListaEncadenada {
    constructor() {
        this.head = null;
    }
    /*
    listaPersonas = head: null
    nuevoNodo = Elena next: null
    listaPersonas.head = Elena next: null

    nuevoNodo = Pedro next: null
    nodoActual = Elena
    Elena.next = Pedro
    listaPersonas: head=Elena next:Pedro, Pedro next: null

    nuevoNodo = Juana next: null
    nodoActual = Elena
    nodoActual = Pedro
    Pedro.next = Juana
    listaPersonas: head=Elena next:Pedro, Pedro next: Juana, Juana next:null

    nuevoNodo = Pablo next: null
    nodoActual = Elena
    nodoActual = Pedro
    nodoActual = Juana
    Juana.next = Pablo
    listaPersonas: head=Elena next:Pedro, Pedro next: Juana, Juana next: Pablo, Pablo next: null
    */
    insertaNodo(nuevoNodo) {
        if(!this.head) { //Head es null?
            this.head = nuevoNodo;
        } else {
            var nodoActual = this.head;
            while(nodoActual.next) { //Siempre y cuando tenga algo en next
                nodoActual = nodoActual.next;
            }
            nodoActual.next = nuevoNodo;
        }
    }

    /*
    listaPersonas: head=Elena next:Pedro, Pedro next: Juana, Juana next: Pablo, Pablo next: null

    nodoActual = Elena
    IMPRIMIMOS Elena

    nodoActual = Pedro
    IMPRIMIMOS Pedro

    nodoActual = Juana
    IMPRIMIMOS Juana

    nodoActual = Pablo
    IMPRIMIMOS Pablo

    nodoActual = null
    */
    imprimeLista() {
        var nodoActual = this.head;
        while(nodoActual) { //Haya algo en nodoActual
            console.log(nodoActual.nombre);
            nodoActual = nodoActual.next;
        }
    }
    /*
    listaPersonas: 
    head=Elena next:Pedro, 0
    Pedro next: Juan,   1
    Juan next: Juana,   2
    Juana next: Pablo,  3
    Pablo next: null    4

    nuevoNodo = Juan
    posicion = 2
    nodoActual = Elena
    nodoPrevio = null
    posicionActual = 0

    nodoPrevio = Elena
    nodoActual = Pedro
    posicionActual = 1

    nodoPrevio = Pedro
    nodoActual = Juana
    posicionActual = 2

    Pedro.next = Juan
    Juan.next = Juana
    */
    insertaNodoenPosicion(nuevoNodo, posicion) {
        if(posicion === 0) {
            nuevoNodo.next = this.head;
            this.head = nuevoNodo;
        } else {
            var nodoActual = this.head;
            var nodoPrevio = this.head; //mi head va a ser el primer nodo previo
            var posicionActual = 0;
            while(posicionActual < posicion) {
                nodoPrevio = nodoActual;
                nodoActual = nodoActual.next;
                posicionActual++;
            }

            nodoPrevio.next = nuevoNodo;
            nuevoNodo.next = nodoActual;

        }
    }
}

//insertaNodo


//imprimeLista