// Evitar usar variaveis globais

{
  {
    {
      {
        var sera = "Sera ???";
        console.log(sera);
      }
    }
  }
}
console.log(sera); //ira printar o valor da variavel

function teste() {
  var local = 123;
  console.log(local);
}
teste();
console.log(local); // retorna um erro "ReferenceError: local is not defined"
