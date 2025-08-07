function esCorreo(cadena) {
    return cadena.includes("@") && cadena.endsWith(".com");
}

console.log(esCorreo("test@example.com")); // true
console.log(esCorreo("test@example.org")); // false
console.log(esCorreo("testexample.com"));  // false