const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5)); //Nao retorna erro, retorna vazio
const ret = escola.charAt(5);
console.log(ret); //Nao retorna erro, retorna vazio
console.log(escola.charCodeAt(3));
console.log(escola.indexOf(3));
console.log(escola.substring(1));
console.log(escola.substring(0, 3));
console.log("Escola ".concat(escola).concat("!"));
console.log("Escola " + escola + "!");
console.log(escola.replace(/\d/, "e")); //usando regex
console.log(escola.replace(3, "e"));
console.log("ana,maria,pedro".split(",")); //convertendo para array
