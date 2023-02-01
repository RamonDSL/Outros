// Criar um array [1, 2, 3, 4, 5, 6]. Explica brevemente o funcionamento do .map


const mapFn = function (_, i) {
    return i + 1
}

const result = Array.from({length: 6}, mapFn)

console.log(result);