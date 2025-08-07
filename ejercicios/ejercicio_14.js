const generarId = (function() {
    let id = 5;
    return function() {
        return id++;
    };
})();

console.log(generarId()); // 1
console.log(generarId()); // 2

