
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


function printInfo_v3({name, age}){// Otra manera es usar los corchetes  para declarar que el objeto que le voy a pasar tiene esas propiedad si o si{propiedad 1, proiedad 2, ... propiedad_n} 
    return '<h1> hola ' + name + '</h1> <h3> Tu edad es de: ' + age + '</h3>'  //lo que buscamos aquí es acceder al  atributo del objeto por medio de corcehetes 


}
document.body.innerHTML = printInfo_v3(user)


function printInfo_v4(user){// 
    const {age, name} = user  // esta también es otra manera de hacerlo (también podría usar variables "let") pero la idea es desempaqueto los atributos del objeto en constantes o varaibles y luego las uso 
    console.log(age) 
    console.log(name) 
    return '<h1> hola ' + name + '</h1> <h3> Tu edad es de...: ' + age + '</h3>'  //lo que buscamos aquí es acceder al  atributo del objeto por medio de corcehetes 


}
document.body.innerHTML = printInfo_v4(user)