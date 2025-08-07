const sumar = (...numeros) => numeros.reduce((acc, num) => acc + num, 0);

console.log(sumar(1, 2, 3, 4));