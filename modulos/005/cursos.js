export default class Cursos {
    static cursos = ["JavaScript", "HTML", "CSS", "Arduino", "React", "C++", "Python", "Java"]

    static getTodosOsCursos=() => {
        return this.cursos
    }

    static getCurso= i => {
        return this.cursos[i]
    }

    static addCurso= (novoCurso) => {
        this.cursos.push(novoCurso)
    }

    static deletarCursos= () => {
        this.cursos = []
    } 
}// static para ter o mesmo endereço de memória e não precisar instânciar a class para usa-lá
