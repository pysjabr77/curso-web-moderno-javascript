console.log("01 => ", "1" == 1); //Nao compara o tipo da variavel
console.log("02 => ", "1" === 1); //Compara o tipo e o valor
console.log("03 => ", "3" != 3);
console.log("04 => ", "3" !== 3);
console.log("=========================");
console.log("05 => ", 3 < 2);
console.log("06 => ", 3 > 2);
console.log("07 => ", 3 <= 2);
console.log("08 => ", 3 >= 2);
console.log("=========================");
const d1 = new Date(0);
const d2 = new Date(0);
console.log("09 => ", d1 === d2); //aponta para referencia de memoria diferente
console.log("10 => ", d1 == d2); //aponta para referencia de memoria diferente
console.log("11 => ", d1.getTime() === d2.getTime());
console.log("12 => ", d1.getTime() == d2.getTime());
console.log("=========================");
console.log("12 => ", undefined == null);
console.log("13 => ", undefined === null);
