/// Proyecto: Crear visualizador de datos abiertos en navegador:





// 0) queries:

//      === Consultas === 



const query_dep="SELECT distinct dpto" //TODO: leer de carpeta'queries'

//      ===  datasets === 


const dataset_list={

   
     Precipitación:'s54a-sgyg',//Precipitaciones:  link: https://dev.socrata.com/foundry/www.datos.gov.co/s54a-sgyg

     Departamento: '82di-kkh9'/// Codigo Departamentos y Municipios : https://dev.socrata.com/foundry/www.datos.gov.co/82di-kkh9

}

// 1 )  Bloque: obtener data



// === Funcion para consumir datos de la api de socrata ===

async function loadData(QUERY="select * limit 1", dataset_name="Precipitación"){

const id_dataset=dataset_list[dataset_name]   //busca el nombre del id

const res = await fetch(`https://www.datos.gov.co/api/v3/views/${id_dataset}/query.json`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-App-Token': 'BHf4MfRsbHQPIesvanSRCDqJN'
  },
  body: JSON.stringify({
    query: QUERY
  })
})


const data= await res.json()


return data
}



//  === selectores ===

const DEP = await loadData(query_dep,"Departamento")// cargo data de código departeamentos

/// Construir map que sirve para construir un los elementos del selector (input), se deja bogotá activo por defecto
const deps = DEP.map(function (departamento) {  
  const name_dep = Object.values(departamento)[0];
  if (name_dep === 'BOGOTÁ, D.C.') {
    return `<label><input type="checkbox" name="depto" value="${name_dep}" checked> ${name_dep}</label>`;
  }
  return `<label><input type="checkbox" name="depto" value="${name_dep}"> ${name_dep}</label>`;
}).join('');


const div= document.createElement("div") //crear div
div.id='deptos' //añadir identificador para darle estilo

div.innerHTML=`<H1>Seleccione los Departamentos</H1><H2>${deps}</H2>` // se insertan los departamentos (por defecto esta activo bogotá)
document.body.append(div) // se añade al body

const contenedor_tabla=document.createElement("div")
contenedor_tabla.id="resumen"

document.body.append(contenedor_tabla)




async function getDataPrecipitacion (){
  
  const data_resumen=[]
  const deps = [...document.querySelectorAll('input[name="depto"]:checked')].map( i => i.value) 
  const deps_seleccionados = [...document.querySelectorAll('input[name="depto"]:checked')].map( i => `"${i.value}"`) // se crea un array con la lista de departamentos seleccionados
  
  const query=`SELECT *  WHERE fechaobservacion  >= '2026-11-13'and upper(departamento) in (${deps_seleccionados}) ` //se construye la query con los deptos seleccioandos
  
  
  const data= await loadData(query,"Precipitación")
  
  for (const dep of deps) {
    // console.log(dep)
    const data_dep=data.filter(d =>(d.departamento.toUpperCase())=== dep)
    const resumen={ 'nombre_departamento':dep,  'valor':data_dep.reduce((total,valorMunicipio)=> total+Number(valorMunicipio.valorobservado),0)} //TODO hacer como objeto(claramento esto es por practicar conceptos posiblemente la mejor manera es hacer la logica dentro de SQL o alguna libreria)
    data_resumen.push(resumen)
    // console.log(data_dep)
    console.log(`${dep} Total de precipitacion es:${resumen}`)
    }
  
  
  // console.log(data_resumen)
  // console.log(Object.values(data_resumen)[0])

  const rows=data_resumen.map(row => `
    
      <tr>
      <th scope ="row">${row.nombre_departamento}</th>
      <td>${row.valor}</td>
      `
    ).join("")
    

  



  
  contenedor_tabla.innerHTML=`
    <h2>Tabla Resumen Por Departamento</h2>
  <table>
    <caption>DEPARTAMENTOS</caption>
    <thead>
      <tr>
        <th scope="col">Nombre Departamento</th>
        <th scope="col">Total de Precipitación</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>
  
  ` 
  


  
  
  


  return {data}} //carga la data 

const data = await getDataPrecipitacion()

// Se crea un eventListener para que implemenete los cambios en los departamentos seleccionados
addEventListener('change', async () => {
    const   {data}= await getDataPrecipitacion()
        


})

















//
