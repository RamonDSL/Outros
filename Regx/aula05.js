const { alfabeto } = require('./base');

//[abc] encontrar qualquer coisa no conjunto

console.log(alfabeto);
//console.log(alfabeto.match(/[abc]/g));
//console.log(alfabeto.match(/[abc]+/g)); //encontra tudo que estiver no conjunto mas se tiver alguma sequência de qualquer coisa que está ali dentro encontra também
//console.log(alfabeto.match(/[abc123]+/g));
//console.log(alfabeto.match(/[^abc123]/g)); // ^ negar coisas/ encontrar tudo com excessão
//console.log(alfabeto.match(/[0-9]/g));// - de alguma coisa até alguma coisa sempre do menor para o maior se põe o + iria pegar tudo que está entre essa sequência
//console.log(alfabeto.match(/[a-zA-Z0-9]/g));
console.log(alfabeto.match(/\w+/g)); // atalho
console.log(alfabeto.match(/\d/g));