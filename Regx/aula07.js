const { cpfs, cpfs2 } = require('./base');

// ^ começa com
// $ termina com
// [^] negação
// m -multiline, muda o comportamento do ^ e $ faz com que 

const cpf = '254.224.877-45'
const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm // perfeito para validar campos/ estou dizendo que deve ser exatamente desse jeito
console.log(cpf.match(cpfRegExp));
console.log(cpfs2.match(cpfRegExp));