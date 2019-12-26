//Armazenando uma funcao em uma variavel

const imprimirSoma = function(a, b) {
  console.log(a + b);
};

imprimirSoma(2, 3);

const soma = (a, b) => {
  return a + b;
};
console.log(soma(2, 3));

const somaReduzido1 = (a, b) => a + b;
console.log(somaReduzido1(2, 3));

const somaReduzido2 = a => a + 10;
console.log(somaReduzido2(2));
