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


// Las arrow functions son una manera más simple de declarar una función: menos sintaxis
// y, si el cuerpo es una sola expresión, return implícito → const add = (x, y) => x + y

// Su diferencia real (no solo estética) es que NO crean su propio 'this': lo heredan
// del scope donde se escribieron. Por eso son el estándar dentro de callbacks.
// TODO: revisar 'this' a fondo (cómo se resuelve en función normal vs arrow, y cuándo
// conviene cada una: método de objeto vs callback).


// Ejemplode lo anterior 


const add_V2_arrow = (x, y) =>  x +y //  como no necesito el return entonces  puedo omitir las llaves



console.log(add_V2_arrow(2,3))