
Delay = (ms) => new Promise(res => setTimeout(res, ms));

var primeira = true;
var contador = 0;

on('onClientMapStart', async()=>{
    if(primeira){
        
        exports.spawnmanager.spawnPlayer({ x:  -1811.669, y:-1180.887, z: 13.017 }); 

        primeira = false; 
        await Delay(2500);
        exports.spawnmanager.setAutoSpawn(false);   

    }

})


setTick( async()=>{     
      if(IsEntityDead(PlayerPedId())){

        console.log("mortinho da silva")
        await Delay(2500);   
        
        contador = contador + 1;  
        
        console.log(contador)
         
        if(contador > 10){

            const ped = PlayerPedId();
            SetEntityCoords( ped, -1811.669, -1180.887, 13.017, false, false, true);
            
            await Delay(200);

            const [x,y,z] = GetEntityCoords(ped, true)
            NetworkResurrectLocalPlayer(x,y,z, true, true, false)
            SetPlayerInvincible(ped, false);
            ClearPedBloodDamage(ped)

            console.log("Renascido da morte")
            contador = 0;
        }       

      }
})

RegisterCommand("revive", ()=>{
    console.log("Revive")

    const [x,y,z] = GetEntityCoords(PlayerPedId(), true)
    NetworkResurrectLocalPlayer(x,y,z, true, true, false)
    SetPlayerInvincible(PlayerPedId(), false);
    ClearPedBloodDamage(PlayerPedId())

}, false)