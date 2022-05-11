console.log('Estamos en el archivo de la Calculadora');

/* let numeroUno = document.getElementById('numeroUno').value;
let numeroDos = document.getElementById('numeroDos').value;

    console.log('EL primer número es: ', numeroUno);
    console.log('El segundo número es: ', numeroDos);

    function calcular()
{

    let resultado = Number(numeroUno) + Number(numeroDos);
    console.log('El resultado es: ', resultado);
}
calcular(numeroUno,numeroDos) */

/*      
function Sumar(a, b) {
    let resultado = a + b;
    escribir(resultado)
}


function Resta(a, b) {
    let resultado = a - b;
     */

    var numeroUno, numeroDos, suma, resta, multi, dividir;

    let resultado = document.getElementById('resultado');
    let resultado1 = document.getElementById('resultado1');
    let resultado2 = document.getElementById('resultado2');
    let resultado3 = document.getElementById('resultado3');
    let resultado4 = document.getElementById('resultado4');
    
    function calcular() {
        
        numeroUno = document.getElementById('numeroUno').value;
        numeroDos = document.getElementById('numeroDos').value;

        numeroUno = Number(numeroUno);
        numeroDos = Number(numeroDos);

        suma = numeroUno + numeroDos;
        console.log("La suma de los dos valores es: ", suma);
        resultado.innerHTML = "la suma de los dos valores es: " + suma;

        resta = numeroUno - numeroDos;
        console.log("La restaa de los dos valores es: ", resta);
        resultado2.innerHTML = "la resta de los dos valores es: " + resta;

        
        multi = numeroUno * numeroDos;
        console.log("La multiplicacion de los dos valores es: ", multi);
        resultado3.innerHTML = "la Multiplicacion de los dos valores es: " + multi;

        
        dividir = numeroUno / numeroDos;
        console.log("La divicion de los dos valores es: ", dividir);
        resultado4.innerHTML = "la Divicion de los dos valores es: " + dividir;
    }

    function restar() {
        
        numeroUno = document.getElementById('numeroUno').value;
        numeroDos = document.getElementById('numeroDos').value;

        numeroUno = Number(numeroUno);
        numeroDos = Number(numeroDos);

        resta = numeroUno - numeroDos;
        console.log("La resta de los dos valores es: ", resta);
        resultado2.innerHTML = "la resta de los dos valores es: " + resta;
    }

    function multi() {
        
        numeroUno = document.getElementById('numeroUno').value;
        numeroDos = document.getElementById('numeroDos').value;

        numeroUno = Number(numeroUno);
        numeroDos = Number(numeroDos);

        
        multi = numeroUno * numeroDos;
        console.log("La multiplicacion de los dos valores es: ", multi);
        resultado3.innerHTML = "la Multiplicacion de los dos valores es: " + multi;

    }

    function dividir() {
        
        numeroUno = document.getElementById('numeroUno').value;
        numeroDos = document.getElementById('numeroDos').value;

        numeroUno = Number(numeroUno);
        numeroDos = Number(numeroDos);
        
        dividir = numeroUno / numeroDos;
        console.log("La divicion de los dos valores es: ", dividir);
        resultado4.innerHTML = "la Division de los dos valores es: " + dividir;
    }

    function sumar() {
        
        numeroUno = document.getElementById('numeroUno').value;
        numeroDos = document.getElementById('numeroDos').value;

        numeroUno = Number(numeroUno);
        numeroDos = Number(numeroDos);

        resta = numeroUno + numeroDos;
        console.log("La Suma de los dos valores es: ", resta);
        resultado1.innerHTML = "la suma de los dos valores es: " + resta;
    }