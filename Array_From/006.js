// Crie um array que tenha em suas posições (os caracteres) de A - Z

const mapFn = (_, i) => String.fromCharCode(i + 97).toUpperCase()


const result = Array.from(Array(26), mapFn)

console.log(result);