// sincronia


let data=fetch('https://jsonplaceholder.typicode.com/posts') // es una biblioteca del navegador para obtener datos de una peticion
console.log(data)  // el console log va atraer un "Promise" porque el navegador esta cargando lso datos de manera asincronica (el usuario o navegador puede seguir haciendo funciones pueden seguir funcionand)

let data2= fetch('https://jsonplaceholder.typicode.com/posts')
        .then( //este then  (entonces) da la instrución que una vez acabe el fecth se hace la logica siguiente
            function( response){

                data_json=response.json() //usamos esta funcion para convertir la respuesta a un json
                console.log('Termino de cargar los datos son:')
                console.log(data_json)
                

            }
        )

console.log("Todo el codigo se ejecuta al tiempo (asincrono), lo que acabe primero es lo primero que se muestra")