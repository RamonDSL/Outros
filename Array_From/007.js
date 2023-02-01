// Crie um array de meses do ano, onde cada posição do array corresponderá ao nome do mês

//const month2 = data.toLocaleDateString("pt-bt", {month: "long"})
const mapFn = (_, i) => {
    const data = new Date(2023, i)
    const month = data.toLocaleString('pt-br', {month: "long"})    
    return month
}

const result = Array.from({length: 12}, mapFn)

console.log(result);