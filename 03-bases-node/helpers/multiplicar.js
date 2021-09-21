const { throws } = require('assert');
const fs = require('fs');
const colors = require('colors');
const argv = require('../config/yargs');


const crearArchivo = async(base = 5, listar) => {

    try {
        
        console.log('================'.rainbow);
        console.log('  Tabla del:', colors.blue(base)  );
        console.log('================'.rainbow); 

        let salida = '';

        for(let i = 1; i <= `${argv.h}`; i++){
            salida += (`${base} x ${i} = ${base * i}\n`).rainbow;
        }
        
        if(listar != true){
           
            console.log(salida.inverse);
           
        }
        
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        
        return(`tabla-${base}.txt`.trap);


    } catch (error) {
        throw error
    }

}

module.exports = {
    crearArchivo
}