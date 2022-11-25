const Nodo = require('./Nodo');

module.exports = class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(nuevoNodo){
        if(!this.head) { //mi lista está vacía
            this.head = nuevoNodo;
        } else {
            var nodoActual = this.head;
            while(nodoActual.next) { //Vamos a entrar al bucle siempre y cuando next NO sea null
                nodoActual = nodoActual.next;
            }
            //Salimos del bucle cuando next es null, nodoActual es el último nodo de la lista
            nodoActual.next = nuevoNodo;
        }

        this.tail = nuevoNodo;
    }
    /*
    Queue: head = ≠, tail = ≠
    nuevoNodo = Elena next:≠
    head = Elena
    tail = Elena

    nuevoNodo = Juana next:≠
    ultimoNodo = Elena
    Elena.next = Juana
    tail = Juana
    Queue: Elena, Juana

    nuevoNodo = Pedro next:≠
    ultimoNodo = Juana
    Juana.next = Pedro
    tail = Pedro
    Queue: Elena, Juana, Pedro

    nuevoNodo = Pablo next:≠
    ultimoNodo = Pedro
    Pedro.next = Pablo
    tail = Pablo
    Queue: Elena, Juana, Pedro, Pablo
    */
    enqueue2(nuevoNodo) {
        if(!this.head) {
            this.head = nuevoNodo;
        } else {
            var ultimoNodo = this.tail;
            ultimoNodo.next = nuevoNodo;
        }

        this.tail = nuevoNodo;
    }

    imprimeLista() {
        var nodoActual = this.head;
        while(nodoActual) {
            console.log(nodoActual.valor);
            nodoActual = nodoActual.next;
        }
    }

    /*
    Queue: Elena, Juana, Pedro, Pablo
    head: Elena. tail = Pablo
    nodoActual = Elena
    head: Juana
    Elena.next = null
    RETURN Elena
    Queue: Juana, Pedro, Pablo

    nodoActual = Juana
    head: Pedro
    Juana.next = null
    RETURN Juana
    Queue: Pedro, Pablo

    nodoActual = Pedro
    head: Pablo
    Pedro.next = null
    RETURN Pedro
    Queue: Pablo

    tail: null
    nodoActual = Pablo
    head: null
    Pablo.next = null
    RETURN Pablo
    */
    dequeue() {
        if(this.head === this.tail) {
            this.tail = null;
        }

        var nodoActual = this.head;
        this.head = nodoActual.next;
        nodoActual.next = null;
        return nodoActual.valor;
    }


}