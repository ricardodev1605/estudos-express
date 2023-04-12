const os = require("os");

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.type());
// console.log(os.version());
// console.log(os.uptime());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.cpus().length);
// console.log(os.homedir());
// console.log(os.hostname());

const fs = require("fs");
// escreve o texto em um novo arquivo(.txt)
fs.writeFileSync("./batata.txt", "tomale pai e genio fi kkkkkkk");
fs.writeFileSync("./exercicio.txt", `${os.arch}, \n ${os.platform}, \n${os.type}, \n ${os.version}, \n ${os.uptime}, \n ${os.freemem}, \n  `);

