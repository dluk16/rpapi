Delay = (ms) => new Promise(res => setTimeout(res, ms));
const extintor = [ -2358.01, 3245.58, 92.90 ];


setTick(() => {   
       
    // const [x,y,z] = GetEntityCoords(PlayerPedId(), false);//RETORNA OS ITENS DA LISTA
    // const distancia = Vdist(x,y,z, extintor[0], extintor[1], extintor[2]); // MINIMO 0.2  

    // if(distancia < 0.2){ 
    //     Delay(1000)      
    //     console.log(distancia)
    // }
    Delay(500)
    circulo()
    circulo2()
    circulo3()
    DrawText()

    // if ( Vdist2(GetEntityCoords(PlayerPedId(), false), -2358.01, 3245.58, 92.90 ) < 5000 ){        
    //    Draw3DText(-2358.01, 3245.58, 92.90, 1.5, "test")
    // }
})


function circulo(){
    DrawMarker( 2, -2358.01, 3245.58, 92.90 -0.85, 
        0.0, 0.0, 0.0, 
        0.0, 0.0, 0.0,  
        0.2, 0.2,0.2,
        255, 255, 0, 255,
        false, true, 2, null, null, false
     )
 }

 function circulo2(){
    DrawMarker( 26, -2359.36, 3246.79, 92.90 -0.98, 
        0.0, 0.0, 0.0, 
        0.0, 0.0, 0.0,  
        0.1, 0.1,0.1,
        187, 214, 91, 255,
        false, true, 2, null, null, false
     )
 }

 function circulo3(){
    DrawMarker( 23, -2362.03, 3243.55, 92.90 - 0.98,
        0.0, 0.0, 0.0, 
        0.0, 0.0, 0.0,  
        0.2, 0.2,0.3,
        240, 240, 240, 255,
        false, true, 2, null, null, false
     )
 }

 function DrawText(){  
   
    let visivel, x, y = World3dToScreen2d( -2362.03, 3243.55, 92.90 );   

    if(visivel){
        SetTextScale(0.0, 1.0)
        SetTextFont(0)
        SetTextProportional(1)
        SetTextColour(255, 255, 255, 255)
        SetTextDropshadow(0, 0, 0, 0, 255)
        SetTextEdge(2, 0, 0, 0, 150)
        SetTextDropShadow()
        SetTextOutline()
        SetTextEntry("STRING")
        SetTextCentre(1)
        AddTextComponentString("Abrir")
        DrawText(x,y)
    }   
   
}




//  function Draw3DText(x, y, z, scl_factor, text){
    
//     let onScreen, _x, _y = World3dToScreen2d(x, y, z)

//     let p = GetGameplayCamCoords()

//     let distance = GetDistanceBetweenCoords(p.x, p.y, p.z, x, y, z, 1)

//     let scale = (1 / distance) * 2
//     let fov = (1 / GetGameplayCamFov()) * 100;

//     scale = scale * fov * scl_factor;

//     if(onScreen){
//         SetTextScale(0.0, scale)
//         SetTextFont(0)
//         SetTextProportional(1)
//         SetTextColour(255, 255, 255, 255)
//         SetTextDropshadow(0, 0, 0, 0, 255)
//         SetTextEdge(2, 0, 0, 0, 150)
//         SetTextDropShadow()
//         SetTextOutline()
//         SetTextEntry("STRING")
//         SetTextCentre(1)
//         AddTextComponentString(text)
//         DrawText(_x, _y)
//     }
   
// }
// GET_SCREEN_RESOLUTION

const [x, y] = GetScreenResolution();
const number4 = GetGameplayCamFov();





//------------------------------------------------------------------

function Texto3d(){

    const [ok, sx, sy] = GetScreenCoordFromWorldCoord( px, py, pz);//World3dToScreen2d
    const [ px, py, pz ] = GetFinalRenderedCamCoord(); //GetGameplayCamCoords()
    
    const distance = GetDistanceBetweenCoords(px, py, pz, objx, objy, objz, 1)
    
    if(ok){
        SetTextScale(0.0, 1.0)	
        SetTextFont(0)
        SetTextProportional(1)
        SetTextDropshadow(0, 0, 0, 0, 255)
        SetTextEdge(2, 0, 0, 0, 150)
        SetTextDropShadow();
        SetTextOutline();
        BeginTextCommandDisplayText('TEST_LABEL')//SetTextEntry("STRING")
        SetTextCentre(1)
        AddTextComponentSubstringPlayerName('Hello, World!')//AddTextComponentString(text)
        EndTextCommandDisplayText(0.5, 0.5)//DrawText(_x, _y)
    }

}

//------------------------------------------------------------------

function display(){
    const [ok, sx, sy] = GetScreenCoordFromWorldCoord( px, py, pz);
    if(ok){
        SetTextScale(0.0, 1.0)	
        SetTextFont(0)
        SetTextProportional(1)
        SetTextDropshadow(0, 0, 0, 0, 255)
        SetTextEdge(2, 0, 0, 0, 150)
        SetTextDropShadow();
        SetTextOutline();
        BeginTextCommandDisplayText('TEST_LABEL')
        SetTextCentre(1)
        AddTextComponentSubstringPlayerName('Hello, World!')
        EndTextCommandDisplayText(0.5, 0.5)
    }
}



    // local mph = 2.2369
    // local kph = 3.6 
  
    while(true){

        Wait(1000)
        let speed = (GetEntitySpeed(GetVehiclePedIsIn(GetPlayerPed(-1), false))*2.2369)
               
        if(IsPedInAnyVehicle(GetPlayerPed(-1), false)) {
            text(Math.floor(speed))
        }          
       
    }
    
    function text(content) {
        SetTextFont(1)
        SetTextProportional(0)
        SetTextScale(1.9,1.9)
        SetTextEntry("STRING")
        AddTextComponentString(content)
        DrawText(0.9,0.7)
    }
       
  