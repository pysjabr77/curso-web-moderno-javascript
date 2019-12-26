console.log(7 / 0); //retorna um tipo Infinity

console.log("10" / 2); //javascrit converte a string "10" para o inteiro 10
console.log("10" + 2); //javascrit ira concatenar, ao inves de somar

console.log("10,2" / 2); //retorno o tipo NaN (Not a Number)
console.log("show" * 2); //retorno o tipo NaN (Not a Number)

console.log("10.2" / 2);

console.log(10.toString()); //retorna o erro "SyntaxError: Invalid or unexpected token"
console.log((10).toString());
console.log((10.345).toFixed(2));