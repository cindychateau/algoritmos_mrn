/*
arreglo = [-2, 45, 0, 11, -9]
RONDAS 0 - 4 (i)
i = 0
j = 0 - 3
j = 0
arreglo[0] > arreglo[1] -> -2 > 45
j = 1
arreglo[1] > arreglo[2] -> 45 > 0
temp = 45
arreglo[1] = 0
arreglo[2] = 45
arreglo = [-2, 0, 45, 11, -9]
j = 2
arreglo[2] > arreglo[3] -> 45 > 11
temp = 45
arreglo[2] = 11
arreglo[3] = 45
arreglo = [-2, 0, 11, 45, -9]
j = 3
arreglo[3] > arreglo[4] -> 45 > -9
temp = 45
arreglo[3] = -9
arreglo[4] = 45
arreglo = [-2, 0, 11, -9, 45]

RONDA 1
i = 1
j = 0 - 2
j = 0
arreglo[0] > arreglo[1] -> -2 > 0
j = 1
arreglo[1] > arreglo[2] -> 0 > 11
j = 2
arreglo[2] > arreglo[3] -> 11 > -9
temp = 11
arreglo[2] = -9
arreglo[3] = 11
arreglo = [-2, 0, -9, 11, 45]

RONDA 2
i = 2
j = 0 - 1
j = 0
arreglo[0] > arreglo[1] -> -2 > 0
j = 1
arreglo[1] > arreglo[2] -> 0 > -9
temp = 0
arreglo[1] = -9
arreglo[2] = 0
arreglo = [-2, -9, 0, 11, 45]

RONDA 3
i = 3
j = 0 
arreglo[0] > arreglo[1] -> -2 > -9
temp = -2
arreglo[0] = -9
arreglo[1] = -2
arreglo = [-9, -2, 0, 11, 45]

RONDA 4
i = 4
j = 0
*/
function bubbleSort(arreglo){

    //Rondas !
    for(var i = 0; i < arreglo.length; i++){
    
    // Recorremos hasta UNO menos de la ronda, porque el último elemento ya está acomodado
        for(var j = 0; j < ( arreglo.length - i -1 ); j++){
        
            // Revisamos si es mayor al siguiente valor
            if(arreglo[j] > arreglo[j+1]){
                //Los intercambiamos de lugar
                var temp = arreglo[j]
                arreglo[j] = arreglo[j + 1]
                arreglo[j+1] = temp
            }
        }
    }

    console.log(arreglo);
}

bubbleSort([-2, 45, 0, 11, -9]);