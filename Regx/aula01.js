// vamos usar expressões regulares como padrão para encontrar coisas dentro de uma string
// usar para validar coisas
// g - global(encontrar todas as ocorrências), sem ela o padrão é encontrou a 1º parou
// i - insensitive para encontrar esse conjunto de caracteres, sem se importar se estão em maiusculas ou minusculas
// () - grupos
// | ou


const { texto } = require('./base');
const regExp1 = /(maria|joão)(, hoje sua esposa)/i;
const found = regExp1.exec(texto);

console.log(found);