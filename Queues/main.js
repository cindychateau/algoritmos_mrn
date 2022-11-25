const Nodo = require('./Nodo');
const Queue = require('./Queue');

var listaQueue = new Queue();

const persona1 = new Nodo("Elena");
const persona2 = new Nodo("Juana");
const persona3 = new Nodo("Pedro");
const persona4 = new Nodo("Pablo");

listaQueue.enqueue2(persona1);
listaQueue.enqueue2(persona2);
listaQueue.enqueue2(persona3);
listaQueue.enqueue2(persona4);

listaQueue.imprimeLista();

console.log("------");

listaQueue.dequeue();
listaQueue.imprimeLista();

console.log("------");

listaQueue.dequeue();
listaQueue.imprimeLista();

console.log("------");

listaQueue.dequeue();
listaQueue.imprimeLista();

console.log("------");

listaQueue.dequeue();
listaQueue.imprimeLista();