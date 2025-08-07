const retrasarMensaje = function(mensaje, tiempo) {
    setTimeout(function() {
        console.log(mensaje);
    }, tiempo);
};

retrasarMensaje("Hola", 2000); // Imprime "Hola"