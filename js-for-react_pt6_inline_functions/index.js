//  Las inline functions sirve para crear funciones arrow sin tener que poner explicitamente un return
// // por ejemplo: 

const add_V_arrow = (x, y) => {

return x +y

}

console.log(add_V_arrow(2,3))
// aqui no uso llaves ni el return porque  ya exist el return explicito
const add_in_arrow = (x, y) =>  x +y
console.log(add_in_arrow(2,3))

