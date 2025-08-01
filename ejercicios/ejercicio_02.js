const saludar = function (nombre = "invitado") {
       return `Hola, ${nombre}!`;
};
console.log(saludar("Julio")); 
console.log(saludar ());
