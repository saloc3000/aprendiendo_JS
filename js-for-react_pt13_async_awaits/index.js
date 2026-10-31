// sincronia



// === Crear elemento ul===
const titulo=document.createElement("H1")
titulo.innerText="Primer lista"
titulo.id="primer-titulo"

const ul= document.createElement("ul")
document.body.append(ul)
document.body.append(titulo)
const segundo_titulo=  document.createElement("H1")


segundo_titulo.innerText="segunda lista"
segundo_titulo.id="segundo-titulo"
document.body.append(segundo_titulo)


const lista2= document.createElement("ul")
document.body.append(lista2)

let data=fetch('https://jsonplaceholder.typicode.com/posts') // es una biblioteca del navegador para obtener datos de una peticion
console.log(data)  // el console log va atraer un "Promise" porque el navegador esta cargando lso datos de manera asincronica (el usuario o navegador puede seguir haciendo funciones pueden seguir funcionand)

let data2= fetch('https://jsonplaceholder.typicode.com/posts')
        .then( //este then  (entonces) da la instrución que una vez acabe el fecth se hace la logica siguiente
            function( response){
                
                console.log('Datos recibidos')
                const data_json=response.json() //usamos esta funcion para convertir la respuesta a un json
                .then(function(data_json){ // usamos un nuevo ten para esperar a que terminen de cargar los datos y poder mostrarlos en consola
                    console.log('json construido')
                    data_json.map(function(row){ // hago un map para  rellenar la lista
                       
                        const row_il=document.createElement("li") // creamos por cada objeto del array una elemento 
                        row_il.innerText=row.title // usamos solo el atributo titulo para llenar la lista
                        ul.append(row_il) // rellenamos la lista para cada elmeneto
                        


                    })
                    const primer_titulo=document.querySelector("#primer-titulo") //Toma el primer h1
                    titulo.after(ul) //  agregamos la nueva lista (rellenada) al cuerpo del html 

                    
                })
                
                //console.log(data_json)  los datos aún se estan convirtiendo a JSON debemos esperar a que termine para poder mostrarlos
                

            }
        )


// === Usar async/await ==
async function loadData(){ //para usar await debemos usar una funcion  que inicie con "async"

const response = await fetch('https://jsonplaceholder.typicode.com/comments') // uso el await para que guarde la respuesta solo cuando el fecth finaliza
const data= await response.json() // uso el await para guardar el array una vez el response se conviertio a json
data.map(function(row){ //  para cada elemento del json lo agrega en la lista 2
    
    const li=document.createElement('li') //crea un item
    li.innerText=row.email // usa atributo "correo"
    lista2.append(li) //rellena la lista 2
    

}


)
const segundo_titulo=document.querySelector("#segundo-titulo") //Toma el segundo titulo
segundo_titulo.after(lista2) //hace append al segundo titulo
}


loadData()

console.log("Todo el codigo se ejecuta al tiempo (asincrono), lo que acabe primero es lo primero que se muestra")