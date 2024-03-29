
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var botonEncriptado = document.querySelector("#btn-encriptar");
var textoEncriptado = document.querySelector("#msg");
var botonDesencriptar = document.querySelector("#btn-desencriptar");

var botonCopiar = document.querySelector("#btn-copy");
var botonPegar = document.querySelector("#btn-paste");
var botonLimpiar = document.querySelector("#btn-clean");

//Aquí obtenemos los controles html para poder realizar la función copiar
var textArea = document.getElementById("msg");
var textoCopiado = document.getElementById("texto-copiado");
var copy = document.getElementById("btn-copy");

var spanTextoEncriptado = document.getElementById("texto-encriptar");
//Nos enfocamos en el area donde ingresamos el texto a encriptar
window.onload = function () {
    document.getElementById("mi-texto").focus();
}

//Función para copiar texto encriptado
botonCopiar.addEventListener("click", function(event){

    if (textoEncriptado.value != ""){
        textoEncriptado.select(); 
        // Copiando el texto seleccionado
        var successful = document.execCommand('copy');
        if(successful){
            textoCopiado.innerHTML = 'Copiado!';
            textArea.value ="";
            
        } 
    }else{
        textoCopiado.innerHTML = 'Nada para copiar!';
    }
    
});


botonEncriptado.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-texto");

    var texto = form.texto.value;
    //console.log(texto);

    if(texto.length > 0){
        encriptarTexto(texto);
        form.texto.value ="";
        spanTextoEncriptado.innerHTML= "";
    }else{
        spanTextoEncriptado.innerHTML = "Por favor ingresa texto a encriptar";

    }

});

//Función para validar el texto que se ingresa en nuestro input, utilizamos expresion regular mediante RegExp.
function validarTexto(entrada){
    var texto = entrada.value;
    var validar = new RegExp("[^a-z\ ]+");
    if (validar.test(texto)){
        texto = texto.substr(0,texto.length-1)
    } 
    entrada.value = texto;    
}

function encriptarTexto(texto){    
    //convertimos la cadena de entrada en un array
    let arr = Array.from(texto);
    //usamos la variable texto encriptado para obtener el resultado final de nuestro texto encriptado    
    var texto_encriptado = "";
    for(var i=0; i <arr.length; i++){
        if(arr[i] == "a"){
            arr[i]= "ai";
        }else 
        if(arr[i] == "e"){
            arr[i]= "enter";
        }else if(arr[i] == "i"){
            arr[i]= "imes";
        }else if(arr[i] == "o"){
            arr[i]= "ober";
        }else if(arr[i] == "u"){
            arr[i]= "ufat";
        }
        texto_encriptado = texto_encriptado + arr[i];
    }
    textoEncriptado.value = texto_encriptado;
    
}

botonDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-texto");

    var texto = form.texto.value;

    if(texto.length > 0){
        desencriptarTexto(texto);
        form.texto.value ="";
        spanTextoEncriptado.innerHTML= "";
    }else{
        spanTextoEncriptado.innerHTML = "No hay nada para desencriptar!";

    }
    
});
//Función para desencriptar el texto, usamos la función replace, esta busca coincidencias de cadenas de texto y las reemplaza por un valor definido.
function desencriptarTexto(texto){

    texto=texto.replace(/ai/g, 'a');
    texto=texto.replace(/enter/g, 'e');
    texto=texto.replace(/imes/g, 'i');
    texto=texto.replace(/ober/g, 'o');
    texto=texto.replace(/ufat/g, 'u');
       
    textoEncriptado.value = texto;
}
botonLimpiar.addEventListener("click", function(event){
    event.preventDefault();
    textArea.value ="";
    var form = document.querySelector("#form-texto");
    form.texto.value ="";
    textoCopiado.innerHTML ="";
    document.getElementById("mi-texto").focus();
    spanTextoEncriptado.innerHTML ="";
});

botonCopiar.addEventListener("click", botonCopiar);
    
