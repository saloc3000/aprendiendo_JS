// MEtodos arrays (Map, filter, foreach,concat)

const names = ["Ernesto","Juancho", "Molly"]

for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(element)
    
} // este es un bucle for de toda la vida. Inicia por el primer elemento del array (i=0), accede al valor correspondiente en el array lo guarda como constante y lo imprime, luego suma 1 a i y termina cuando i++ sea mayor a la longitud del array


/// Para React se usan metodos entonces es conveniente irse adecuando a los metodos usados por react

//El método de JS que hace el recorrido elemento por elemento es forEach 

names.forEach(function(name){ // toma el array names, y crea una función que toma como parametro cada elemento del array uno a uno y le aplica la funcion
        console.log(name)}
)

const numbers =[2,3,4,5,10]

numbers.forEach(function(number){

    console.log(number/2)
})

/// Otro método bastante usado es map que toma un array y devuelve otro nuevo array


newNames=names.map(function(name){ // toma el array names, y crea una función que toma como parametro cada elemento del array uno a uno y le aplica la funcion
      return `${name} nuevo`}
)

console.log(newNames) // Esto imprime el array

numbers_division=numbers.map(function(number){

   return number/2
})
console.log(numbers_division) 


// El método find recorre elemento por elemento hasta encontrar el primer elemento que cumpla una condición y retorna ese valor o undefined si no lo encuentra


name_found=names.find(function(name){ // toma el array names,y devuelve el primer valor encontrado que cumple la condicion
      if (name.startsWith("J") || name.startsWith("M")){

        return name
      }
    
   } 
)

console.log(name_found)

number_found=numbers_division.find(function(number){ // Toma el array numbers, reccorre elemento por elemento hasta encontrar el primer elemento que es un entero
      if (Number.isInteger(number)){

        return number
      }
    
   } 
)

console.log(number_found)

// El método filter recorre elemento por elemento y guarda en un nuevo array todos los elementos que cumplen la condicion 

names_found=names.filter(function(name){ // toma el array names,y devuelve un array con todos los nombres que cumplen la condicion
      if (name.startsWith("J") || name.startsWith("M")){

        return name
      }
    
   } 
)

console.log(names_found)



numbers_found=numbers_division.filter(function(number){ //retorna todos los elementos que son enteros
      if (Number.isInteger(number)){

        return number
      }
    
   } 
)

console.log(numbers_found)


 // concat une arrays y devuelve uno nuevo sin modificar el original (como lista1 + lista2 en Python)


const names_append=names.concat(names_found)
console.log(names_append)

const numbers_append=numbers.concat(numbers_found)
console.log(numbers_append)


// REDUCE: recorre el array aplicando una función a cada elemento. Lo que retorna cada vuelta
// se pasa como acumulador a la siguiente. Al final devuelve un solo valor (el último acumulador).
// arr.reduce((acc, actual) => ..., valorInicial)

// un contador de python es asi:
// contador = 0           
// for i in [1, 2, 3, 4]:
//     contador += i
// CONTADOR EN JS:
const contador=numbers_append.reduce((acumulado,actual) =>acumulado +actual, 0 )
console.log(contador)

// También se puede buscar encontrar el maximo valor dentro de todo el array. UN analogo en python es max(list)

// el -infinity es para que el primer valor encontrado en el array siempre sea el maximo en laprimera vuelta (por ejemplo si tenemos solo numeros negativos y poonemos 0 pues va a quedar 0 como max)
console.log(numbers_append)
const max_number= numbers_append.reduce((acumulado,actual) =>Math.max(acumulado, actual), -Infinity )
console.log(max_number)


// Otro ejemplo  con string. Contar el numero de letras de cada elemento

const count_letters= names_append.reduce((acumulado,nombre) =>acumulado+nombre.length, 0 )

console.log(count_letters)

// Otro ejemplo  con string. Contar el numero total  de letras que hay en los nombres que tienen "M"

const totalLetrasM= names_append.reduce((acumulado,nombre) =>nombre.toUpperCase().includes("M") ? nombre.length+acumulado:acumulado, 0 )

console.log(totalLetrasM)



// Ejemplo más complejo usando todos los métodos

const div=document.createElement('div') //crear div 
div.innerHTML="<H1> THE GAME</H1>" // Crear titulo del juego

document.body.append(div) // hacer append de titulo del juego

const div_parametros  =document.createElement('div') //crear div para parametros
div_parametros.innerHTML="<H2> Seleccione el numero de jugadores</H2> <input type ='range' min='1' max='5'></input> <p> Número Jugadores: <output id ='num_jugadores'></output></p>" // crar slider para numero de jugadores

document.body.append(div_parametros) // se añade al body

const num_jugadores= document.querySelector("#num_jugadores"); //selecciona el elemento con el id (el output de numero de jugadores)
const input=document.querySelector("input") //selecciona el primer elemento de input

num_jugadores.textContent=input.value //agrega al texto del output el valor del input

n=Number(input.value) // vuelve el valor del input en numero

jugadores=Array.from({length:n},(_,i)=>`
<tr>
<th scope='row' >Jugador_${i+1} </th>
</tr>
`)  //Crea un array de html usando la longitud seleccionada en input


const tabla=document.createElement('table') //crea una tabla

hmtl_tabla=`
<caption>
    Jugadores
</caption>
<thead>
    <tr>
      <th scope="col">Nombre Jugador</th>
      <th scope="col">Vidas jugador</th>
      
      
    </tr>
  </thead>
  <tbody>
  ${jugadores}
     </tbody>
   </table>


`
//crea una tabla que usa el array creado para poner filas con el nombre de cada jugador
tabla.innerHTML=hmtl_tabla //le añade hmtl al body
document.body.append(tabla) //pone el elemento en el body



input.addEventListener("input", (event) => //crea un listetener que toma como parametro el evento que disparo el listener (es decir el mismo input)
{ num_jugadores.textContent=event.target.value //toma el valor del evento que disparo el event (el input)
   n=Number(event.target.value) //actualiza el numero de jugadores y actualiza toda la tabla
   
   
   jugadores=Array.from({length:n},(_,i)=>`
<tr>
<th scope='row' >Jugador_${i+1} </th>
</tr>
`)  

hmtl_tabla=`
<caption>
    Jugadores
</caption>
<thead>
    <tr>
      <th scope="col">Nombre Jugador</th>
      
    </tr>
  </thead>
  <tbody>
  ${jugadores}
     </tbody>
   </table>


`
tabla.innerHTML=hmtl_tabla
document.body.append(tabla)
   
 

}
)


