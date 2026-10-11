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