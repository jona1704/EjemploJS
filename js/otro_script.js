window.onload = function(){
    let contenedor = document.getElementById('contenedor_carga');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
    cargar();
}

function onImg(){
    this.setAttribute("src","img/feliz.png");
}

function outImg(){
    this.setAttribute("src","img/triste.png");
}

function getOption(){
    document.getElementById("lbl_text").innerHTML = "El valor seleccionado es: <b style='color: blue;'>" + forma.item_select[forma.item_select.selectedIndex].text + "</b>";
}

/*
    Formulas de Conversion de Fahrenheit a Otras Medidas

    C = (F-32)/(9/5)
    K = ((5/9) * (F-32)) + 273.15

    Formulas de Conversion de Celsius a Otras Medidas

    F = (C * (9/5)) + 32
    K = C + 272.15

    Formulas de Conversion de Kelvin  a Otras Medidas

    F = ((K-273.15) * (9/5)) + 32;
    C = K - 273.15
*/

function convertir(escala){
    let x, aux;
    if(escala == "C"){
        aux = document.getElementById("celsius").value;
        x = (aux * (9/5)) + 32;
        document.getElementById("fahrenheit").value = Math.round(x);
        document.getElementById("kelvin").value = Math.round(x + 273.15);
    } else if(escala == "F"){
        aux = document.getElementById("fahrenheit").value;
        x = (aux-32)/(9/5)
        document.getElementById("celsius").value = Math.round(x);
        document.getElementById("kelvin").value = Math.round(((5/9) * (aux-32)) + 273.15);
    } else{
        aux = document.getElementById("kelvin").value;
        x = aux - 273.15;
        document.getElementById("celsius").value = Math.round(x);
        document.getElementById("fahrenheit").value = Math.round(((x - 273.15) * (9/5)) + 32);
    }
}

function cargar(){
    fecha_sistema();
    /*mi_fecha();*/
}

// Obteniendo la fecha del sistema Operativo
function fecha_sistema(){
    let fecha = new Date();
    let dias_semanas = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    let dia_semana = fecha.getDay(); // 0-6
    let dia = fecha.getDate(); // 1-31
    let mes = fecha.getMonth() + 1; // 0-11 (Por defecto hay que sumarle 1)
    let anio = fecha.getFullYear();
    // Tiempo
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let strFecha = dias_semanas[dia_semana] + " " + checkValue(dia) + "/" + checkValue(mes) + "/" + anio;
    let strHora = checkValue(hora) + ":" + checkValue(minutos) + ":" + checkValue(segundos);
    document.getElementById("fecha").innerHTML = strFecha;
    document.getElementById("hora").innerHTML = strHora;
}

function checkValue(i){
    if(i<10){i = "0"+i};
    return i;
}