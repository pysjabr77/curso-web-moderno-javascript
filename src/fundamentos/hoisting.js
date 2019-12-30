//Joga a declaracao var para o top, ou seja, mesmo declarando a variavel depois
//da onde esta se utilizando ela, conforme o exemplo da varivel "a" a baixo, onde
//na usa primeira utilizacao o seu retorno sera undefined e depois sera retornado
//o valor 2. Ja no exemplo da variavel "b" usando let, na sua primeira utilizacao
//sera retornado um erro, e depois sera retornado o valor 3.
console.log("a = ", a);
var a = 2;
console.log("a = ", a);

//==============================================================================

//console.log("b = ", b); // retorna um erro "ReferenceError: b is not defined"
let b = 3;
console.log("b = ", b);
