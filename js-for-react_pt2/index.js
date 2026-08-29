// una idea principal e importante de JS es poder manejar el navegador y en concreto el DOM (Document Object Model)
// el script de JS puede modificiar el html


// createElement('') permitre crear elementos HTML

const title= document.createElement('h1')


document.body.append(title) // añado al body del HTML el objeto qeu cree (no se ve nada porque el h1 no tiene texto pero el elemento esta ahí)
title.innerText ="Hola World desde JS" // aqui ya le estoy poniendo texto pdentro del h1

const button = document.createElement('button') //crea un boton
button.innerText='presionar'
// podemos añadir escuchar/ event handlers  para añadir acciones al boton/elemento
function hello() {
    console.log('ola')


}
button.addEventListener('click',hello) // el primer parametro recibe la accion/trigger que hace el usuario y el segundo la función o lo que programemos que esperamos que haga 
button.addEventListener('click',function (){
    console.log('molly')

}) //Funciona de ambas amneras 


document.body.append(button)
const button2 = document.createElement('button') //crea un boton
button2.innerText='Boton 2'
button2.addEventListener('click',function (){
    const subtittle = document.createElement('h2')

    subtittle.innerText='hola'
    alert('Esto Crea un nuevo elemento')
    document.body.append(subtittle)

})




document.body.append(button2)


const nombre =document.createElement('input')

nombre.placeholder='ponga su nombre'

nombre.addEventListener('input',function (){
    const subtittle = document.createElement('h2')
    console.log(nombre.value)
    subtittle.innerText= nombre.value
    alert('Esto Crea un nuevo elemento')
    document.body.append(subtittle)

})


document.body.append(nombre)






console.log(title)