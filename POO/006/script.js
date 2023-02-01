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

const c1 = new Carro('Normal', 4)
c1.ligar()
c1.setCor('Preto')

console.log(`Nome: ${c1.nome}`);
console.log(`Portas: ${c1.portas}`);
console.log(`Ligado: ${(c1.ligado?"Sim":"Não")}`);
console.log(`Velocidade: ${c1.vel}`);
console.log(`Cor: ${c1.cor}`);
console.log('----------------------------------------');

const c2 = new Militar("Lutador", 1, 100, 50)

console.log(`Nome: ${c2.nome}`);
console.log(`Portas: ${c2.portas}`);
console.log(`Ligado: ${(c2.ligado?"Sim":"Não")}`);
console.log(`Blindagem: ${c2.blindagem}`);
console.log(`Munição: ${c2.municao}`);
c2.atirar()
console.log(`Munição: ${c2.municao}`);
console.log(`Cor: ${c2.cor}`);
console.log('----------------------------------------');

const c3 = new Utilitario("Usual", 4) 
console.log(c3.nome);
console.log(c3.portas);