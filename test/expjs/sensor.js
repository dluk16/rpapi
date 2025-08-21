Delay = (ms) => new Promise(resolve =>  setTimeout(resolve, ms));


setTick(() => {   
    verificar()       
});


const verificar = ()=>{        
    const [x, y, z] = GetEntityCoords(PlayerPedId(), false)
    const loc = [674.77, 585.13, 130.46]
    const distancia = Vdist(x, y, z, loc[0], loc[1], loc[2]	)  

    if( distancia <= 0.5){       
        Delay(3000)    
        emit('chat:addMessage', {
            args: ['Contador: ']
        })         
    }

}




//============================================================================


function alerta(texto){
    SetNotificationTextEntry("STRING")
	AddTextComponentString(texto)
	DrawNotification(false, false)
}


const agua = await IsEntityInWater(player);

//============================================================================

const extintor = [-2358.010986328125, 3245.587646484375, 92.90365600585938];
const fax = [-2362.036865234375, 3243.553955078125, 92.90365600585938];
const porta = [-2359.36572265625, 3246.795654296875, 92.90365600585938];
const armario = [-2353.369873046875, 3257.766845703125, 92.90370178222656];


let contador = 0;

setTick( async () => {   
    
  
    const playerCoord = GetEntityCoords(PlayerPedId(), false);//RETORNA UMA LISTA
    
    const [x,y,z] = GetEntityCoords(PlayerPedId(), false);//RETORNA OS ITENS DA LISTA

    const distancia = Vdist(x,y,z, extintor[0], extintor[1], extintor[2]) // MINIMO 0.2

    const distancia1 = Vdist2(x,y,z, fax[0], fax[1], fax[2]) //MINIMO 0.0025

    const distancia2 = 	GetDistanceBetweenCoords(x,y,z, porta[0],porta[1],porta[2], false)//MINIMO 0.1

    const distancia3 = IsEntityAtCoord(GetPlayerPed(-1), -2353.36, 3257.76, 92.90, 0.5, 0.5, 0.5, 0, 1, 0)//retorna 1 ou 0,  true ou false

    if(distancia < 0.2){ 
        Delay(1000)       
        contador = contador + 1;
        console.log("Contador: Extintor "+contador)    
        console.log(distancia)
    }

    if( distancia1 < 0.0025){ 
        Delay(1000)       
        contador = contador + 1;
        console.log("Contador Fax: "+contador)    
        console.log(distancia1)
    }


    if( distancia2 < 0.1){ 
        Delay(1000)       
        contador = contador + 1;
        console.log("Contador Porta: "+contador)  
        console.log(distancia2)  
        
    }

    if( distancia3){ 
        Delay(1000)       
        contador = contador + 1;
        console.log("Contador Armario: "+contador)    
        console.log(distancia3)
    }
   

})