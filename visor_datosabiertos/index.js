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

const DEP = await loadData(query_dep,"Departamento")//

const deps= DEP.map(function(departamento){
    console.log(departamento)
    return Object.values(departamento)[0]

})
console.log(deps)
//=== selectores ===











const query="SELECT *  WHERE fechaobservacion  >= '2026-11-13'and upper(departamento) in ('ANTIOQUIA') limit 100"


const data= await loadData(query,"Precipitación")









//
