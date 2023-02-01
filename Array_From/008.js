// Seguindo os mesmos passos do exercício anterior, crie os dias da semana em formato longo (domingo) e curto (dom.)

const mapFn = (_, i) => {
    const data = new Date(2023, i)
    const monthLong = data.toLocaleString('pt-br', {month: "long"})
    const monthShort = data.toLocaleString('pt-br', {month: "short"})

    return [monthLong, monthShort]
}

const result = Array.from({length: 12}, mapFn)

console.log(result);