const http = require("http");
const os = require("os")

const host = "localhost";
const porta = 3000;


const servidor = http.createServer((requisicao, resposta) => {
    resposta.write("Hello, World!");
    resposta.end()
})

/** EXERCÍCIO VI: Escreva na resposta do servidor informações sobre
 * o sistema usando o módulo os.
 * EXERCÍCIO VII: Instale o pacote cpf, e na resposta escreva
 * um cpf aleatório.
 * TEMPO = 17H00
 */