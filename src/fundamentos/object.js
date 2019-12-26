//Objeto e um conjunto de chave e valor

const prod1 = {};
prod1.nome = "Celular ultra mega";
prod1["preco"] = 4999.0;
prod1["desconto legal"] = 0.4; //evitar atributos com espaco
console.log(prod1);

const prod2 = {
  nome: "Camisa Polo",
  preco: 79.9,
  obj: {
    i: 1,
    obj: {
      j: 2
    }
  }
};
console.log(prod2);

const prod3 = {
  nome: "Camisa Polo",
  preco: 79.9,
  obj: {
    i: 1
  },
  obj: {
    i: 3
  }
};
console.log(prod3); //nao ira retornar erro, mas ira substituir o objeto

const prod4 = {
  nome: "Camisa Polo",
  preco: 79.9,
  obj: {
    i: 1
  },
  obj: {
    j: 3
  }
};
console.log(prod4); //nao ira retornar erro, mas ira substituir o objeto

// Objeto em javascript               !=  JSON
//{nome: 'Camisa Polo', preco: 79.90} != '{"nome": "Camisa Polo", "preco": 79.90}'
