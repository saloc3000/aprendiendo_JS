// Las arrow functiones son una manera más simple de declarar una función sin tanta sintaxis


// Ejemplo  funcion estandar


function add (x,y) {

return x+y // suma dos parametros


}

console.log(add(2,3))


// versión en arrow

const add_V_arrow = (x, y) => {

return x +y

}

console.log(add_V_arrow(2,3))