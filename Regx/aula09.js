const { lookahead } = require('./base');

// lookahead - olha me retorna os caracteres que eu quero se existir active me retorna a frase menos o active

console.log(lookahead);
//console.log(lookahead.match(/.+[^în]active$/gim));

// Positive lookahead (frases que tem active)
//console.log(lookahead.match(/.+(?=[^în]active)/gim)); //?=; checa se setm x coisa se tiver mostra y


// Positive lookahead (frases que tem inactive) ?=
//console.log(lookahead.match(/.+(?=\sinactive)/gim));

// Negative lookahead (frases que não tem active)
//console.log(lookahead.match(/^(?!.*[^in]active).+$/gim));

// Negative lookahead (frases que não tem inactive) ?!
//console.log(lookahead.match(/^(?!.*inactive).+$/gim));

// Positive lookbehind (frases que começam com online) ?<=
//console.log(lookahead.match(/(?<=ONLINE\s+)\S.*/gim));

// Negative lookbehind (frases que não começam com online)
//console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim));

const cpf = `
012.250.796-10
111.111.111-11
147.258.963-10
`

console.log(cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm)); //não pega sequência iguais