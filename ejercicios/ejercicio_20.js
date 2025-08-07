const promedio = arr => arr.reduce((acc, num) => acc + num, 0) / arr.length;

console.log(promedio([10, 20, 30])); // 20