const { html2 } = require('./base');

// $1 $2 $3 - Retrovisores
// (\w*) - \1 -> quero que encontra a mesma coisa que está naquele grupo
// .* dotall - pode ou não ter uma sequência de caracteres aqui
// ?: não contar o grupo / não salvar na memória
// <p>Olá mundo</p>


//console.log(html2);
//console.log(html2.match(/<(\w*)>.+?<\/\1>/g));
//console.log(html2.match(/<(\w*).*?>.+?<\/\1>/g));
//console.log(html2.match(/<(\w*)[\s\S]*?>[\s\S]*?<\/\1>/g)); // quero que selecione tudo que é e não é espaço
//console.log(html2.match(/<(\w*)[\s\S]*?>([\s\S]*?)<\/\1>/g));
console.log(html2.replace(/(<(\w*)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, `$1"AHHA $3 HAHAA"$4`));