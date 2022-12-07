from Nodo import Nodo
from LDE import LDE

listaPersonas = LDE() #Comienza la lista vacía

persona1 = Nodo("Juana", 1) #Aun no está en una lista, entonces next = None
persona2 = Nodo("Pablo", 2)
persona3 = Nodo("Pedro", 3)

listaPersonas.insertaNodo(persona1) #Juana es el head
listaPersonas.insertaNodo(persona2) #HEAD: Juana; Juana.next = Pablo
listaPersonas.insertaNodo(persona3) #HEAD: Juana; Juana.next = Pablo; Pablo.next = Pedro

listaPersonas.imprimeLista()

listaPersonas.eliminaNodo(2)

listaPersonas.imprimeLista()