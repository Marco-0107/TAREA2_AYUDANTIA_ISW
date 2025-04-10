const numeros=[1, 2, 3, 4, 5];
const strings=["hola", "mundo", "adios"];

//1
function suma(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

console.log(suma(numeros));

//2
function promedio(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma / array.length;
}
console.log(promedio(numeros));

//3 

function convertirAMayusculas(array) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(array[i].toUpperCase());
    }
    return resultado;
}
console.log(convertirAMayusculas(strings));

//4

function devolverNumerosPares(array) {
    let resultado2 = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            resultado2.push(array[i]);
        }
    }
    return resultado2;
}

console.log(devolverNumerosPares(numeros));
