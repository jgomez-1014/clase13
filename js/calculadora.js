console.log("Estamos en el archivo de la calculadora");

let numerouno = Number(prompt("Ingresa un numero para realizar en tu calculo: "))
let numerodos = Number(prompt("Ingresa otro numero para realizar en tu calculo: "))

console.log("El primer numero es: ", numerouno);
console.log("El segundo numero es: ", numerodos);


function escribir(r){
    console.log("El resultado es", r);
}

function sumar(a,b){
    let resultado = a + b;
    escribir(resultado)
}
sumar(a,b);

function restar(a,b){
    let resultado = a - b;
}
