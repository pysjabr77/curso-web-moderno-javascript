console.log(typeof console);

console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = "Bola";
//obj1["nome"] = "Bola 2";
console.log(obj1.nome);

function Obj(nome) {
  this.nome = nome;
  this.exec = () => {
    console.log("Executando o exec...");
  };
  this.exec2 = function() {
    console.log("Executando o exec2...");
  };
}
const obj2 = new Obj("Cadeira");
const obj3 = new Obj("Mesa");
console.log(obj2.nome);
console.log(obj3.nome);
obj2.exec();
obj3.exec2();
