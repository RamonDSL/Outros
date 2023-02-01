// objetos literais, apontam para o mesmo endereço de memória
const Pessoa = {
    nome: "",
    idade: null,
    getNome: function() {
        return this.nome
    },
    setNome: function(nome) {
        this.nome = nome
    },
    getIdade: function() {
        return this.idade
    },
    setIdade: function(idade) {
        this.idade = idade
    },
}

/*
const p2 = Pessoa
const p3 = Pessoa

p3.nome = "Clara" // todos são alterados
p2["nome"] = "Biel" // todos são alterados

console.log(Pessoa.nome); // clara
console.log(p2.nome); // clara
console.log(p3.nome); // clara


//console.log(p2.getNome());
Pessoa.setNome('Leo')
console.log(p2.getNome());
*/
const btn = document.querySelector('#btn_add')
const res = document.querySelector('.res')

const addPessoa = (nome, idade) => {
    Pessoa.setNome(nome)
    Pessoa.setIdade(idade)

    const div = document.createElement('div')

    div.setAttribute('class', 'pessoa')
    div.innerHTML = `Nome: ${Pessoa.getNome()} <br> Idade: ${Pessoa.getIdade()}`

    res.appendChild(div)
}

btn.addEventListener('click', () => {
    const nome = document.querySelector('#f_name').value
    const idade = document.querySelector('#f_idade').value

    addPessoa(nome, idade)
})