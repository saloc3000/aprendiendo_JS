
// Objetos como parametros
// Creamos el objeto usuario 
const user = {
    name:'joe',
    age:30

    }
// aquí le añadimos a la función printifo el bojeto user como parametro y además esa función genera un html
function printInfo(user){
    return '<h1> hola ' + user.name + '</h1>'


}

printInfo(user)
// Esto solo imprime en consola el string
console.log(printInfo(user))


// Ahora para llevalro al htm necesitamos esto
// Le añadimos inner HTML que lo que hace es insertarle al body un string con formto HTML
document.body.innerHTML = printInfo(user)
function printInfo_v2(user){
    return '<h1> hola ' + user.name + '</h1> <h3> Tu edad: ' + user['age'] + '</h3>'  //lo que buscamos aquí es acceder a  la propiedad del objeto por medio de corcehetes 


}
document.body.innerHTML = printInfo_v2(user)

// Bloque Destructuring Objects:
// la idea central de Destructurar un objeto es poder usar solo las partes de objeto que nos interesan y usarlas como variables locales


// Una manera es usar llaves  (keys) para acceder a los atributos del objeto. En este caso le decimos a la función que le vamos a pasar un objeto y que use las propiedades del objeto para asignar las variables locales con el mismo nombre de las keys.
function printInfo_v3({name, age}){// Otra manera es usar las llaves  para declarar que el objeto que le voy a pasar tiene esas propiedadi{propiedad 1, proiedad 2, ... propiedad_n} 
    return '<h1> hola ' + name + '</h1> <h3> Tu edad es de: ' + age + '</h3>'  //lo que buscamos aquí es acceder al  atributo del objeto sin necesidad de usar el nombre de objeto todo el tiempo (object.propiedad 1, object.proeidad_2, etc)


}
document.body.innerHTML = printInfo_v3(user)

// Otra manera es declarar las variables locales o constantes en el  cuerpo del  codigo de la función de manera más explicita. La ventaja es que nos quedamos con el objeto por si necesitamos una propiedad adicional o usar el objeto para otra funcion. 
// La elección para esta función/logica en particular es solo de estilo (porque solo usamos dos propiedades)
function printInfo_v4(user){// Se le pasa el objeto user
    const {age, name} = user  // declaramos de forma explicita las propiedades que vamos a usar.
    console.log(age) 
    console.log(name) 
    return '<h1> hola ' + name + '</h1> <h3> Tu edad es de: ' + age + '</h3>'  


}
document.body.innerHTML = printInfo_v4(user)