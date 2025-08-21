setTick( async () => {   
    if(IsControlJustReleased(0, 303)){   //303 = U      
        posicao()
    }   
})

//PlayerPedId() e o Entity

const posicao = ()=>{
    let [x, y, z] = GetEntityCoords(PlayerPedId(), false); 
    let localizacao = x.toFixed(2) + ",  "+y.toFixed(2) + ",  "+ z.toFixed(2);  
    console.log(localizacao)
    console.log(`${x}, ${y}, ${z}`); 
}

RegisterCommand("vloc", () =>{    
    const handler = GetVehiclePedIsIn(PlayerPedId());
    const [ x, y, z] = GetEntityCoords(handler, false);  
    console.log(x+", "+y+", "+z)
}, false)


RegisterCommand("ploc", () =>{ 
    const [x,y,z] = GetEntityCoords(PlayerPedId(), false);
    let zs = z - 1.0;
    console.log(x+", "+y+", "+zs)
}, false)

var Delay = (ms) => new Promise(resolve =>  setTimeout(resolve, ms));

const extintor = [-1924.311279296875, 2035.8505859375, 139.7351531982422];

setTick( () => {  
    
    const [x,y,z] = GetEntityCoords(PlayerPedId(), false);
    const distancia = Vdist(x,y,z, extintor[0], extintor[1], extintor[2]) 

    DrawMarker(23, x, y, z-1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.4, 0.4,0.4, 255, 255, 0, 255, false, true, 2, null, null, false )
   
    if(distancia < 5){ 
        Delay(1000)      
        DrawMarker(23, extintor[0], extintor[1], extintor[2], 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.5,0.5, 255, 255, 0, 255, false, true, 2, null, null, false )
          
    }   
})