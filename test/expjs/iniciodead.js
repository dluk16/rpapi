Delay = (ms) => new Promise(resolve =>  setTimeout(resolve, ms));

on('onClientGameTypeStart', async() => {
    exports.spawnmanager.setAutoSpawnCallback(() => {     
      exports.spawnmanager.spawnPlayer(
        {             
          x: -2354.492,
          y: 3250.745,
          z: 32.810,
          heading: 291.71,
          model: 'mp_m_freemode_01',
          skipFade: false
        }   
      );
    });  
    SetNuiFocus(true, true)
    await Delay(2500)
    exports.spawnmanager.setAutoSpawn(false)  
  
  });
  


RegisterNuiCallbackType('inicio')
  on('__cfx_nui:inicio', async(data, cb) => {    
    
    let item = data.item;
    console.log(item)  

    if( item == 'entrar'){
       await vestir()
       SetNuiFocus(false) 
       cb({info:item}) 
    } else{
       cb({error:'sem dados'})
    }

});



  const vestir = ()=>{
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

  
 
 
  var contador = 0;
 

  setTick(async()=>{

    await Delay(2500)  
     
    let ped = PlayerPedId()
    let dead = IsEntityDead(ped)
   

    if(dead){

      contador++;      
     
      if(contador > 30 ){
        ResurrectPed(ped)
        SetEntityCoords( ped, -2354.492, 3250.745, 32.810, false, false, true);
        contador = 0; 
        
       //ClearPedBloodDamage(ped)

      }
    }   
  }) 

setTick( ()=>{  
  let dead = IsEntityDead(PlayerPedId())
  if(dead){
    if(contador < 30){
      display(contador)
    }  
    
  }     
 
})



function display(contador){   
    
    SetTextScale(0.0, 0.5)
    SetTextFont(0)
    SetTextProportional(1)
    SetTextColour(255, 255, 255, 255)
    SetTextDropshadow(0, 0, 0, 0, 255)
    SetTextEdge(2, 0, 0, 0, 150)
    SetTextDropShadow()
    SetTextOutline()
    SetTextCentre(1)

    BeginTextCommandDisplayText("STRING")
    AddTextComponentSubstringPlayerName(contador)
    EndTextCommandDisplayText(0.5, 0.5)  
}

RegisterCommand('renascer',()=>{
  ReviveInjuredPed(PlayerPedId()) 
})

RegisterCommand('vidas',()=>{ 
  SetEntityHealth(PlayerPedId(),50)
})

//=======================================================================


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>ui</title>
//     <style>
//         body{
//             margin: 0%;    
//             padding: 0%;
//         }
//         .container{   
//             width: 100%;
//             height: 100%;
//             position: absolute;
//             display:flex;
//             flex-direction: column;        
//             background-color: black;
//         }

//         button{
//             width: 100px;
//             height: 100px;
//             display:flex;
//             flex-direction: column;
//             background-color: aliceblue; 
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%); 
//         }
//     </style>
// </head>
// <body>
//     <div class="container">
//         <button id="btn">Entrar</button>
//     </div> 
//     <script>

//         const btn = document.getElementById('btn');
//         const container =  document.querySelector('.container')
//         // container.style.display = 'none'
//         // btn.style.display = 'none'

//         btn.addEventListener('click', ()=>{            
//             enviar()
//             container.style.display = 'none'
//             btn.style.display = 'none'
//         })

//         function enviar(){          
//           fetch(`https://${GetParentResourceName()}/inicio`,{
//             method:'POST',
//             headers:{
//               'Content-Type': 'application/json; charset=UTF-8'
//             },
//             body: JSON.stringify({ item: 'entrar'})
//           })
//           .then( response => response.json())
//           .then( response => console.log(response))
//         }

//         window.addEventListener('message', (event)=>{            
//         })
      
           
//     </script>   
// </body>
// </html>