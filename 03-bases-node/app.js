const fs = require('fs');
console.clear();
console.log('============');
console.log('      Tabla del: 5');
console.log('============'); 

const a = 5;
let salida = '';

for(let i = 1; i <= 10; i++){
    salida += `${a} x ${i} = ${a * i}\n`;
}

console.log(salida);

fs.writeFile(`tabla-${a}.txt`, salida, (err) => {
    if(err) throw err;

    console.log(`tabla-${a}.thxt creado`);
})