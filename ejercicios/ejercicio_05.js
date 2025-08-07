function contarVocales(cadena) {
    if (cadena.length === 0) return 0;
    const vocales = "aeiouAEIOU";
    const esVocal = vocales.includes(cadena[0]) ? 1 : 0;
    return esVocal + contarVocales(cadena.slice(1));
}

console.log(contarVocales("hola")); // 2