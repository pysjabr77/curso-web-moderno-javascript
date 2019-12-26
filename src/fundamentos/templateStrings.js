//Adicionado no ECMAStrip2015

const nome = "Rebeca";
const concatenacao = "Ola " + nome + "!";
const template1 = `
  Ola 
  ${nome}!`;
const template2 = `Ola ${nome}!`;
console.log(concatenacao, template1, template2);

//expressoes
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei...${up("cuidado")}`);
