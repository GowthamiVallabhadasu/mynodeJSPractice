var file = require('fs');
file.writeFileSync("./demo.txt","Hello World")
file.appendFileSync("./demo.txt","Hakuna Matata")
var datafromfile= file.readFileSync("./demo.txt")
console.log(datafromfile.toString());



    