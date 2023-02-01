class Carro { //Class Pai / Base
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar=function() {
        this.ligado = true
    }
    desLigar=function() {
        this.ligado = false
    }
    setCor = function(cor) {
        this.cor = cor
    }
}

class Militar extends Carro { //class Filho
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("Verde")
    }
    atirar = function() {
        if (this.municao > 0) {
            this.municao--
        }
    }
}

class Utilitario extends Carro {
}

const f_tipoMilitar = document.querySelector("#f_tipoMilitar") 
const f_tipoNormal = document.querySelector("#f_tipoNormal")
//const inputsNumber = document.querySelectorAll("input[type=number]")
const nome = document.querySelector('#f_name')
const portas = document.querySelector('#f_portas')
const inputsNumber = document.querySelectorAll("[disabled]")
const carros = document.querySelector(".carros")
const btn = document.querySelector('#btn_addCarro')

let a_carros = []

const removerCarro = (quem) => {
    a_carros = a_carros.filter((element) => {
        return (element.nome != quem) 
    })
}

const gerenciarExibicaoCarros = () => {
    carros.innerHTML = ""
    a_carros.forEach((carro) => {
        const div = document.createElement('div')
        const btnRemove = document.createElement('button')
        btnRemove.addEventListener('click', (event) => {
            const qmRemover = event.target.parentNode.dataset.nome
            removerCarro(qmRemover)
            gerenciarExibicaoCarros()
        })
        div.setAttribute('class', 'carro')
        div.setAttribute('data-nome', carro.nome)
        div.innerHTML = `${carro.nome}`
        btnRemove.innerHTML = "Remover"
        div.appendChild(btnRemove)
        carros.appendChild(div)
    })
}

btn.addEventListener('click', () => {
    if (f_tipoNormal.checked) {
        const carro = new Carro(nome.value, portas.value)
        a_carros.push(carro)
    } else {
        const carro = new Militar(nome.value, portas.value, inputsNumber[0].value, inputsNumber[1].value)
        a_carros.push(carro)
    }
    gerenciarExibicaoCarros()
    nome.value = ""
    portas.value = 0
})

f_tipoMilitar.addEventListener('click', () => {
    for (const input of inputsNumber) {
        input.removeAttribute('disabled')
    }
})
f_tipoNormal.addEventListener('click', () => {
    for (const input of inputsNumber) {
        input.setAttribute('disabled', 'disabled')
        input.value = 0
    }
})