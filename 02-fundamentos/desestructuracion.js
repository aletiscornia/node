
const deadpool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneracion',
    getNombre(){
        return `${ this.nombre } ${ this.apellido } ${ this.poder}`
    }
}

//const nombre = deadepool.nombre;
//const apellido = deadpool.apellido;
//const poder = deadpool.poder;

function imprimeHeroe({ nombre, apellido, poder, edad = 0 }){
    console.log(nombre, apellido, poder, edad);
}

//imprimeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];

const[h1, h2, h3] = heroes;
console.log(h1, h2, h3);