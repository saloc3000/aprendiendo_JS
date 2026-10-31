// sincronia


let data=fetch('https://jsonplaceholder.typicode.com/posts') // es una biblioteca del navegador para obtener datos de una peticion
console.log(data)  // el console log va atraer un "Promise" porque el navegador esta cargando lso datos de manera asincronica (el usuario o navegador puede seguir haciendo funciones pueden seguir funcionand)

let data2= fetch('https://jsonplaceholder.typicode.com/posts')
        .then( //este then  (entonces) da la instrución que una vez acabe el fecth se hace la logica siguiente
            function( response){
                
                console.log('Datos recibidos')
                const data_json=response.json() //usamos esta funcion para convertir la respuesta a un json
                .then(function(data_json){ // usamos un nuevo ten para esperar a que terminen de cargar los datos y poder mostrarlos en consola
                    console.log(data_json)
                })
                
                //console.log(data_json)  los datos aún se estan convirtiendo a JSON debemos esperar a que termine para poder mostrarlos
                

            }
        )

console.log("Todo el codigo se ejecuta al tiempo (asincrono), lo que acabe primero es lo primero que se muestra")