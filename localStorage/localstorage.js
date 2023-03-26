const { text } = require("stream/consumers")

let botonAlmacenar = document.getElementById("btnAlmacenar")
botonAlmacenar.addEventListener("click", ()=>{
    sessionStorage.setItem('nombre', 'Maidy')
    sessionStorage.setItem('apellido', 'Cabrera')

    localStorage.setItem('nombre', 'Maidy')
    localStorage.setItem('apellido', 'Cabrera')
})

let botonBorrar = document.getElementById("btnBorrar")
botonBorrar.addEventListener('click', function(){
    sessionStorage.clear()
    localStorage.clear()
})

//Recorrer el sessionStorage y el localStorage mostrando las variables como 
//una fila en la tabla del DOM


function contruirFilas(){

    // crear un arregl con las fuentes de datos

    let fuentes =[localStorage, sessionStorage]

    for(let k=0; k<fuentes.length; k++){

        let miFuente= fuentes[k];

        for(let i=0; i<miFuente.length; i++){
            let cuerpoTabla = document.getElementById("cuerpoTabla")
            let fila= document.createElement("tr")
        
            let celda = document.createElement("td")
            //Crear un nodo de texto
            let texto=document.createTextNode(miFuente.key(i));
            celda.appendChild(texto)
            fila.appendChild(celda)
        
            celda= document.createElement("td");
            let valor = miFuente.getItem(miFuente.key(i))
            texto= document.createTextNode(valor)
            celda.appendChild(texto)
            fila.appendChild(celda)
        
            fila.appendChild(celda)
            cuerpoTabla.appendChild(fila)
        }
    }



    for(let i=0; i<window.sessionStorage.length; i++){
    let cuerpoTabla = document.getElementById("cuerpoTabla")
    let fila= document.createElement("tr")

    let celda = document.createElement("td")
    //Crear un nodo de texto
    let texto=document.createTextNode(sessionStorage.key(i));
    celda.appendChild(texto)
    fila.appendChild(celda)

    celda= document.createElement("td");
    let valor = sessionStorage.getItem(sessionStorage.key(i))
    texto= document.createTextNode(valor)
    celda.appendChild(texto)
    fila.appendChild(celda)

    fila.appendChild(celda)
    cuerpoTabla.appendChild(fila)
}
}

contruirFilas()