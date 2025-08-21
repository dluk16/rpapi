RegisterCommand('bid', (source, args, raw) => {
  const id = PlayerPedId();
  console.log("ID do jogador: " + id);
}, false);

//===================================================

setTick( async () => {   
    if(IsControlJustReleased(0, 303)){   //303 = U      
        posicao()
    } 
    
    
})

const posicao = ()=>{
    let [x, y, z] = GetEntityCoords(PlayerPedId(), false); 
    let localizacao = x.toFixed(2) + ",  "+y.toFixed(2) + ",  "+ z.toFixed(2);  
    console.log(localizacao)
    console.log(`${x}, ${y}, ${z}`); 
}

//===================================================


//===================================================


RegisterCommand('buscar', (source, args, raw) => {
  
    console.log("Source: "+source);
    console.log("PlayerPedId: "+PlayerPedId());     
    console.log("PlayerServerId: "+GetPlayerFromServerId(source))
    console.log("Player index: "+GetPlayerIndex())
    console.log("PedFromServerId: "+GetPlayerPed(GetPlayerFromServerId(source)))

}, false);