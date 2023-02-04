//regex101.com bom site para criar expressões regulares

const encontrapalvras = /[\wÀ-ú]+/g

// Não números \D tirar tudo que ñ é número
const naoNumerosRegEx = /\D/

//valida IP
const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|[\d])(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|[\d])/g

//valida CPF só verifica se está no formato correto
const cpfRegExp = /(?:\d{3}\.){2}\d{3}-\d{2}/

//valida telefone
const telRegExp = /^(\(\d{2}\)\s*)?(9\s*)?\d{4}-\d{4}$/gm

//validar senhas fortes
const pasRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\]\)]).{8,}$/gm

//validar e-mails
const emailsRegExp = /[^\s]+@[^\s]+\.[^\s]+(\w+)*/gm //permissiva (vai aceitar tbm muitos inválidos)
const emails2RegExp = /^[^\s\.]+\.?[^\s\.]+@[^\s]+\.[^\s]+\w+$/gm

//é bom quando for fazer validação por ^(começa com) e $(termina com) para se o usuário digitar um espaço diferente já não valida

const validaSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[);(@{}!#$%¨&*|\\°^~?]).{8,24}/

const cardsNumber = `
1234123412341234
1234 1234 1234 1234
1234 12344321 1234
1321
1561dwq5
`
const validaNumeroDeCartao = /^(\d{4}\s?){4}$/gm
const validaNumeroDeCartao2 = /^(\d{4}\s?){3}\d{4}$/gm

const validaNome = /^((?!.*\d)(?!.*[);(@{}!#$%¨&*|\\°^~?])[a-zA-Zà-úÀ-Ú]{2,} ?)+$/ // verifica se cada parte do nome tem pelo menos 2 caracteres e se só tem letras e um espaço entre cada parte do nome 

const validaNumIntAndFloat = /\d+(?:\.\d+)?/
/*
\d+ - para aceitar números
() para deixar opicional 
?: - para não lembrar do grupo
\.\d+ para pegar a parte decimal do número com a inteira se tiver
*/

const getMultiplicacaoEDivisao = /((?:[+-])?(?:\d+)?(?:\.\d+)?)[\*\/]((?:[+-])?(?:\d+)?(?:\.\d+)?)/
const getSomaESubtracao = /((?:\d+)?(?:\.\d+)?)[+-]((?:\d+)?(?:\.\d+)?)/