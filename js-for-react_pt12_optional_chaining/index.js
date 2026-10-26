// optional chaining: este concepto sirve para manejo de errores cuando queremos leer un objeto de un backend y no existe


const person ={
    name :'ryan',
    address : {
        city:'london'
    }



}



// por ejemplo consultamos a una api que nos devuelve infomración sobre personas ( el nombre, la edad y la direccion, sin embargo, no siempre trae la edad de una persona)
console.log(person.age.number)
// En este ejemplo recibimos un error

