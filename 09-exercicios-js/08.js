
const multiplicar = (num1, num2) => {
    if (num1 >= 0 && num2 >= 0 && Number.isInteger(num1) && Number.isInteger(num2)) {
        let total = 0;
        
        for(let i = 1; i <= num2; i++){
            total += num1; 
        }
        console.log(total);
    } else {
        console.log('Numeros invalidos');
    }
}

multiplicar(5, 5)
multiplicar(0, 7)
