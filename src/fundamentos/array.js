//Array e heterogenio
//Array nao tem tamanho fixo

const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); //retorna undefined

valores[4] = 10;
console.log(valores); //adiciona o valor 10 na posicao 4
console.log(valores.length);

valores.push({ id: 3 }, false, null, "teste");
console.log(valores);

valores[10] = 10;
console.log(valores); //adiciona o valor 10 na posicao 10, e nas posicoes que
//que nao existe sera retornado undefined

console.log(valores[9]); //ira retorna undefined

console.log(valores.pop()); //retira o ultimo valor
delete valores[0];
console.log(valores);

console.log(typeof valores); //e um objeto
