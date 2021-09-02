const empleados =[
    {
        id:1,
        nombre: 'Ale'
    },
    {
        id: 2,
        nombre: 'Pepe'
    },
    {
        id:3,
        nombre: 'Juan'
    }
];

const salarios =[
    {
        id:1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
];

const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        
        const empleado = empleados.find( e => e.id === id)?.nombre;

        if(empleado){
            resolve (empleado)
        }else{
            reject(`No existe empleado con id ${id}`)
        }
    })
}

const getSalario = (id) => {

    return new Promise((resolve, reject) => {
        
        const salario = salarios.find( s => s.id === id)?.salario;

        if(salario){
            resolve (salario)
        }else{
            reject (`No existe salario para el id ${id}`)
        }
    })
}

const id = 10; 

// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err));

let nombre; 

getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then( salario => console.log('El empleado:', nombre, 'tiene un salario de:', salario))
    .catch(err => console.log(err));

//ESTA ES OTRA MANERA DE HACERLO
// getEmpleado(id)
//     .then(empleado => {
//         console.log(empleado);
//     })

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err));

