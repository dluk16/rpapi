on('onClientGameTypeStart', () => {
  exports.spawnmanager.setAutoSpawnCallback(() => {     
    exports.spawnmanager.spawnPlayer(
      {             
        x: -2360.79,
        y: 3245.13,
        z: 92.90,
        heading: 291.71,
        model: 'mp_m_freemode_01',
        skipFade: false
      }   
    );
  });   
  exports.spawnmanager.setAutoSpawn(true)
  exports.spawnmanager.forceRespawn()  
});


RegisterCommand("resete", async() =>{   
await modelo()
}, false)

const modelo = ()=>{   

let model = 'mp_m_freemode_01';

if(IsModelInCdimage(model) && IsModelValid(model)){
    RequestModel(model)

    while(!HasModelLoaded(model)){
        Wait(1000)
    }
    SetPlayerModel(PlayerId(), model)

    if( model !== "mp_f_freemode_01" && model !== "mp_m_freemode_01"){
        SetPedRandomComponentVariation(PlayerPedId(), true)
    }else{           
        SetPedComponentVariation(PlayerPedId(), 0, 0, 0, 0)//rosto         
        SetPedComponentVariation(PlayerPedId(), 1, 0, 0, 0)//mascaras
        SetPedComponentVariation(PlayerPedId(), 2, 6, 1, 2)//cabelos
        SetPedComponentVariation(PlayerPedId(), 3, 15, 0, 0)//corpo
        SetPedComponentVariation(PlayerPedId(), 4, 29, 0, 0) //calças, ped, parte, modelo, textura, cor
        SetPedComponentVariation(PlayerPedId(), 5, 0, 0, 0)//mochilas e paraquedas
        SetPedComponentVariation(PlayerPedId(), 6, 1, 0, 0)//sapatos
        SetPedComponentVariation(PlayerPedId(), 7, 151, 0, 0)//acessorios
        SetPedComponentVariation(PlayerPedId(), 8, 15, 0, 0)//camiseta
        SetPedComponentVariation(PlayerPedId(), 9, 0, 0, 0)//colete
        SetPedComponentVariation(PlayerPedId(), 10, 53, 0, 0)//adesivos
        SetPedComponentVariation(PlayerPedId(), 11, 45, 0, 0)//jaqueta
    }
    SetModelAsNoLongerNeeded(model)
}
}

//======================================================================

RegisterCommand("vestir", async(source, args) =>{  
    let tipo =   args[0]
    let modelo = parseInt(args[1])
  
    if(tipo == 'jaqueta'){       
       await SetPedComponentVariation(PlayerPedId(), 11, modelo, 0, 0) 
    }else if(tipo == 'camisa'){       
        await SetPedComponentVariation(PlayerPedId(), 8, modelo, 0, 0) 
    }else if(tipo == 'calca'){
        await SetPedComponentVariation(PlayerPedId(), 4, modelo, 0, 0) 
    }else if(tipo == 'sapatos'){
        await SetPedComponentVariation(PlayerPedId(), 6, modelo, 0, 0) 
    }else if(tipo == 'mochila'){
        await SetPedComponentVariation(PlayerPedId(), 5, modelo, 0, 0) 
    }else if(tipo == 'corpo'){
        await SetPedComponentVariation(PlayerPedId(), 3, modelo, 0, 0) 
    }else if(tipo == 'capacete'){
        await SetPedComponentVariation(PlayerPedId(), 2, modelo, 0, 0) 
    }else{
        console.log("Nada acontece")
    }
     
}, false)


//=================================================================


on('onClientGameTypeStart', () => {
    
    let firstSpawn = true;

    exports.spawnmanager.setAutoSpawnCallback( function(){
        if(firstSpawn){
            exports.spawnmanager.spawnPlayer({              
                x: 686.245,
                y: 577.950,
                z: 130.461,
                heading: 291.71,
                model: 'mp_m_freemode_01',
                skipFade:false
            })
            firstSpawn = false;
        }else
        {
            exports.spawnmanager.spawnPlayer({
                x: 354.09,
                y: -603.54,
                z: 28.78,
                heading: 260.0,
                skipFade: false                
            }, function(spawn){
                ClearPedBloodDamage(PlayerPedId())
            })              
        } 
    })               
    exports.spawnmanager.setAutoSpawn(true)    
  
});


on('onClientGameTypeStart', () => {
    exports.spawnmanager.setAutoSpawnCallback(() => {     
      exports.spawnmanager.spawnPlayer(
        {             
          x: -2360.79,
          y: 3245.13,
          z: 92.90,
          heading: 291.71,
          model: 'mp_m_freemode_01',
          skipFade: false
        }   
      );
    });   
    exports.spawnmanager.setAutoSpawn(true)
    exports.spawnmanager.forceRespawn()  
  });

  setTick(() => {   
    if(IsEntityDead(PlayerPedId())) {
        morto()
    }
  });


  function morto(){
    exports.spawnmanager.spawnPlayer({
        x: -2353.36,
        y: 3257.76,
        z: 92.90
    })
  }


  RegisterCommand("tp", () =>{   
    exports.spawnmanager.spawnPlayer({
        x: 686.245,
        y: 577.950,
        z: 130.461
    })
 }, false)



 
var morto = false;
var contador = 0;

setTick( async()=>{  

    if(IsEntityDead(PlayerPedId())){   

        if(!morto){           
            SendNuiMessage(JSON.stringify({ painel: "mabrir" }))
            morto = true;
        }

      await Delay(2500); 

      contador = contador + 1; 

      if(contador > 10){
         renascer()
      }   

    }
})

async function renascer(){
    const ped = PlayerPedId();
    SetEntityCoords( ped, -1811.669, -1180.887, 13.017, false, false, true);

    await Delay(200);
   
    const [x,y,z] = GetEntityCoords(ped, true)
    NetworkResurrectLocalPlayer(x,y,z, true, true, false)
    SetPlayerInvincible(ped, false);
    ClearPedBloodDamage(ped)
    SetNuiFocus(false)
    SendNuiMessage(JSON.stringify({ painel: "mfechar" }))
    morto = false;
    contador = 0;
}




 
 /*================================================================*/
 /*==[ Tela de Morte ] ===========================================*/
 /*==============================================================*/



//  .container-morte{
//     width: 100%;
//     height: 100%;
//     background: rgb(237,4,18);
//     background: radial-gradient(circle, rgba(237,4,18,0.5284488795518207) 0%, rgba(19,1,1,0.9682247899159664) 66%);
// }



// .container-botton{
//     width: 450px;
//     height: 100px;
//     position: absolute;
//     top: 98%;
//     left: 50%;
//     transform: translate(-50%, -98%);
//     display: flex;
//     flex-direction: column;   
    
// }


// .grid-r2{
//     width: 100%;
//     height: auto;
//     display: grid;
//     grid-template-columns: 90px 1fr;   
//     justify-content: center;
//     align-items: center;
// }

// .grid-r2 i{
//     font-size: 10rem;
//     color: #b71c1c; 
//     margin-top: -20px;
// }

// .box{
//     width: 100%;
//     height: auto;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;   
//     padding: 15px;
// }

// .box p{
//     font-size: 1.9rem;
//     color: #fff;
// }
// .box button{
//     width: 120px;
//     height: 40px;
//     font-size: 1.6rem;
//     margin-top: 15px;
//     cursor: pointer;
//     border: none;
//     background-color: #212121;
//     border-radius: 4px;
//     color: #fff;
// }

