var Delay = (ms) => new Promise(resolve =>  setTimeout(resolve, ms));

const extintor = [-2268.5712890625, 323.1750183105469, 175.2148895263672];

setTick( () => {  
    
    const [x,y,z] = GetEntityCoords(PlayerPedId(), false);
    const distancia = Vdist(x,y,z, extintor[0], extintor[1], extintor[2]) 

    DrawMarker(23, x, y, z-1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.4, 0.4,0.4, 255, 255, 0, 255, false, true, 2, null, null, false )
   
    if(distancia < 2){ 
        Delay(1000)      
        DrawMarker(23, extintor[0], extintor[1], extintor[2]-1.6, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.5,0.5, 255, 255, 0, 255, false, true, 2, null, null, false )   
    }   
})
