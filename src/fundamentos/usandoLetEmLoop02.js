const funcs = [];

for (let i = 0; i < 10; i++) {
  funcs.push(() => {
    console.log(i);
  });
}
//Neste caso sera impresso o valor 2 e 8
funcs[2]();
funcs[8]();
