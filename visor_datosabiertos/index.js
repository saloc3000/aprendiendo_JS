/// Proyecto: Crear visualizador de datos abiertos en navegador:



// 1 ) Precipitaciones:  link: https://dev.socrata.com/foundry/www.datos.gov.co/s54a-sgyg



const dataset_list={

   
     Precipitación:'s54a-sgyg'
}



async function loadData(query, dataset_name){

const id_dataset=dataset_list[dataset_name]  
console.log(id_dataset)

const res = await fetch('https://www.datos.gov.co/api/v3/views/s54a-sgyg/query.json', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-App-Token': 'BHf4MfRsbHQPIesvanSRCDqJN'
  },
  body: JSON.stringify({
    query: "SELECT *  WHERE fechaobservacion >= '2026-11-13' limit 1"
  })
});

const data=await res.json()


console.log(data)}

loadData()