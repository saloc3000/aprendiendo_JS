// === Section String Literals ===
// Esta es la seccion de un fstring de python 
// este codigo toma un nombre, crea un elemento div y crea unos checkbox para cambiarle el color al div

const input=document.createElement('input')




function create_div (nombre){
const div=document.createElement('div')
div.innerHTML=`<h1>${nombre} </h1> <h2> Presione un check para cambiar de color</h2>` // Esta es la sintaxix del string literals
document.body.append(div)

check1=document.createElement("input")
check2=document.createElement("input")
check3=document.createElement("input")
check1.type="checkbox"
check2.type="checkbox"
check3.type="checkbox"

document.body.append(check1)
document.body.append(check2)
document.body.append(check3)
//div.style permite hacer css (se puede escribir como string o usando variables como string literal (o una fstring de python))
check1.addEventListener("change", () =>{

    const color="blue"
    div.style=`color:${check1.checked ? color : undefined}` // el '?' actua como un if  ==true y luego van lso dos valores "color") (valor 1) o "undefined" (valor2)


})
check2.addEventListener("change", () =>{

    const color="#07def1ff"
    div.style=`color:${check2.checked ? color : undefined}` // el '?' actua como un if  ==true y luego van lso dos valores "color") (valor 1) o "undefined" (valor2)


})

check3.addEventListener("change", () =>{

    const color="#f1ca07ff"
    div.style=`color:${check3.checked ? color : undefined}` // el '?' actua como un if  ==true y luego van lso dos valores "color") (valor 1) o "undefined" (valor2)


})






} 
input.placeholder="Hola Escriba su nombre"

input.addEventListener('change', ()=> {
const nombre = input.value
create_div(nombre)


}


)



document.body.append(input)
//document.body.after(check1)





