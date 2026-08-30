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


// Las funciones anonimas  son más una elección de estilo ( en ocasiones usar una función anonima para una accion en especifica es mucho más legible para entender el funcionamiento del codigo)
//  Un ejemplo donde puede llegar a ser útil es en los eventos.

const button = document.createElement ('button') // Crear un boton
button.innerText='Dale click' // insertar texto dentro del boton

button.addEventListener('click',  function  () { // esta funcion genera una alerta de autodestrucción y añado un div con el texto cuando se le hace click al boton
    alert('autodestruccion iniciada')   // Crea la alerta
    const objeto_creado= document.createElement("div") //crea el div
    objeto_creado.innerText = 'AutoDestrucción Iniciada'   //inserta el texto de autodestruccion
    document.body.append(objeto_creado) // añade el div en el body 
    


}) // añadir evento  click al boton


document.body.append(button)

// Como se comento con anterioridad la elección de las funciones anonimas depende del caso de uso.
// en el caso anterior solo se uso como parametro para crear un texto y una alerta y no se vovlera a usar en ese caso no es necesario crear una referencia (nombrarla). Simplemenete se usa y nunca más se vuelve a llamar.
// En el caso en el que si se necesitara llamarse en otra parte del codigo entonces si hay que nombrarla (y no usar una funcion anonima)

