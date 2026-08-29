

// Este es una funcion basico solo ejecuta un print
function print_hola_world() {
    console.log('Hello World!!!')


}


// Esta es una funcion con retorno, me devuelve un string
function print_hola_word_string() {
    return 'Hola World'


}


// Este es una funcion  que retorna otra funcion
function hola_world_fuction_return() {
    return function() {

            return 'hola'
         }


}



// Este es una funcion  que recibe un parametro
function hello (name){

    return 'Hola ' + name

} 


console.log(hello('ruben'))
console.log(hello('fico'))

// Este es una funcion  que recibe dos parametro
function add (x, y) {

    return x+y
}

console.log(add(3,2))
console.log(add(3,500))

// Funcion con aprametro por defecto
function add_parametro_defecto (x, y) {
    if (y === undefined) {// un undefined es NaN//
        y=0}
        return x+y
}
// Funcion parametrizada desde losparametros mas python style (dejar parametros fijos)
function add_parametro_defecto_v2 (x, y=0) {
   
        return x+y
}

// cuando paso sin parametros por defecto la suma  voy a recibir NaN porque el valor de Y quedara vacio y eso causa NaN
console.log(add(1))
// En este segundo caso ya puse un manejo de NaN por defecto (parametro defecto) y va a vovlerse 0 clareamente este es un comportamiento que yo deje explicito
console.log(add_parametro_defecto(1))
// En este segundo caso ya puse un manejo de NaN por defecto (parametro defecto) y va a vovlerse 0 clareamente este es un comportamiento que yo deje explicito
console.log(add_parametro_defecto_v2(1))



// === Objetos ===
// Los objetos en JS se definen en llaves y se almacenan en variables o constantes
// usualmente los valores estan representados en pares clave y valor (key/value)
//  Lo que se almacena dentro de un objeto usualmente recibe el nombre de propiedad
// Entonces todos los valores que se guardan dentro del objeto o describen el objeto se llaman propiedades
const user = {

    name :'Roco' ,// Propiedad nombre 
    lastname : 'gutierrez', // Propiedad apellido
    age: 30 , // Propiedad apellido
    addres: { // esta propiedad es otro objeto, por lo tanto un objeto puede tener más objetos (igual es un diccionario así que es normal)
            country: 'Colombia',
            city: 'Bogotá',
            street: 'Main Street 123'

    },
    friends: ['brenda','elena','oscar'], // Esta propiedad es una lista/array
    active : true ,//  Esta propiedad es un boolean así que básicamente una propiedad puede tener cualquier estructura de datos
    sendMail: function () { //  Esta propiedad es una función así que básicamente una propiedad puede tener cualquier estructura de datos o methods
        return 'Sending Email...'
    },
    // No es necesario   escribir ": function" para declararla
    sendhelloworld() {
        return 'Sending Email...'
    } 

}


// Para acceder a las propiedads de un objeto la sintaxis es {objeto}.{propiedad}  (claramente es jerarquico asi que pueedo acceder a objetos de objetos)
console.log(user)
console.log(user.sendMail())
console.log(user.name)
console.log(user.addres.street)
console.log(user.friends)
console.log(user.friends[0])

// Shorthand property names (cuando queremos construir objetos usando constanstes o variables)

const name ='laptop'
const price= 3000
const newProduct ={

    name : name,
    price : price
}

console.log(newProduct)

// Cuando se tiene una constante y una variable ya definida (y quiero que tenga el mismo nombre del key). Solo dejo el nombre de la constante/variable y hereda el nombre
const newProductV2 ={

    name,
    price
}
console.log(newProductV2)
