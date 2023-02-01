// agrupamento de uma função com seu escopo léxico

const lexical = 'oi léxico'

const safe = secret => ({
    getSecret: () =>secret
})

const priveteUserData = 'Dado Privado'

const obj =  safe(priveteUserData)

const func = secret => () => secret

console.log(func(priveteUserData)());

const priveteUserData2 = 'Outro Dado Privado'
const priveteUserData3 = 'Mais um Dado Privado'

const getSecret2 = func(priveteUserData2)
const getSecret3 = func(priveteUserData3)

console.log(getSecret2());
console.log(getSecret3());


















const addTo = a => b => a + b

const increment = addTo(1)
const increment10 = addTo(10)
const increment20 = addTo(20)

console.log(increment(1));
console.log(increment10(10));
console.log(increment20(20));