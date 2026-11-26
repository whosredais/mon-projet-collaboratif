function saluer(nom) {
    return `Bonjour, ${nom} !`;
}

function compterMots(texte) {
    return texte.split(" ").length;
}

console.log(saluer("Alice"));
console.log("Nombre de mots :", compterMots("Bonjour le monde"));
