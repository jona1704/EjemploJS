let contador = 0;

function agregarDiv(){
    // Crear un contenedor div
    let div = document.createElement("div");
    div.setAttribute("class", "miContenedor");
    div.setAttribute("id", "div_"+contador);
    // Creamos Input
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "texto");
    input.setAttribute("id", "texto"+contador);
    input.setAttribute("required", "");
    //  Creamos boton para remover
    let btn = document.createElement("button");
    btn.textContent = "Remover";
    btn.setAttribute("name", "remover");
    btn.setAttribute("id", "remover_"+contador);
    btn.setAttribute("onclick", "borrar(this)");
    // Agregar input a Div
    div.appendChild(input);
    div.appendChild(btn);
    // Agregar div al contenedor
    document.getElementById("contenedor").appendChild(div);
    contador++;
}

function borrar(which){
    let getContenedor = document.getElementById("contenedor");
    //var id = which.getAttribute("id");
    // Accedemos al id del padre
    let id_padre = which.parentNode.id;
    let elemento = document.getElementById(id_padre);
    getContenedor.removeChild(elemento);
    //lert(id);
}

// item: retorna el valor
// index: retorna el indice
function miFuncion(item, index){
    document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
}

document.formulario.addEventListener("submit", function(event){
    //alert("Enviados");
    let arreglo = [];
    document.getElementById("demo").innerHTML = "";
    let contenedores = document.getElementsByClassName("miContenedor");
    //alert(contenedores.length);
    for(let i=0; i<contenedores.length; i++){
        // Acceder al primer hijo del contenedor
        let input = document.getElementById(contenedores[i].id).firstChild;
        let valor_input = document.getElementById(input.id).value;
        arreglo.push(valor_input);
    }

    //alert(arreglo);
    // Recorrer el arreglo usando un forEach
    arreglo.forEach(miFuncion); // Solo pasamos el nombre de la funcion
    event.preventDefault(); // Evitar refrescar despues de submit
});

function comunicado(){
    alert("Comunicado de la FES Acatlán");
}

function colorear(cadena){
    switch(cadena){
        case "verde":
            document.body.style.backgroundColor = "green";
            document.body.style.color = "white";
            document.body.style.fontSize = "22px";
            document.body.style.fontWeight = "normal";
            break;
        case "azul":
            document.body.style.backgroundColor = "blue";
            document.body.style.color = "white";
            document.body.style.fontSize = "20px";
            document.body.style.fontWeight = "bolder";
            break;
        case "negro":
            document.body.style.backgroundColor = "black";
            document.body.style.color = "yellow";
            document.body.style.fontSize = "24px";
            document.body.style.fontWeight = "bold";
            break;
    }
}



