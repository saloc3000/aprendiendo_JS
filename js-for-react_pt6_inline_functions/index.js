//  Las inline functions sirve para crear funciones arrow sin tener que poner explicitamente un return
// // por ejemplo: 

const add_V_arrow = (x, y) => {

return x +y

}

console.log(add_V_arrow(2,3))
// aqui no uso llaves ni el return porque  ya exist el return explicito
const add_in_arrow = (x, y) =>  x +y
console.log(add_in_arrow(2,3))

// aqui par de ejemplos


const showText = () => "Que mas"
const showNumber = () => 50;
const showarray = () => [1,2,3]
const showBoolen = () => false;
const showObject = () =>({'name':'Molly'})  // Debo usar lso paratensesis para usar el objecto

console.log(showText())
console.log(showNumber())
console.log(showBoolen())
console.log(showarray())
console.log(showObject())

