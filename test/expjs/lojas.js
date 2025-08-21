const poses = [
    { local:"P1", x:430.1272277832031, y:-799.68408203125, z:29.491147994995117 },
    { local:"P2", x:428.63909912109375, y:-799.658447265625, z:29.491147994995117 },
    { local:"P3", x:427.09613037109375, y:-799.7435913085938, z:29.491151809692383 },
    { local:"P4", x:425.56427001953125, y:-799.7276611328125, z:29.491151809692383 }
]


setTick( () => {  
    
    for (const key in poses) {
        
        DrawMarker(23, poses[key].x, poses[key].y, poses[key].z-0.9, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.2, 0.2,0.2, 255, 255, 255, 15, false, true, 2, null, null, false )
        
        if(IsEntityAtCoord(GetPlayerPed(-1), poses[key].x, poses[key].y, poses[key].z, 0.2, 0.2, 0.2, 0, 1, 0)){
      
         if(IsControlJustReleased(1, 54)){            
            SetNuiFocus(true, true)
            SendNuiMessage(JSON.stringify({
               painel:'abrir'
            }))       
        }
        } 
     }

})



RegisterNuiCallbackType("loja")
on('__cfx_nui:loja', (data, cb) =>{
    let item = data.item;
    if(item === "fechar"){
        SetNuiFocus(false)
    }   
    
})

//----------------------------------------------------

const container = document.querySelector(".container")
const btnx = document.getElementById("btnx")
const boxs = document.querySelectorAll(".box")
container.style.display = 'none';


window.addEventListener("message", (e)=>{
    let item = e.data;
    if(item.painel == "abrir"){
        container.style.display = 'flex';
    }
})


btnx.addEventListener("click", (e)=>{
    e.preventDefault()
    container.style.display = 'none';
    let item = "fechar";
    enviar(item)
})


boxs.forEach((box)=>{
    box.addEventListener("click",(e)=>{
        e.preventDefault()
        let item = box.getAttribute("data-item")
        enviar(item)        
    })
})

function enviar(valor){
    fetch(`https://${GetParentResourceName()}/loja`, {
        method:'POST',
        headers:{ 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ item: valor })
    })
    
}


//----------------------------------------------------

// <!DOCTYPE html>
// <html lang="pt-br">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>ui</title>
//     <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> 
//     <link rel="stylesheet" href="app.css">
// </head>
// <body>
//     <div class="container">
//         <div class="header-x">
//             <i class="material-icons" id="btnx"> close</i>
//         </div>
//         <div class="container-body">
//             <div class="box" data-item="1">
//                 <p>Item Um</p>
//             </div>

//             <div class="box" data-item="2">
//                 <p>Item dois</p>
//             </div>

//             <div class="box" data-item="3">
//                 <p>Item tres</p>
//             </div>

//             <div class="box" data-item="4">
//                 <p>Item quatro</p>
//             </div>
//             <div class="box" data-item="5">
//                 <p>Item cinco</p>
//             </div>

//             <div class="box" data-item="6">
//                 <p>Item seis</p>
//             </div>

//         </div>
//     </div>
    
//     <script src="app.js" defer></script>
// </body>
// </html>

//----------------------------------------------------

// * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//     outline: 0;
// }

// html,
// body {
//     height: 100vh;   
//     font-family: 'Kanit', sans-serif;
//     text-rendering: optimizeLegibility;
//     -webkit-font-smoothing: antialiased;
// }
// html {
//     font-size: 62%;
// }

// body {
//     font-size: 1.6rem;
//     text-decoration: none;   
// }

// /*====================================*/
// /*==[ ]===============================*/
// /*====================================*/

// .container{
//     width: 360px;
//     height: auto;  
//     display: flex;
//     flex-direction: column; 
//     background-color: #b1d3e2;   
//     position: absolute;
//     top: 50%;
//     right: 0%;
//     transform: translate(-2%, -50%);
// }

// /*==[ ]===============================*/

// .header-x {
//     width: 100%;
//     height: 25px;
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-end;
//     background-color: #212121;
//     padding: 5px;     
// }

// .header-x i{
//     font-size:1.6rem;
//     color: #fff;
//  }

// .header-x i:hover{
//    cursor: pointer;  
// }

// /*==[ ]===============================*/
// .container-body{
//     width: 100%;
//     height: auto;  
//     display: flex;
//     flex-direction: row; 
//     flex-wrap: wrap;
//     background-color: #2b2b2b;   
//     gap: 15px;
//     padding: 10px;
// }

// .box{
//     width: 70px;
//     height: 70px;
//     display: flex;
//     flex-direction: column;   
//     align-items: center; 
//     justify-content: center;
//     background-color: #fff;
//     cursor: pointer;
//     border-radius: 6px;
// }

// .box p{
//     font-size: 1rem;
// }

//----------------------------------------------------

// fx_version 'bodacious'
// game 'gta5'

// author 'You'
// version '1.0.0'

// client_script 'client.js'
// server_script 'server.js'
// shared_script 'shared.js'

// ui_page 'index.html'
// files {
//     'index.html',
//     'app.css',
//     'app.js'
// }