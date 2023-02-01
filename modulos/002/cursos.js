const cursos = ["JavaScript", "HTML", "CSS", "Arduino", "React", "C++", "Python", "Java"]

/*
const getTodosCursos = () => {
    return cursos
}*/

export default function getTodosCursos() { // se for com function, posso colocar antes de iniciar a func
    return cursos
}

function getCurso(i) {
    return cursos[i]
}

export {
    cursos,
    getCurso,
}
//export default getTodosCursos

// só pode ter um export default exportando um método por arquivo