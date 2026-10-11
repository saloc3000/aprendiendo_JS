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