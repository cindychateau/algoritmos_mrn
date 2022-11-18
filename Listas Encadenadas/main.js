const Nodo = require('./Nodo');
const ListaEncadenada = require('./ListaEncadenada');

var listaPersonas = new ListaEncadenada(); //Lista está vacía

const persona1 = new Nodo("Elena", 2);
const persona2 = new Nodo("Pedro", 5);
const persona3 = new Nodo("Juana", 1);
const persona4 = new Nodo("Pablo", 3);

listaPersonas.insertaNodo(persona1);
listaPersonas.insertaNodo(persona2);
listaPersonas.insertaNodo(persona3);
listaPersonas.insertaNodo(persona4);

listaPersonas.imprimeLista();

console.log("---------");

const persona5 = new Nodo("Juan", 10);

listaPersonas.insertaNodoenPosicion(persona5, 2);
listaPersonas.imprimeLista();