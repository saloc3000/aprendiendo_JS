/// Proyecto: Crear visualizador de datos abiertos en navegador:



// 1 ) Precipitaciones:  link: https://dev.socrata.com/foundry/www.datos.gov.co/s54a-sgyg



const dataset_list={

   
     Precipitación:'s54a-sgyg'
}



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



const query="SELECT *  WHERE fechaobservacion >= '2026-11-13' limit 100"


const datos= await loadData(query,"Precipitación")

console.log(datos)