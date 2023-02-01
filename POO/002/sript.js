class Carro {
    constructor(pnome, ptipo) {
        this.nome = pnome
        if (ptipo == 1) {
            this.tipo = "Esportivo"
            this.velmax = 300
        } else if (ptipo == 2) {
            this.tipo = 'Utilitário'
            this.velmax = 100
        } else if (ptipo == 3) {
            this.tipo = 'Passeio'
            this.velmax = 160
        } else {
            this.tipo = 'Militar'
            this.velmax = 180
        }
    }
    getNome() {
        return this.nome
    }
    getTipo() {
        return this.tipo
    }
    getvelmax() {
        return this.velmax
    }
    getinfo() {
        return [this.nome, this.tipo, this.velmax]
    }
    setNome(nome) {
        this.nome = nome
    }
    infoCar() {
        console.log(`${this.nome}: ${this.tipo} com vel de ${this.velmax} km/h`);
        console.log('-------');
    }
}

let c1 = new Carro('Rapidão', 1)
let c2 = new Carro('Super Luxo', 3)
let c3 = new Carro('Bombadão', 4)
let c4 = new Carro('Carrego tudo', 2)

/*c1.infoCar()
c2.infoCar()
console.log(c3.getinfo());*/
c4.infoCar()
c4.setNome("Super Veloz")
c4.infoCar()