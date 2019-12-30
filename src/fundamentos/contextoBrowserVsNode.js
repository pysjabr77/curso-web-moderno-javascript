//Ter conhecimento do runtime onde o javascript esta sendo executado
//Fugir de escopo global

//Browser
//Contexto global "window" ou "this"
//const e let náo vao direto para o contexto window, ou inves de var;

//Node
let a = 3;

global.b = 123;
this.c = 456;
this.d = false;
this.e = "teste";

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

//criando um variavel global, mesma coisa var
abc = 3; // nao faca isso
console.log(global.abc);

//module.exports = {e: 456, f: false, g: 'teste'};
