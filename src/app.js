let input = document.querySelector("textarea");
const button1 = document.getElementById("encrypt-btn");
const button2 = document.getElementById("decrypt-btn");
let dibujo = document.getElementById("figura-inicial");
input.value = '';
const pantallaMuestra = document.getElementById('display-texto');
const textToShow = document.getElementById('displayed-text');


function escribirEnPantalla(str){
    const parrafo = document.createElement('textarea');
    const nodo = document.createTextNode(str);
    parrafo.id = 'text-on-screen';
    parrafo.readOnly = 'true';

    parrafo.appendChild(nodo);
    textToShow.appendChild(parrafo);
}


function limpiarPantalla(){
    const element = document.getElementById('text-on-screen');
    element.remove();
}



pantallaMuestra.style.display = 'none';




let flag1 = false;

function desencriptar(){
    if(input.value != ''){
        if(flag1 || flag2){
            limpiarPantalla();
        }
    
        dibujo.style.display = 'none';
        str = input.value;
        let reemplazos = ['imes','ai','enter','ober','ufat'];
        let keyLetters = [/imes/g,/ai/g,/enter/g,/ober/g,/ufat/g];
        let vocales = ['i','a','e','o','u'];
    
        for(let i = 0; i<reemplazos.length;i++){
            if(str.includes(reemplazos[i])){
                str = str.replace(keyLetters[i],vocales[i]);
            }
           
        }
        console.log(str);
        pantallaMuestra.style.display = 'initial';
        escribirEnPantalla(str);
        input.value ='';
        flag1 = true;
    }
}



let flag2 = false;

function encriptador(){
    if(input.value != ''){
        if (flag2 || flag1){
            limpiarPantalla();
        }
        str = input.value;
        dibujo.style.display = 'none';
        arr1 = str.split('');
        arrCopia= [...arr1];
        let reemplazos = ['imes','ai','enter','ober','ufat'];
        let vocales = ['i','a','e','o','u'];
        
        for(let i=0; i<vocales.length;i++){
           for(let j=0;j<arr1.length;j++){
               if(vocales[i] === arr1[j]){
                   arrCopia.splice(j,1,reemplazos[i]);
               }
           }
        }
        
        mensajeEncriptado = arrCopia.join('');
        console.log(mensajeEncriptado);
        pantallaMuestra.style.display = 'initial';
        escribirEnPantalla(mensajeEncriptado);
        input.value ='';
        flag2 = true;
    }

}


function copiarTexto() {
    let textToCopy = document.querySelector("#text-on-screen");
    textToCopy.select();
    document.execCommand('copy');
  }
  
document.querySelector("#copy-btn").addEventListener("click", copiarTexto);
  

button1.onclick = encriptador;
button2.onclick = desencriptar;


