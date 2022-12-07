from Hash import Hash

tablaNumeros = Hash()

#data[0] = 72
#data[1] = 8
#data[2] = 13
#data[3] = None
#data[4] = 10

tablaNumeros.agrega(13)
tablaNumeros.agrega(72)
tablaNumeros.agrega(8)
tablaNumeros.agrega(91) #No se guarda -> Tarea buscar agregar con colisión
tablaNumeros.agrega(10)

print('--------')
tablaNumeros.buscaElemento(13)
tablaNumeros.buscaElemento(10)
tablaNumeros.buscaElemento(2)