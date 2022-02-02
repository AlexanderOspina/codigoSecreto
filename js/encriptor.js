console.log("Hola");

var vectorDicionario=[];

var frase="";
var fraseEncrip="";
var fraseDesEncrip="";

let vectorFrase=[];


//Campos de texto seccion cifrar
var txEncriptar=document.querySelector("#txEncriptar");
var btnEncriptar=document.querySelector("#btnEncriptar");
var lbFraseEncriptada=document.querySelector("#lbFraseEncriptada");

//Campos de texto seccion descifrar
var txdesEncriptar=document.querySelector("#txdesEncriptar");
var btndesEncriptar=document.querySelector("#btndesEncriptar");
var lbFrasedesEncriptada=document.querySelector("#lbFrasedesEncriptada");

//Seccion con textos encriptados
var sectionTextosEncriptados=document.querySelector("#txsencriptados");


btnEncriptar.addEventListener("click",function(){
    txdesEncriptar.value="";
    lbFrasedesEncriptada.textContent="";
    
    frase="";
    frase=txEncriptar.value;   
    encriptarFrase();
    lbFraseEncriptada.textContent=fraseEncrip;
    lbFrasedesEncriptada.textContent="";
    txdesEncriptar.textContent="";

    let nlabel=document.createElement("label");
    nlabel.textContent=fraseEncrip;
    sectionTextosEncriptados.appendChild(document.createElement("br"));
    sectionTextosEncriptados.appendChild(nlabel);




});

btndesEncriptar.addEventListener("click",function(){
    txEncriptar.value="";
    lbFraseEncriptada.textContent="";
    
    fraseDesEncrip="";
    frase="";
    fraseEncrip=txdesEncriptar.value;
    
    desEncriptarFrase()
    lbFrasedesEncriptada.textContent=fraseDesEncrip;
    
})


generarDiccionario();
/*
console.log("El valor del diccionario es: "+vectorDicionario[3][1]);

console.log("El valor del diccionario es: "+buscarInverso(vectorDicionario,"A"));

console.log("El valor del diccionario cifrado es: "+buscarCodigo(vectorDicionario,35));
*/

for(let i=0;i<frase.length;i++){
    let ch=frase[i];   

    fraseEncrip+=buscarCodigo(vectorDicionario,ch.charCodeAt(0));    
  
}

console.log("Frase Encriptada es: "+fraseEncrip);

for(let i=0;i<fraseEncrip.length;i++){
    let ch=fraseEncrip[i];

    fraseDesEncrip+=String.fromCharCode(buscarInverso(vectorDicionario,ch));
    
    //console.log("El valor ascill de "+fraseEncrip[i]+" es: "+buscarInverso(vectorDicionario,ch));
}

console.log("Frase DesEncriptada es: "+fraseDesEncrip);

//console.log(vectorDicionario);

/*


//Optener el codigo ascii
var ch='A';
console.log(ch.charCodeAt(0));

//Give the ascii code
console.log(String.fromCharCode(223));

*/


/*
Toma como los caracteres del codigo ASCII del 32 al 126 los agrega a un arreglo 
de dos campos 1 campo con un valor de 32 a 126, el otro campo con el valor del codigo ASCII generado de manera aleatoria
*/
function generarDiccionario(){

    for(let i=32;i<126;i++){
        
        //la funcion String.fromCharCode toma el valor ASCII de un numero aleatorio entre 32-126
        let codigo=String.fromCharCode(aleratorio(32,126))
        //console.log(codigo);

        //Valida si el valor a agregar al diccionario no esta en el diccionario antes de agreagarlo
        if(!validarRepetido(vectorDicionario,codigo)){
            vectorDicionario.push([i,codigo]);
        }else{
            i--;
        }
        
    }

}

function aleratorio(min,max){
    return Math.floor(Math.random()*(max-min))+min;

}

//La funcion valida si el valor a ingresar el el diccionario esta repetido
//La funcion includes() busca un valor en una matriz devolviendo false o true
function validarRepetido(vecDic,valor){    

    for(let i=0;i<vecDic.length;i++){
        if(vecDic[i][1]==valor){
            return true;
        }

    }
    
    //console.log(vecDic.includes(valor));
    return vecDic.includes(valor);
}


/*
Recorre cada uno de los caracteres de frase, busca el codigo correspondiente en el vectorDiccionario mediante el codigo ASCII
y lo agrega a fraseEncrip
*/
function encriptarFrase(){
    fraseEncrip="";
    for(let i=0;i<frase.length;i++){
        let ch=frase[i];      
    
        fraseEncrip+=buscarCodigo(vectorDicionario,ch.charCodeAt(0));        
      
    }
    
    console.log("Frase Encriptada es: "+fraseEncrip);

}

/*
Recorre cada uno de los caracteres de fraseEncrip, busca el codigo correspondiente en el vectorDiccionario 
la funcion String.fromCharCode() toma el valor real con respecto al codigo ASCII devuelto buscarInverso();
*/
function desEncriptarFrase(){
    fraseDesEncrip="";
    for(let i=0;i<fraseEncrip.length;i++){
        let ch=fraseEncrip[i];   
    
        fraseDesEncrip+=String.fromCharCode(buscarInverso(vectorDicionario,ch));        
       
    }   
    
    console.log("Frase DesEncriptada es: "+fraseDesEncrip);
}

/*
la funcion toma el valor del caracter del codigo ASCII ubicado de manera aleatoria y los busca en el vectordiccionario
una vez encontradao el valor retorna el correspondiente numero real del codigo ascii ubicado en el vector

*/
function buscarInverso(vecDic,valor){
    caracter="";
    for(let i=0;i<vecDic.length;i++){
        if(vecDic[i][1]==valor){
            caracter=vecDic[i][0];
            return caracter;
        }

    }    
    
    return "ErrorCaracter"

}

/*
La funcion busca el valor correspondiente del codigo ASCII con respecto al codigo agregado en el diccionario de manera aleatoria
0: Array(2)
    0: 32
    1: ","
    length: 2
    [[Prototype]]: Array(0)
1: Array(2)
    0: 33
    1: "R"
    length: 2
    [[Prototype]]: Array(0)
*/
function buscarCodigo(vecDic,valor){
    caracter="";
    for(let i=0;i<vecDic.length;i++){
        if(vecDic[i][0]==valor){
            caracter=vecDic[i][1];
            return caracter;
        }

    }    
    
    return "ErrorCaracter"
}