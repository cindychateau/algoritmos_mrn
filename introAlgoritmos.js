/**
 * SUMA LOS NUMEROS IMPARES DE FIBONACCI
 * Crea una función que reciba un número máximo y sumamos todos los números 
 * impares de fibonacci siempre qu sean menores al número recibido
 * 
 * 0 1 1 2 3 5 8 13 21 34 55
 * numero = 5
 * numero_anterior = 0
 * numero_actual = 1
 * suma = 0
 * 
 * suma = 1
 * temporal = 1
 * numero_actual = 1 + 0 = 1
 * numero_anterior = 1
 * 
 * suma = 2
 * temporal = 1
 * numero_actual = 1 + 1 = 2
 * numero_anterior = 1
 * 
 * temporal = 2
 * numero_actual = 2 + 1 = 3
 * numero_anterior = 2
 * 
 * suma = 2 + 3 = 5
 * temporal = 3
 * numero_actual = 3 + 2 = 5
 * numero_anterior = 3
 * 
 * suma = 5 + 5 = 10
 * temporal = 5
 * numero_actual = 5 + 3 = 8
 * numero_anterior = 5
 */
function sumaImparesFibo(numero){
    //Crear variables que me guarden los últimos dos números de Fibonacci
    let numero_anterior = 0;
    let numero_actual = 1;
    //Creo una variable para sumatoria
    let suma = 0;

    while(numero_actual <= numero){
        //Si el número fibonacci es impar, entonces lo agregamos a la suma
        if(numero_actual % 2 !== 0){
            suma += numero_actual;
        }

        //Actualizar los números de fibonacci
        temporal = numero_actual;
        numero_actual += numero_anterior;
        numero_anterior = temporal;
    }

    return suma;

}

console.log(sumaImparesFibo(32));


/**
 * MAXIMO COMUN DIVISOR
 * Crea una función que reciba dos números y regrese el máximo
 * común divisor
 * Ej: 10, 5 -> 5 es el máximo común divisor
 * 5, 2 -> 1
 * 
 * EUCLIDES
 * MCD a y b = b y RESTANTE
 * a % b = RESTANTE
 * 
 * n1 = 10
 * n2 = 5
 * RETURN 5
 * ----------
 * n1 = 5
 * n2 = 10
 * residuo = 5
 * 
 * residuo = 5
 * n1 = 10
 * n2 = 5
 * 
 * residuo = 0
 * n1 = 5
 * n2 = 0
 * RETURN 5
 * -----------
 * n1 = 5 -> 1, 5
 * n2 = 2 -> 1, 2
 * residuo = 3
 * 
 * residuo = 3
 * n1 = 2
 * n2 = 3
 * 
 * residuo = 2
 * n1 = 3
 * n2 = 2
 * 
 * residuo = 1
 * n1 = 2
 * n2 = 1
 * 
 * residuo = 0
 * n1 = 1
 * n2 = 0
 * RETURN 1
 */
function maximo_comun_divisor(n1, n2) {
    let residuo = n1 % n2;
    if (residuo === 0) {
        return n2
    } else {
        while(residuo !== 0){
            residuo = n1 % n2;
            n1 = n2;
            n2 = residuo;
        }
        return n1;
    }
}
console.log(maximo_comun_divisor(7, 2));
/**
 * n1 = 5
 * n2 = 10
 * residuo = 5
 * n1 = 10
 * n2 = 5
 * RETURN mcd_recursivo(10, 5) = 5
 * 
 * mcd_recursivo(10, 5)
 * n1 = 10
 * n2 = 5
 * residuo = 0
 * RETURN 5
 * ------------
 * n1 = 8
 * n2 = 2
 * residuo = 0
 * RETURN 2
 * --------
 * n1 = 2
 * n2 = 8
 * residuo = 2
 * n1 = 8
 * n2 = 2
 * RETURN mcd_recursivo(8, 2); -> 2
 * 
 * mcd_recursivo(8, 2)
 * n1 = 8
 * n2 = 2
 * residuo = 0
 * RETURN 2
 * 
 * ---
 * n1 = 7
 * n2 = 2
 * residuo = 1
 * n1 = 2
 * n2 = 1
 * RETURN mcd_recursivo(2, 1) -> 1
 * 
 * mcd_recursivo(2, 1)
 * n1 = 2
 * n2 = 1
 * residuo = 0
 * RETURN 1
 */
function mcd_recursivo(n1, n2){
    let residuo = n1 % n2;
    if(residuo === 0){
        return n2
    } else {
        n1 = n2;
        n2 = residuo;
        return mcd_recursivo(n1, n2);
    }
}
console.log(mcd_recursivo(7, 2));