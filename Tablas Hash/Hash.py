class Hash:

    def __init__(self):
        self.data = []
        self.capacidad = 5
        for i in range(0, self.capacidad): #data[0] = None, data[1] = None, data[2] = None
            self.data.append(None)
    
    def agrega(self, num):
        #la manera en la que obtenemos el índice puede ser representada por CUALQUIER operación
        indice = int(int((num * 13 + 7) / 3) * 11 / 5) % self.capacidad #Regrese un número entre el 0 y mi capacidad

        #Agregar el número en data en el indice que obtuvimos
        if self.data[indice] == None:
            self.data[indice] = num
            print("El número ", num, " se guarda en el índice ",indice)
        else:
            print("El indice ", indice, " ya se encuentra ocupado. Ajuste la lista")
    
    def buscaElemento(self, num):
        indice = int(int((num * 13 + 7) / 3) * 11 / 5) % self.capacidad
        if self.data[indice] == None:
            print("El número ingresado NO se encuentra encuentra en la tabla")
        else:
            if self.data[indice] == num:
                print("El número ", num, " se encuentra en el índice ", indice)
            else:
                print("El número ingresado NO se encuentra encuentra en la tabla")