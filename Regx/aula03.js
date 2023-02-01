const { texto , arquivos} = require('./base');

/*
Todo quantificador colocado a direita da coisa que quer que repita irá fazer a ação abaixo 
* (opcionais) 000000 ou n vezes n{0,}
+ (obrigatório) quantifica 1 ou n vezes
? (opcionais) 0 ou 1 vez
\ caractere de escape
{qtda o minimo que vai aparecer, quantas(máximo) vezes vai aparecer} para pegar
*/

// console.log(texto);
// const regExp1 = /Jo+ão+/gi
// console.log(texto.match(regExp1));

//const regExp2 = /\.jpe{0,1}g/gi
const regExp2 = /\.jp(e)?g/g


for (const arquivo of arquivos) {
    const valido = arquivo.match(regExp2);
    if(!valido) continue
    console.log(arquivo, );
}