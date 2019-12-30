// par nome/valor
const saudacao = "Opa"; //contexto lexico 1

function exec() {
  const saudacao = "Falaaa"; //contexto lexico 2
  return saudacao;
}

//const saudacao = "Legall..."; //retorna um erro "SyntaxError: Identifier 'saudacao' has already been declared", porque
//ja existe um variavel para esse contexto

// Objetos sao grupos aninhados de pares nome/valor
const cliente = {
  nome: "Pedro",
  idade: 42,
  peso: 90,
  endereco: {
    logradouro: "Rua Muito Legal",
    numero: 123
  }
};

console.log(saudacao);
console.log(exec());
console.log(cliente);
