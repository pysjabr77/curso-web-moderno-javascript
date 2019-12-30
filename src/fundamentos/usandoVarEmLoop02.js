const funcs = [];

for (var i = 0; i < 10; i++) {
  funcs.push(() => {
    console.log(i);
  });
}

//Sera imprimido o valor de 10, pois as funcoes estao apontando para a referencia
//de "i"
funcs[2]();
funcs[8]();
