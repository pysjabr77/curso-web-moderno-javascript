let num1 = 1;
let num2 = 2;
console.log(num1, num2);
console.log("-------------------------");
num1++;
console.log(num1);
console.log("-------------------------");
--num1;
console.log(num1);
console.log("-------------------------");
console.log(++num1 === num2--); //retorna true, porque so ira decrementar o "num2" depois da comparacao
