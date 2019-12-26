//funcao sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}
imprimirSoma(3, 4);
imprimirSoma(3); //ira imprimir NaN
imprimirSoma(3, 52, 10, 2, 4); //soma o dois primeiro parametro e ignora o resto
imprimirSoma(); //ira imprimir NaN

//Funcao com retorno
function soma(a, b = 1) {
  return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma()); //ira imprimir NaN
