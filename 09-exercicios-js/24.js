
const contarCaractere = (letra, frase) => {
    let contador = 0;

    for(let i = 0; i < frase.length; i++) {
        if(letra === frase.charAt(i)) {
            contador++
        }
    }

    return console.log(contador)
}

contarCaractere("r", "A sorte favorece os audazes");
contarCaractere("c", "Conhece-te a ti mesmo")