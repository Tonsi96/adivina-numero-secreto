const readlineSync = require( 'readline-sync' );
const colors = require('colors');
const { generarNumeroAleatorio, verificarAdivinanza } = require('./adivinanza');
console.clear();

const obtenerNumeroUsuario = () => {
    return readlineSync.question('Ingresa un numero: ');
};

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log('*Bienvenido a Adivina el numero secreto'.green);
    console.log('Intenta adivinar el numero del 1 al 100.\n'.green);

    while ( numeroAdivinado !== numeroSecreto ) {
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
    }
};

juegoAdivinanza();
