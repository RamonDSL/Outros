// Trasforme o desafio anterior em uma função que irá receber 1 ou 2 argumentos
/*
let start = 9
let pare = 13
let length = pare - start + 1
*/
function criaArray(ini, fim = ini) {
    const length = fim - ini + 1

    const mapFn = (_, i) => ini + i

    return Array.from({ length }, mapFn)

}


const result = criaArray(7)

// se a propriedade tem o mesmo nome que a variável que será seu valor, pode só por o nome 1 vez
    
console.log(result);