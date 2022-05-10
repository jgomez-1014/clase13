
console.log("operador Modulo: ");

//operador matematico del modulo

let uno = 100;

//Number(prompt("introduce un numero para saber si es par o impar:"))

if(uno % 2 == 0){
   console.log(uno);
   console.log("El numero ingresado es PAR");
}else{
    console.log("EL Numero ingresado es IMPAR");
}

let resultado = uno / 2;

console.log("El resultado de la division es:", resultado);

//Operadores Logicos





//funciones

function mifuncion(){
    console.log("Me llamaste para que haga algo");   
}
mifuncion();

let nuno = 100;
let ndos = 200;

function sumar(a, b){
    let respuesta = a + b;
    console.log("El resultado de la suma es:", respuesta);
}
sumar(nuno, ndos);

console.log("==========================================");
//Bucles

let frutas = [
    "Manzana",
    "Pera",
    "Frutilla",
    "Pera",
    "Mora",
    "Limón",
    "Kiwi"
    ];
    console.log(frutas[0]);
    console.log(frutas[1]);
    console.log(frutas[2]);
    console.log(frutas[3]);
    console.log(frutas[4]);
    console.log(frutas[5]);
    console.log(frutas[6]);
    
    console.log("==========================================");



//for
for (let index = 0; index < frutas.length; index++) {
    console.log('Las frutas son: ', index, frutas[index]);
}
