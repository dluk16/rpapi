var tempo = 60; //segundos
var msecondos = 1000;//milesegundos

var contador = null;
var tempofinal = tempo * msecondos;

contar();
     
function contar(){
    contador = setInterval(()=>{
        tempo--;
        console.log(tempo)
    }, msecondos);

    setTimeout(() => {
    clearInterval(contador);
    tempo = 0;
    contador = null;
}, tempofinal);


}   


//================================================================



var mostrarTexto = false;

setTick(()=>{  
    if(mostrarTexto){
        texto() 
    }
   
    if(IsControlJustReleased(0, 303)){   //303 = U      
        mostrarTexto = true;
        contar();
    }   

})

var tempo = 30; //segundos
var msecondos = 1000;//milesegundos

var contador = null;
var tempofinal = tempo * msecondos;


     
function contar(){
    
    contador = setInterval(()=>{
        tempo--;
        console.log(tempo)        
    }, msecondos);

    setTimeout(() => {
        clearInterval(contador);
        tempo = 0;
        contador = null;  
        console.log("Finalizou")      
    }, tempofinal);
}

function texto(){
    
    SetTextScale(1.5,1.5)	
    SetTextFont(0)
    SetTextProportional(1)

    BeginTextCommandDisplayText('STRING')
    AddTextComponentString(tempo)
    EndTextCommandDisplayText(0.5, 0.5)
}