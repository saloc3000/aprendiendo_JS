// SECCION RETURN 

// return 200 : esto hace que la ejecucion termine inmediatemente.
const button = document.createElement ("button")

button.innerText="Click"
document.body.append(button)


const isAutorized = false; // cambiar a true o false para ver el efecto



button.addEventListener("click", () =>{
    if (isAutorized ==true) { //tampoco es necesario poner ==true, solo con if isAutorized es suficiente

    return alert("Esta autorizado");
    }
    // no es necesario poner el else explicitamente
    // else {
    // alert("No esta autorizado");
    // }

    alert("No esta autorizado") // no es necesario poner el else explicitamente


}


)

const input=document.createElement('input')
document.body.append(input)
function añadirbienvenida()  {
    if(edad <18) {



        

        return 20
    }

    const div=document.createElement("div")
    div.innerText= "Bienvenido usuario de edad:" +edad
    console.log("Bienvenido usuario de edad:" +edad)
    document.body.append(div)



}
let edad= null;
input.addEventListener("change", ()=>{
    if (input.value <18){
    return alert("No Se permiten menores");}
    
    const valor=input.value
    edad=valor
    
    
    
    return añadirbienvenida(edad)   

}

)





