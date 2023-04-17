function maiorOuIgual(x, y) {
    if(typeof(x) == 'number' && typeof(y) == 'number') {
        if(x >= y){
            return true
        }
    } else {
        return false
    }
}



console.log(maiorOuIgual(0,0));
console.log(maiorOuIgual(0, "0"));
console.log(maiorOuIgual(5, 1));