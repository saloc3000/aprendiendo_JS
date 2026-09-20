//  Las inline functions sirven para crear funciones arrow sin tener que poner explicitamente un return
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
const showObject = () =>({'name':'Molly'})  // Debo usar loo pareteesis para usar el objecto

console.log(showText())
console.log(showNumber())
console.log(showBoolen())
console.log(showarray())
console.log(showObject()) // esto me trae el objeto
console.log(showObject().name) // esto me trae el atributo de objeto

//TODO: hacer ejemplos más complejos
h1= document.createElement("h1")
h1.innerText="Este es un Titulo Inicial "
document.body.append(h1)


// Como ejemplo Creare una función que siento que no es la mejor forma de usar un inlinefunction. Para mi las inline function tienen el proposito de ser usadas para funciones simples y legibles en una sola linea

// Esta funcion crea un div le inserta el parametro texto a ese div y porsteriormente inserta ese  div antes del elemento seleccionado
// Nota: la funcion Object.assign  lo que hace es: recibe un objeto (en este caso el div que esttoy creando) y le inserta (o remplaza) propiedades de ese objeto y me devuelve ese mismo objeto.
const append_div_con_texto= (text, element_before) => document.body.insertBefore(Object.assign(document.createElement("div"),{'innerText':text}), element_before)
//append_div_con_texto("pancho")

//  divv= document.createElement("div")
//  divv.innerText="cola"
//  console.log(divv)
append_div_con_texto("DIV INSERTADO :D",h1)


append_div_con_texto("DIV INSERTADO") // si se deja vacio toma el ultimo elemento y lo inserta antes

// UN ejemplo más correcto es crear una alerta al h1

h1.addEventListener('click' ,() => alert("autodestrucion iniciada")) // recibe el click y luego lo que hace despues (generar alerta de autodestruccion)


