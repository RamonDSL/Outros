// Criar um array que inicie com 5 e termine com 8. Usa shorthand property

let start = 9
let pare = 13
let length = pare - start + 1

const mapFn = (_, i) => start + i

const result = Array.from({ length }, mapFn)

// se a propriedade tem o mesmo nome que a variável que será seu valor, pode só por o nome 1 vez
    
console.log(result);