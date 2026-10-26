// seccion de ecmascript modules

// Este concepto permite dividir una aplicacion en varios modulos (por ejemplo dividir una app en varios archivos )


export function add (a,b) {

    return a+b
}



export function multiply (a,b) {

    return a*b
}



export const title= "TITULO DE EJEMPLO" //también me permite exportar constantes

export const user = {name:'molly',
    last_name:'alfonsina'
} //puedo expotar objetos o arrays


export default title  // Esta declaración hace que exporte por default title (si en main/ index no se deja de manera explicita que importar)