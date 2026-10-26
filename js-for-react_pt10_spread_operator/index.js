// Seccion Spread operator

// partimos de ejemplo del ejemplo de array concatenar

const names =['ryan','joe','maria']
const newnames =['ryan','joe','maria']


console.log(names)
console.log(newnames)
console.log(names.concat(newnames))


// usando el spear operator (... $objeto o arrays$)

console.log([...names, ...newnames]) // lo que hace es usar todos los elementos de names y concatenarlo con el array de newnames