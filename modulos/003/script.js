//import getTodosCursos, { cursos } from "./cursos.js";
import getTodosCursos from "./cursos.js";
//import { cursos as c, getCurso as gc} from "./cursos.js";
import * as m_cursos from "./cursos.js" // importando todo o módulo que tiver sido posto para ser exportado


// se estiver com default ele tem que ficar fora das chaves
console.log(m_cursos.default());
console.log(m_cursos.getCurso(3));
console.log(m_cursos.cursos);

// Não pode nomear uma importação default