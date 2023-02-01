// Membors estáticos consegue invocalos sem instanciar uma classe é como se ele pertencesse a classe 


class Npc {
    static alerta = false
    constructor(energia) {
        this.energia = energia
    }
    info = function() {
        console.log(`Energia: ${this.energia}`);
        console.log(`Alerta: ${this.alerta? "Sim": "Não"}`);
        console.log("------------------------------------------");
    }
    static alertar = function() {
        Npc.alerta = true
    }
}

const n1 = new Npc(100)
const n2 = new Npc(80)
const n3 = new Npc(30)

//n1.alerta = true
Npc.alertar()

n1.info()
n2.info()
n3.info()