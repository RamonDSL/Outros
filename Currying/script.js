// Currying  function é uma função que que recebe multiplos parâmetros um de cada vez, vai invocar uma função com menos args que é capaz de receber e essa invocação vai retornar outra func e assim por diante

/*
const add = (num1, num2) => num1 + num2
const increment = number => add(1, number)
console.log(increment(3));
*/

// currying
/*
const add = num1 => num2 => num1 + num2
const increment = add(1)

console.log(add(1)(5));//se não quiser usar o increment
console.log(increment(5));
*/

/*
const getDiscount = (price, discount) => price * discount

console.log(getDiscount(500, .10))
console.log(getDiscount(600, .10))
console.log(getDiscount(800, .10))
*/

const getDiscount = discount => price  => price * discount

const getLoyalCustomerDiscount = getDiscount(.10)
const getExcellentCustomerDiscount = getDiscount(.20)
const getAmazingCustomerDiscount = getDiscount(.30)

console.log(getLoyalCustomerDiscount(747));
console.log(getExcellentCustomerDiscount(747));
console.log(getAmazingCustomerDiscount(747));
