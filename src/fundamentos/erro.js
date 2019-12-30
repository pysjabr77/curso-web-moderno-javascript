function tratarErroELancar(erro) {
  throw erro;
  //throw new Error('...');
  //throw 10;
  //throw true;
  //throw mensagem;
  // throw {
  //   nome: erro.name,
  //   msg: erro.message,
  //   date: new Date()
  // };
}

function imprimirNomeGritado(obj) {
  //console.log(obj.name.toUpperCase() + "!!!"); //retorna um erro ˜TypeError: Cannot read property 'toUpperCase' of undefined˜
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    tratarErroELancar(e);
  } finally {
    console.log("final");
  }
}

const obj = { nome: "Pedro Y Saito" };
imprimirNomeGritado(obj);
