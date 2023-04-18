
const reverterVogais = (frase) => {
    const vogais = ["a", "e", "i", "o", "u"]
    vogais.forEach(
        (vogal) => frase = frase.replace(vogal, '')
    )

    return console.log(frase);
}

reverterVogais("Cod3r");
reverterVogais("Fundamentos");