//  La idea de las funciones anonimas es usar funciones sin necesidad de nombrarlas


// empecemos con el caso base (crear una funcion)

//  Creamos una función que de retorne un string de "iniciando"

function start () {
    return 'Iniciando  ...'

}

//  hacemos print en consola del resultado de la funcion
console.log(start()) 

// Una manera directa de hacerlo es pasarselo directamente el print

console.log(
    function start () {
    return 'Iniciando  ...'
} () 

)
// No es necesario darle el nombre a la funcion (podemos quitar el start) y de ahí viene lo de funcion anonima

console.log(
    function  () {
    return 'Iniciando  ...'
} () 

)
// Los tres ejemplos hacen lo mismo, sin embargo solo en el caso 1 la función queda declarada
// (en los casos 2 y 3 no queda ninguna referencia a la función, así que no se puede volver
// a llamar sin reescribir el código))