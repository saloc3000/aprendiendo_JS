// Seccion Spread operator

// partimos de ejemplo del ejemplo de array concatenar

const names =['ryan','joe','maria']
const newnames =['ryan','joe','maria']


console.log(names)
console.log(newnames)
console.log(names.concat(newnames))


// usando el spear operator (... $objeto o arrays$)

console.log([...names, ...newnames]) // lo que hace es usar todos los elementos de names y concatenarlo con el array de newnames


// también sirve para objetos:


const user = {

   name:"molly",
   last_name:"alfonsina"

}


const address ={

   Street: "Main Street 123",
   city :   "Bogotá"
}

const userInfo = {

 ... user, // los ... significa usa todos los atributos de user

 ... address // y combinalos con todos lso atributos de address

} // y esto crea un nuevo objeto con los atributos de los dos objetos


console.log(user)
console.log(address)
console.log(userInfo)
