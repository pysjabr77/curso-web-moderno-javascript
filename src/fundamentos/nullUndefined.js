const a = { name: "Teste" };
console.log(a);
const b = a; //variavel b recebe uma referencia de a
console.log(b);
b.name = "Ola";
console.log(b);
console.log(a);

let c = 3;
console.log(c);
let d = c; //variavel d recebera um copia de c, copia com valor para tipos primitivos
console.log(d);
d++;
console.log(d);
console.log(c);

let e = "Teste";
console.log(e);
let f = e; //variavel d recebera um copia de c, copia com valor para tipos primitivos
console.log(f);
f = "Alterou";
console.log(f);
console.log(e);

let valor; //nao inicializado, retorna undefined
console.log(valor);

valor = null;
console.log(valor);
//console.log(valor.toString()); //retorna um erro "TypeError: Cannot read property 'toString' of null"

//console.log(valor2); //retorna um erro "ReferenceError: valor2 is not defined"

const produto = {};
console.log(produto.preco); //retorna undefined
//console.log(produto.preco.desconto); //retorn um erro "TypeError: Cannot read property 'desconto' of undefined"
produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; //evite atribuir undefined
console.log(!!produto.preco);
//delete produto.preco;
console.log(produto);

produto.preco = null;
console.log(!!produto.preco);
console.log(produto);
