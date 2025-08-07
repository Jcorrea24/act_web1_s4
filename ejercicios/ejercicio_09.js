// Función que crea un contador privado usando closure
function crearContador() {
    let contador = 0;
    return function() {
        return contador++;
    };
}

const contador = crearContador();
console.log(contador()); // 0
console.log(contador()); // 1
console.log(contador()); //