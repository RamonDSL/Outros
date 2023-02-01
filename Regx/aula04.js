const { html } = require('./base');




console.log(html);
console.log(html.match(/<.+>.*<\/.+>/g)); // greedy não vai mais até o fim da expressão
console.log(html.match(/<.+?>.*?<\/.+?>/g)); // não greedy vai passar a selecionar o minimo possível

