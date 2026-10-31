// optional chaining: este concepto sirve para manejo de errores cuando queremos leer un objeto de un backend y no existe


const person ={
    name :'ryan',
    address : {
        city:'london'
    }



}



// por ejemplo consultamos a una api que nos devuelve infomración sobre personas ( el nombre, la edad y la direccion, sin embargo, no siempre trae la edad de una persona)
//console.log(person.age.number) En este ejemplo recibimos un error

// podemos hacer un if para evitarlo  (si existe age me trae el valor numero de lo contrario no me trae nada y no falla)

if (person.age ){
   console.log(person.age.number)
}

// sin embargo en JS tenemos una opción mucho más comoda optional chaining que me trae undefined si no existe 
console.log(person.age?.number)