/** EXERCÍCIO V: Crie um arquivo txt com 1000 cpf aleatórios.
 * Desafio: Leia o arquivo e mostre um por um dos 1000 cpf
 * que estão dentro do arquivo.
 */

const CPF = require("cpf");
const fs = require("fs")

console.log(CPF.generate());
// console.log(CPF.format("08439607520"));
console.log(CPF.isValid("30602215021"));

for(let i =0; i< 1000; i++){
    const randomCPF = CPF.generate();
    fs.appendFileSync('./cpfs.txt', ` ${randomCPF} \n`  );
}

// Lê o arquivo de CPFs
const cpfs = fs.readFileSync('cpfs.txt', 'utf-8');

// Separa os CPFs em um array e mostra cada um na tela
const cpfArray = cpfs.split('\n');
cpfArray.forEach((cpf) => {
  console.log(cpf);
});
