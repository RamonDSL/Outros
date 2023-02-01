//Abstração

class CarroPadrao {
    constructor() {
        if (this.constructor === CarroPadrao) {
            throw new TypeError("Está classe não pode ser instânciada")
        }
        if (this.ligar === undefined) {
            throw new TypeError("É obrigatório implementar o método ligar")
        }
        if (this.desligar === undefined) {
            throw new TypeError("É obrigatório implementar o método desligar")
        }
        this.rodas = 4
        this.portas = 4
        this.ligado = false
    }
}

class Carro extends CarroPadrao {
    constructor(tipo, estagioTurbo) {
        super() // tem que chamar se não da erro se for herança
        this.turbo = new Turbo(estagioTurbo)
        
        if (tipo == 1) {
            this.velmax = 120
            this.nome = "normal"
        } else if (tipo == 2) {
            this.velmax = 160
            this.nome = "esportivo"
        } else if (tipo == 3) {
            this.velmax = 200
            this.nome = "super esportivo"
        }
        
        this.velmax += this.turbo.pot
    }
    
    info() {
        console.log(this.nome);
        console.log(this.velmax);
        console.log(this.turbo);
        console.log(this.rodas);
        console.log(this.portas);
        console.log(this.ligado); 
        console.log('------------------------');
    }
    ligar(){
        this.ligado = true
    } // tem que ter o método mesmo que não faça nada
    desligar(){
        this.ligado = false
    }
}

class Turbo {
    constructor(e) {
        switch (e) {
            case 1:
                this.pot = 50
                break;
            case 2:
                this.pot = 75
                break
            case 3:
                this.pot = 100
                break
            default:
                this.pot = 0
        }
    }
}

class CarroEspecial extends Carro {
    constructor(estagioTurbo) {
        super(4, estagioTurbo)
        this.tipoinfo = 0
        this.velmax = 300 + this.turbo.pot
        this.nome = "Carro Especial"
    }
    info() {
        if (this.tipoinfo == 1) {
            super.info()
        } else {
            console.log(`Nome: ${this.nome}`);
            console.log(`Velocidade Máxima: ${this.velmax}`);
            console.log(`Turbo: ${this.turbo.pot}`);
            console.log('------------------------');
        }
    }
}

const c1 = new Carro(1, 0)
const c2 = new Carro(1, 1)
const c3 = new CarroEspecial(3)
//const c4 = new CarroPadrao()

c1.info()
c2.info()
c3.info()